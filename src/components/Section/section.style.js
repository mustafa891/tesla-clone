import styled from "styled-components"

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-image: ${props => `url(/images/${props.bgImage})`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;

display: flex;
flex-direction: column;
justify-content: space-between;
scroll-snap-align: start;

`
export const TopContent = styled.div`
padding-top: 15vh;
text-align: center;

h1 {
    font-size: 2.6rem;
    font-weight: 500;
    letter-spacing: 2px;
}

p{
    font-size: 1.2rem;
    margin-top: 10px;
}

`
export const MidContent = styled.div``

export const Buttons = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 7vh;

@media(max-width: 500px) {
margin-bottom: 14vh;

}

img{
    animation: DownArrow 2s infinite ;
    height: 26px;
}
`

export const ButtonGroup = styled.div`
display: flex;
justify-content: center;

`
export const LeftButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 10px;
border-radius: 4px;
font-size: 15px;
width: 264px;
height: 40px;
color: white;
cursor: pointer;
background-color: #171A20CC;
`
export const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: #171a20fa;
`

export const InfoWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;

 img{
    margin: 1rem 0;
    animation: DownArrow 2s infinite ;

 }

 .infoBar{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .Specs{
        text-align:center;
        margin: 25px;

        h2{
            font-size: 35px;
            letter-spacing: 1px;
            color: white;
        }
        span{
          font-size: 11px;
          font-weight: 300px;
          color: white;
        }
    }
  }

  .power_peak {
    @media(max-width: 580px) {
        display: none;
    }
  }
}
 `

export const OrderButton = styled(LeftButton)`
 background: transparent;
 border:solid white 3px;
 transition: background 0.3s ease, color 0.3s ease;
 width: 240px;

 
 &:hover {
    color: black;
    background: white;
 }

`;