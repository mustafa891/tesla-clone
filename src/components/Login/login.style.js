import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
height: 100vh;

.header {
    display: flex;
    align-items:  center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 27px;
    min-height: 40px;

    img {
        width: 120;
        height: 12px;
    }

    .lang {
        padding: 8px;
        display: flex;
        cursor: pointer;
        border-radius: 2px;
        align-items: center;
        transition: background 0.3s ease;

        span {
            margin-left: 4px;
        }

        &:hover {
            background-color: rgba(90, 90, 90, 0.1);
        }
    }
}
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: start;

h1 {
 text-align: start;
 font-weight: 500;
 padding: 20px 0; 
}

form {
    display: flex;
    width: 330px;
    flex-direction: column;

    input {
        outline:none;
        height: 40px;
        margin-top: 5px;
        transition: 0.4s;
        margin-bottom: 30px;
        border-radius: 3px;
        border: 1px solid #f4f4f4;
        background-color: #f4f4f4;
        padding-left: 4px;
        
        &:focus {
         border: 1px solid rgba(0,0,0,0.2);
        }
    }


    label {
        font-weight: 500;
        font-size: 14.5px;
        color: #5c5e62;
    }

    button {
        color: white;
        border: none;
        padding: 12px 0;
        font-size: 13px;
        cursor: pointer;
        border-radius: 3px;
        letter-spacing: 1px;
        background-color: rgb(61, 105, 225);
    }

}

.line{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;

    hr {
        width: 150px;
    }
}

.login {
    padding-top: 1rem;
    button {
        color: white;
        border: none;
        padding: 12px 0;
        font-size: 13px;
        cursor: pointer;
        border-radius: 3px;
        letter-spacing: 1px;
        background-color: rgb(61, 105, 225);
        width: 330px;
    }
}

`