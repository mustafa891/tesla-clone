import React from 'react'
import styled from "styled-components";


export default function Home() {
  return <Wrap>

    <ItemText>
        <h1>Model 3</h1>
        <p>Leasing starting at $349/mo</p>
    </ItemText>

    <Buttons>
        <ButtonGroup>
            <LeftButton>
                Custome Order
            </LeftButton>
            <RightButton>
                Live Demo
            </RightButton>
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
 background-image: url('/images/model-3.jpg');
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 `

 const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
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

const RightButton = styled(LeftButton)``

const DownArrow = styled.img`
margin: 8px; 
height: 40px;
animation : DownArrow  1.5s infinite;
`

const Buttons = styled.div``