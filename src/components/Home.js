import React from 'react'
import styled from "styled-components";
import Section from "../components/Section/"
import Header from "../components/Header/"
import { useContext } from 'react';
import { Context } from '../context/context';
import Footer from './Footer';

export default function Home() {

   const {cars} = useContext(Context);

 return (
   <>
   <Header />
   <Container>
   {cars && 
      cars.map((car,i) => {
         return <Section key={i} car={car} show={true}/>
      })
   }
      <Footer bottom={true} />
   </Container>
   </>
 )
}

const Container = styled.div`
position: relative;
width: 100%;
height: 100vh;
scroll-behavior: smooth;
overflow-y: auto;
overflow-x: hidden;
scroll-snap-type: y mandatory;
`