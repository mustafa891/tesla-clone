import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/context';
import {auth} from "../../firebase";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../Header/";
import Footer from "../Footer/"
import {Wrapper, Navbar, Content, Card} from "./account.style"
// Icons
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaymentIcon from '@mui/icons-material/Payment';
import BoltIcon from '@mui/icons-material/Bolt';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryIcon from '@mui/icons-material/History';

export default function Account() {

  document.title = "Telsa | Dashboard"

  const navigate = useNavigate();
  const {user, setUser} = useContext(Context);
  const Cards = ["cars.jpeg", "solar_1.webp", "3rd-party.png"];

  useEffect(  () => {
    auth.onAuthStateChanged(userAuth => {
      if(!userAuth) {
        navigate("/login")
        setUser(null);
      };
    })
  }, [user]);

  const SignOut = () => {
    auth.signOut().then(() => {
      navigate('/login');      
      setUser(null);
    })
  }


  return (
    <>
      <Header />
      <Wrapper>
        <Navbar>

         <div className="row">
            <div className='main active'>
              <HomeIcon className="logo" />
            </div>
            <div className='text'>
                <h2>Dashboard</h2>
            </div>
         </div>


         <div className="row">
            <div className='main '>
              <PermIdentityIcon className="logo" />
            </div>
            <div className='text'>
                <h2>Profile Settings</h2>
            </div>
         </div>

         
         <div className="row">
            <div className='main '>
              <PaymentIcon className="logo" />
            </div>
            <div className='text'>
                <h2>Payment Method</h2>
            </div>
         </div>

         
         <div className="row">
            <div className='main'>
              <BoltIcon className="logo" />
            </div>
            <div className='text'>
                <h2>Charging</h2>
            </div>
         </div>

         <div className="row">
            <div className='main'>
              <AllInboxIcon className="logo" />
            </div>
            <div className='text'>
                <h2>Loot Box</h2>
            </div>
         </div>

         <div className="row">
            <div className='main'>
              <HistoryIcon className="logo" />
            </div>
            <div className='text'>
                <h2>Order History</h2>
            </div>
         </div>


         <div className="row" onClick={SignOut}>
            <div className='main'>
              <ExitToAppIcon className="logo" />
            </div>
            <div className='text'>
                <h2>Sign Out</h2>
            </div>
         </div>
        </Navbar>
        <Content>
          <h1>{user?.displayName}`s Dashboard</h1>
          <div className='container'>
       
            {Cards && Cards.map((card, i) => {
              return (
               <Card bg={card} key={i}>
                  <div className='description'>
                    <h3>Reserver a Car</h3>
                    <p>Produce energy to power your Tesla life</p>
                    <Link to="/"><span>Shop Now</span></Link>
                  </div>
                </Card>
              )})}


          </div>
        </Content>
      </Wrapper>
      <Footer />
    </>
  )
}
