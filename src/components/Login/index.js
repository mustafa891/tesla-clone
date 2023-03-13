import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Container, Content} from "./login.style"
import LanguageIcon from '@mui/icons-material/Language';
import {app, auth} from "../../firebase"
import {  signInWithCredential, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Context } from '../../context/context';
import Footer from "../Footer/"

export default function Login() {

    document.title = "Telsa | Login"

    const navigate = useNavigate()
    const {user,setUser} = useContext(Context);
    
    // Check if user already logged in    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) =>{
            if(userAuth) navigate("/account")
        })
    }, [user])

    const onSubmit = async (e) => {
        e.preventDefault()        
        await signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            setUser(user);
        }).catch(err => alert(err));
    }

  return (
<>
  <Container>

    <div className='header'>
        <div>
            <Link to="/">
                <img src='/images/logo.svg' />
            </Link>
        </div>

        <div className='lang'>
            <LanguageIcon /> <span>en-US</span>
        </div>
    </div>

    <Content>
       <h1>Login Account</h1>
       <form onSubmit={onSubmit}>

        <label htmlFor='email'>Email Address</label>
        <input type="text" id='email' onChange={(e) => setEmail(e.target.value)} />

        
        <label htmlFor='pwd'>Password</label>
        <input type="password" id='pwd' onChange={(e) => setPassword(e.target.value)}/>
        
        <button>Login</button>

       </form>

        <div className='line'>
            <hr />
            <span>OR</span>
            <hr />
        </div>

        <div className='login'>
            <Link to="/signup">
            <button>Create Account</button>
            </Link>
        </div>

    </Content>

 </Container>
 <Footer />
</>

 )
}
