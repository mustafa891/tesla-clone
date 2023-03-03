import React from 'react'
import styled from "styled-components"

export default function Section({title, description, leftBtnText, rightBtnText,backgroundImg,}) {
    return <Wrap bgImage={backgroundImg}>
    <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
    </ItemText>

    <Buttons>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            {rightBtnText && 
            <RightButton>
                {rightBtnText}
             </RightButton>
            }
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg" />
    </Buttons>

  </Wrap>
}


const Wrap = styled.div`
 height: 100vh;
 width: 100vw;
 background-size: cover;
 background-position: center;
 background-repear: no-repeat;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 background-image:  ${props => `url(/images/${props.bgImage})`}
 `

 const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
@media  (max-width: 650px) {
    flex-direction: column;
}
`

const LeftButton = styled.div`
color: white;
opacity: 0.85;
width: 256px;
height: 40px;
border-radius: 4px;
background: rgba(23, 26, 32, 0.8);
margin: 8px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

`

const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`

const DownArrow = styled.img`
margin: 8px; 
height: 40px;
animation : DownArrow  1.5s infinite;
`

const Buttons = styled.div``
