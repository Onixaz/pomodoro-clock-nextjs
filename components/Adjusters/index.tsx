import React, { Dispatch, FC, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import * as Styled from './styles'
import { BiPlus, BiMinus } from 'react-icons/bi';

interface AdjustersProps {
    label: string
    disabled?: boolean
    value: number
    labelId: string
    lengthId: string
    incId: string
    decId: string
    setSessionTimer: Dispatch<SetStateAction<number>>
    setBreakTimer: Dispatch<SetStateAction<number>>
}

const Adjusters: FC<AdjustersProps> = ({ label, disabled, value, labelId, lengthId, decId, incId, setSessionTimer, setBreakTimer }) => {



    const incrementTimer = (type: string) => {
        if (type === 'Session') {
          setSessionTimer((prevState) => prevState < 3600 ? prevState + 60 : prevState);
        }
        else {
          setBreakTimer((prevState) => prevState < 3600 ? prevState + 60 : prevState);
        }
      }
    
      const decrementTimer = (type: string) => {
        if (type === 'Session') {
          setSessionTimer((prevState) => prevState > 60 ? prevState - 60 : prevState);
        }
        else {
          setBreakTimer((prevState) => prevState > 60 ? prevState - 60 : prevState);
        }
      }

    return (
        <Styled.Container >
            <Styled.Label id={labelId}>{label}</Styled.Label>
            <Styled.Wrapper>
                <Styled.Button disabled={disabled} id={incId} onClick={()=> incrementTimer(label)}><BiPlus /></Styled.Button>
                <Styled.Button disabled id={lengthId}>{Math.floor(value / 60)}</Styled.Button>
                <Styled.Button disabled={disabled} id={decId} onClick={()=> decrementTimer(label)}><BiMinus /></Styled.Button>
            </Styled.Wrapper>
        </Styled.Container>

    )
}

export default Adjusters
