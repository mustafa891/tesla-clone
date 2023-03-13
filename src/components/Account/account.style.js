import styled from "styled-components"

export const Wrapper = styled.div`
padding-top: 15vh;
display: flex;
overflow-x: inherit;


`
export const Navbar = styled.div`
padding-left: 50px;
width: 28vw;

@media(max-width: 400px) {
    padding-left: 15px;
}

.row{
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    cursor: pointer;

    .main {
        padding: 5px 7px;
        border-radius: 20px;

        &.active {
            background: rgb(238 238 238);
        }

        .logo {
            width: 26px;
            height: 26px;
        }
    }

    .text {            
            
        @media(max-width: 790px) {
            display: none;
        }

        h2{
            margin-left: 10px;
            font-size: 19px;
        }
    }
}
`

export const Content = styled.div`

padding-left: 2rem;

h1 {
    margin-bottom: 1rem;
}

.container{
    display: flex;
    flex-wrap: wrap;
}

.container {
    display: flex; 
    flex-wrap: wrap;
}

` 



export const Card = styled.div`

background-image: ${props => `url('/images/${props.bg}')`};
border: 1px solid grey;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
align-items: flex-end;
border-radius: 15px;
width:320px;
height: 220px;
display: flex;
margin-right:20px;
margin-top:12px;

.description {
    width: 320px;
    height: 110px;
    padding: 15px;
    background: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    h3{
        font-size: 14px;
    }

    p{
        margin-top: 4px;
        margin-bottom: 15px;
        font-size: 13px;
    }

    span {
        display: inline;
        font-size: 13px;
        border-bottom: solid 1px rgba(0,0,0,0.2);
        
        &:hover {
          border-bottom: solid 1px rgba(0,0,0,0.8);
        }
    }

}

`