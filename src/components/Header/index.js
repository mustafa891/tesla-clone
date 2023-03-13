import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom"
import {Wrapper, Center, Left, LinkTo, Toggle} from "./header.style"
import { Context } from '../../context/context';

import SideNav from "../SideNav/"

export default function Header() {


  const {sideNav} = useContext(Context)

  return (
    <Wrapper>
        <div className="logo">
            <Link to="/">
              <img src='/images/logo.svg' />
            </Link>
        </div>

      <Center>
        <LinkTo to="/model3" title="Model 3">Model 3</LinkTo>
        <LinkTo to="/models" title="Model S">Model S</LinkTo>
        <LinkTo to="/modely" title="Model Y">Model Y</LinkTo>
        <LinkTo to="/modelx" title="Model X">Model X</LinkTo>
        <LinkTo to="#" title="Solar Roof">Solar Roof</LinkTo>
        <LinkTo to="#" title="Solar Panels">Solar Panels</LinkTo>
      </Center>

      <Left>
        <LinkTo title="Shop">Shop</LinkTo>
        <LinkTo to="/account" title="Account">Account</LinkTo>
        <LinkTo  title="Menu" onClick={() => sideNav.setSideNavStatus(true)}>Menu</LinkTo>
      </Left>

      <Toggle>
        <LinkTo  title="Menu" onClick={() => sideNav.setSideNavStatus(true)}>Menu</LinkTo>
      </Toggle>


      <SideNav sideNavStatus={sideNav.sideNavStatus} setSideNavStatus={sideNav.setSideNavStatus} />      

    </Wrapper>

 )
}
