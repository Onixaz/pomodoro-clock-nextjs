import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import * as Styled from '../styles/utils';

import Adjusters from '../components/Adjusters';
import Clock from '../components/Clock';
import { NextPage } from 'next';
import Beep from '@/components/Beep';

interface IndexPageProps { }

const Home: NextPage<IndexPageProps> = () => {
  const interval = useRef<any>(null);
  const audioBeep = useRef<any>(null);
  const [sessionActive, setSessionActive] = useState(true);
  const [sessionTimer, setSessionTimer] = useState(1500);
  const [breakTimer, setBreakTimer] = useState(300);


  const handleSwitch = () => {
    setSessionActive((prevState) => !prevState);
  }

  const playBeep = () => {
    audioBeep.current.play()
  }

  const stopBeep = () => {
    audioBeep.current.pause();
    audioBeep.current.currentTime = 0;
  }

  return (
    <>
      <Styled.Container>
        <Beep audioBeep={audioBeep} />

        <Styled.AdjustersWrapper>
          <Adjusters
            setSessionTimer={setSessionTimer}
            setBreakTimer={setBreakTimer}
            value={sessionTimer}
            label='Session'
            labelId='session-label'
            lengthId='session-length'
            decId='session-decrement'
            incId='session-increment' />
          <Adjusters
            setSessionTimer={setSessionTimer}
            setBreakTimer={setBreakTimer}
            value={breakTimer}
            label='Break'
            labelId="break-label"
            lengthId='break-length'
            decId='break-decrement'
            incId='break-increment' />
        </Styled.AdjustersWrapper>
        <Clock
          interval={interval}
          setSessionActive={setSessionActive}
          setBreakTimer={setBreakTimer}
          setSessionTimer={setSessionTimer}
          sessionActive={sessionActive}
          sessionTimer={sessionTimer}
          breakTimer={breakTimer}
          stopBeep={stopBeep}
          playBeep={playBeep}
          handleSwitch={handleSwitch} />

        <Styled.SwitchWrapper>
          <Styled.Switch type="checkbox" readOnly checked={!sessionActive} onClick={handleSwitch}></Styled.Switch>
          <Styled.SwitchLabel htmlFor=""><Styled.SwitchSpan>Session</Styled.SwitchSpan></Styled.SwitchLabel>
        </Styled.SwitchWrapper>
        <Styled.Github href="">
          Source code on Github
        </Styled.Github>
      </Styled.Container>
    </>
  )
}

export default Home

