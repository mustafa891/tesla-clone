import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
position: fixed;
left: 0;
top: 0;
right:0;
display: flex;
justify-content: space-between;
align-items: center;

width: 100%;
min-height: 55px;
z-index: 1;
padding: 15px 35px;

.logo {
    width: 200px;
    cursor: pointer;
    
    img {
        width: 120;
        height: 12px;
    }
}

`

export const Center = styled.div`
flex: 1;
display: flex;
justify-content: center;

@media(max-width: 1098px) {
  display: none;
}

`

export const Left = styled.div`
@media(max-width: 1098px) {
display: none;
}
`
export const Toggle = styled.div`
display: none;

@media(max-width: 1098px) {
    display: block;
}

a {
    background-color: rgba(90, 90, 90, 0.08);
}
`; 

export const LinkTo = styled(Link)`
font-size: 15px;
font-weight: 500;
padding: 7px 15px;
transition: background 0.3s;


&:hover{
 border-radius: 3px;
 background-color: rgba(90, 90, 90, 0.1);
}

`