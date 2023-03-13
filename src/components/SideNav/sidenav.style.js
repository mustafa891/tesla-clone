import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
width: 100%;
height: 100vh;
transition: all 0.2s;

${props => props.SideBarStatus ? 
`
background: rgba(0,0,0,0.2); 
backdrop-filter: blur(4px); 
visibility: visibl;
` :
`
visibility: hidden;
`
}
z-index: 8;
`
export const Modal = styled.div`
position : absolute;
background: white;
right: 0;
top: 0;
bottom: 0;
width: 300px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
padding: 0 2rem;
overflow-y: auto;
z-index: 10;
transition: all 0.2s;
${props => props.SideBarStatus ? `
transform: translateX(0%); 
` : 
`
transform: translateX(100%); 
`
}
`

export const ModalHeader = styled.div`
position: sticky;
top: 0;
right: 0;
left: 0;
width: 100%;
display: flex;
background: white;
justify-content: flex-end;
align-items: center;
z-index: 9;
height: 70px;
`

export const CustomeClose = styled(CloseIcon)`
margin: auto;
`;

export const CloseBtn = styled.div`
display: flex;
justify-content: center;
aling-items: center;
width: 40px; 
height: 42px;
border-radius: 2px;
transition: background-color 0.2s ease-in;
cursor: pointer;

&:hover {
    background-color: rgb(90 90 90 / 8%);
 }
`

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
 
.d-block {
    display: block !important;
}

div {
    padding-bottom: 10vh;
}

`

export const Item = styled(Link)`
margin: 2px 0;
padding: 8px 15px;
border-radius: 3px;
font-weight: 500;
transition: background-color 0.2s;

&:hover {
    background-color:  rgb(90 90 90 / 8%);
}

`