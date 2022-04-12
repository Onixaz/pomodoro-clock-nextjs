import React, { FC, MutableRefObject } from 'react'


interface BeepProps {
    audioBeep: MutableRefObject<HTMLAudioElement | null>
}

const Beep: FC<BeepProps> = ({ audioBeep }) => {


    return (

        <audio
            id="beep"
            preload="auto"
            ref={(audio) => {
                audioBeep.current = audio;
            }}
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    )
}

export default Beep
