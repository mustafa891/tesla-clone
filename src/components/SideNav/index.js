import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/context'
import {Wrapper,  Modal, ModalContent, ModalHeader, CustomeClose, CloseBtn, Item} from "./sidenav.style"

export default function SideNav({sideNavStatus, setSideNavStatus}) {

  const {sideNav} = useContext(Context);

  return (
    <Wrapper SideBarStatus={sideNavStatus}>
        
      <Modal SideBarStatus={sideNavStatus}>

        <ModalHeader>
            <CloseBtn onClick={() => setSideNavStatus(false)}>
              <CustomeClose />
            </CloseBtn>
        </ModalHeader>

      <ModalContent>


            <Item to="/model3" onClick={() => sideNav.setSideNavStatus(false)}>Model 3</Item>
            <Item to="/models" onClick={() => sideNav.setSideNavStatus(false)}>Model S</Item>
            <Item to="/modely" onClick={() => sideNav.setSideNavStatus(false)}>Model Y</Item>
            <Item to="/modelx" onClick={() => sideNav.setSideNavStatus(false)}>Model X</Item>            
            <Item>Existing Inventory</Item>
            <Item>Used Inventory</Item>
            <Item>Trade-In</Item>
            <Item>Demo Drive</Item>
            <Item>Insurance</Item>
            <Item>Cybertruck</Item>
            <Item>Roadster</Item>
            <Item>Semi</Item>
            <Item>Charging</Item>
            <Item>Powerwall</Item>
            <Item>Commerical Energy</Item>
            <Item>Utilities</Item>
            <Item>Find Us</Item>
            <Item>Support</Item>
            <Item>Investor Relations</Item>
            <Item to="/account" onClick={() => sideNav.setSideNavStatus(false)}>Account</Item>   
            <div></div>         
        </ModalContent>

      </Modal>

    </Wrapper>
  )
}
