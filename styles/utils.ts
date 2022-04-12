import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AdjustersWrapper = styled.div`
display: flex;
flex-direction: row;
`


export const Switch = styled.input`
`

export const SwitchLabel = styled.label`

`

export const SwitchWrapper = styled.div`
margin: 30px ;
border-radius: 30px;
overflow: hidden;
width: 240px;
text-align: center;
font-size: 15px;
font-weight: 500;
letter-spacing: 2px;
color: ${({ theme }) => theme.theWhite};
position: relative;
padding-right: 120px;
position: relative;

&:before {
  content: "Break";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  pointer-events: none;
}

${Switch}{
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + ${SwitchLabel}::before{
      transform: translateX(120px);
      transition: transform 300ms linear;
    }

    & + ${SwitchLabel}{

      position: relative;
      padding: 10px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: "";
        background: ${({ theme }) => theme.theRed};
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }
    } 
}
`

export const SwitchSpan = styled.span`
  position: relative;
`

export const Github = styled.a`
  margin: 2rem;
  color: ${({ theme }) => theme.theWhite};
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.theRed};
  }
`
