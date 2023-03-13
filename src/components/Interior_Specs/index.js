import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {Wrapper, Title, Content} from "./interior.style";

export default function Interior_Specs() {

    useEffect(() => {
     AOS.init({duration: 1400});
    },[])
    

  return (
  <Wrapper>
    <Title >
        <h2 data-aos="fade-up">All-New Interior</h2>
    </Title>
    <Content>
    </Content>
  </Wrapper>
  )
}
