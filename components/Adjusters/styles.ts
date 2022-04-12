import styled from 'styled-components'

export const Button = styled.button`
outline: none;
border: none;
font-size: 18px;
padding: 10px;
cursor: pointer;
background: transparent;
font-size: 25px;
color: ${({ theme }) => theme.theWhite};

&:disabled{
  cursor: default;
}

svg{
    color: ${({ theme }) => theme.theWhite};
    font-size: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.theRed};
    } 
  }
`

export const Value = styled.h2`
color: ${({ theme }) => theme.theWhite};
font-weight: 400;
`


export const Label = styled.h3`
letter-spacing: 1px;
font-weight: 400;
color: ${({ theme }) => theme.theWhite};
margin: 1rem;
`

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const Wrapper = styled.div`
margin: auto 1rem;
display: flex;
justify-content: center;
width: 150px;
flex-direction: row;
border: 3px solid ${({ theme }) => theme.theRed};
padding: 20px;
border-radius: 20%;

`