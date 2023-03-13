import styled from "styled-components";

export const Wrapper = styled.div`

margin-top: ${props => props.bottom ? "-30px" : ""};
width: 100vw;
display: flex;
justify-content: center;

`

export const Content = styled.div`
display: flex;
height: 50px;

justify-content:center;
align-items: center;

a {
    font-size: 14px;
    margin: 0 15px;
}
`