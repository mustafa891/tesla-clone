import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Container, Content} from "./signup.style"
import LanguageIcon from '@mui/icons-material/Language';
import {app, auth} from "../../firebase"
import { createUserWithEmailAndPassword, signInWithCredential, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Context } from '../../context/context';
import Footer from "../Footer/";

export default function Signup() {

    document.title = "Telsa | Signup"
    
    const navigate = useNavigate()
    const {user,setUser} = useContext(Context);
    
    // Check if user already logged in    

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    useEffect(() => {
        auth.onAuthStateChanged((userAuth) =>{
            if(userAuth) navigate("/account")
        })
    }, [user])

    const onSubmit = async (e) => {
        e.preventDefault(); 

        await createUserWithEmailAndPassword(auth, email,password).then(userCredential => {
            const user = userCredential.user;
            updateProfile(userCredential.user, {
                displayName: fname,
            }).then(() => {
                signInWithCredential(auth, userCredential);
                navigate("/account")
                setUser(user);
            });
        }).catch(err => alert(err))

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
           <h1>Create Account</h1>
           <form onSubmit={onSubmit}>
            <label htmlFor='fname'>First Name</label>
            <input type="text" id='fname' onChange={(e) => setFname(e.target.value)} />
            
            
            <label htmlFor='lname'>Last Name</label>
            <input type="text" id='lname' onChange={(e) => setLname(e.target.value)} />
            
            
            <label htmlFor='email'>Email Address</label>
            <input type="text" id='email' onChange={(e) => setEmail(e.target.value)} />

            
            <label htmlFor='pwd'>Password</label>
            <input type="password" id='pwd' onChange={(e) => setPassword(e.target.value)}/>
            
            <button>Create Account</button>

           </form>

          <div className='line'>
              <hr />
              <span>OR</span>
              <hr />
          </div>
          <div className='login'>
            <Link to="/login">
                <button>Login</button>
            </Link>
          </div>

        </Content>

    </Container>
    </>
 )
}
