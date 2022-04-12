import React, { Dispatch, FC, MutableRefObject, Ref, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import { BiPlay, BiRefresh, BiPause, BiPlus, BiMinus } from 'react-icons/bi';
import * as Styled from './styles'

interface ClockProps {
    interval: MutableRefObject<ReturnType<typeof setInterval>>
    handleSwitch: any
    sessionActive: boolean
    sessionTimer: number
    breakTimer: number
    stopBeep: ()=>void
    playBeep:  ()=>void
    setSessionTimer: Dispatch<SetStateAction<number>>
    setBreakTimer: Dispatch<SetStateAction<number>>
    setSessionActive: Dispatch<SetStateAction<boolean>>
}

const Clock: FC<ClockProps> = ({ interval, sessionActive, sessionTimer, breakTimer, handleSwitch, setSessionTimer, setBreakTimer, setSessionActive, playBeep, stopBeep, }) => {


    const [timer, setTimer] = useState(sessionActive ? sessionTimer : breakTimer);
    const [isRunning, setIsRunning] = useState(false);
    const selection = sessionActive ? sessionTimer : breakTimer
    const calculatedRatio = 1106 / selection


    const makeClock = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = Math.floor(totalSeconds % 60);
        return `${mins > 9 ? mins : '0' + mins}:${secs > 9 ? secs : '0' + secs}`;
    }

    useEffect(() => {
        setTimer(sessionActive ? sessionTimer : breakTimer)
    }, [sessionActive, sessionTimer, breakTimer])

    useEffect(() => {
        if (timer === 0) {
            playBeep()
            handleSwitch()
        }
    }, [timer])

    const startClock = () => {
        setIsRunning(true)
        interval.current = setInterval(() => {
            setTimer((prevState) => prevState > 0 ? prevState - 1 : prevState)
        }, 1000);

    }

    const stopClock = () => {
        setIsRunning(false)
        clearInterval(interval.current);
    }

    const resetClock = () => {
        setTimer(1500)
        setSessionTimer(1500);
        setBreakTimer(300);
        setSessionActive(true)
        stopBeep()
        stopClock();
    }

    return (
        <>
            <Styled.OuterWrapper>
                <Styled.ClockWrapper>
                    <Styled.Label id="timer-label">{sessionActive ? 'Session' : 'Break'}</Styled.Label>
                    <Styled.Value id="time-left">{makeClock(timer)}</Styled.Value>
                    <Styled.CircleWrapper>
                        <Styled.SVG width="400px" height="400px">
                            <Styled.Circle ratio={1106 + calculatedRatio * timer} cx="200" cy="200" r="176"></Styled.Circle>
                            <Styled.CircleFill ratio={timer !== 0 ? 1106 - calculatedRatio * timer : 1106} cx="200" cy="200" r="176"></Styled.CircleFill>
                        </Styled.SVG>
                    </Styled.CircleWrapper>
                </Styled.ClockWrapper>
            </Styled.OuterWrapper>
            <Styled.ButtonWrapper>
                <Styled.Button id="start_stop" onClick={!isRunning ? startClock : stopClock}> {!isRunning ? <BiPlay /> : <BiPause />}</Styled.Button>
                <Styled.Button id="reset" onClick={resetClock}><BiRefresh /></Styled.Button>
            </Styled.ButtonWrapper>
        </>
    )
}

export default Clock
