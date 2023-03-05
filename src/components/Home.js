import React from 'react'
import styled from "styled-components";
import Section from "./Section"
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

export default function Home() {
 return (
   <Container>
         <Fullpage>
            <FullPageSections>
               <FullpageSection>
                  <Section 
                  title="Model 3"
                  description="Leasing starting at $349/mo"
                  leftBtnText="Custom Order"
                  rightBtnText="Demo Drive"
                  backgroundImg="model-3.jpg"
                  />
               </FullpageSection>

               <FullpageSection>
                  <Section 
                  title="Model Y"
                  description=""
                  leftBtnText="Custom Order"
                  rightBtnText="Demo Drive"
                  backgroundImg="model-y.jpg"
                  />
               </FullpageSection>

               <FullpageSection>
                  <Section 
                  title="Model S"
                  description="Schedule a Demo Drive"
                  leftBtnText="Custom Order"
                  rightBtnText="View Inventory"
                  backgroundImg="model-s.jpg"
                  />
               </FullpageSection>
   
               <FullpageSection>
                  <Section 
                  title="Model X"
                  description="Schedule a Demo Drive"
                  leftBtnText="Custom Order"
                  rightBtnText="View Inventory"
                  backgroundImg="model-x.jpg"
                  />
               </FullpageSection>
               
               <FullpageSection>
                  <Section 
                  title="Solar Panels"
                  description="Lowest Cost Solar Panels in America"
                  leftBtnText="Order Now"
                  rightBtnText="Learn More"
                  backgroundImg="solar-panel.jpg"
                  />
               </FullpageSection>
               
               <FullpageSection>
                  <Section 
                  title="Solar Roof"
                  description="Produce Clean Energy From Your Roof"
                  leftBtnText="Order Now"
                  rightBtnText="Learn More"
                  backgroundImg="solar-roof.jpg"
                  />
               </FullpageSection>
            
               <FullpageSection>
                  <Section 
                  title="Accessories"
                  description=""
                  leftBtnText="Shop Now"
                  backgroundImg="accessories.jpg"
                  />
               </FullpageSection>
               
            </FullPageSections>
         </Fullpage>
   </Container>
 )
}

const Container = styled.div`
position: relative;
`