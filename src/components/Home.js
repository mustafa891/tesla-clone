import React from 'react'
import styled from "styled-components";
import Section from "./Section"

export default function Home() {
 return <Container>
    <Section 
     title="Model 3"
     description="Leasing starting at $349/mo"
     leftBtnText="Custom Order"
     rightBtnText="Demo Drive"
     backgroundImg="model-3.jpg"
    />
      <Section 
     title="Model Y"
     description=""
     leftBtnText="Custom Order"
     rightBtnText="Demo Drive"
     backgroundImg="model-y.jpg"
    />
      <Section 
     title="Model S"
     description="Schedule a Demo Drive"
     leftBtnText="Custom Order"
     rightBtnText="View Inventory"
     backgroundImg="model-s.jpg"
    />
      <Section 
     title="Model X"
     description="Schedule a Demo Drive"
     leftBtnText="Custom Order"
     rightBtnText="View Inventory"
     backgroundImg="model-x.jpg"
    />
       <Section 
     title="Solar Panels"
     description="Lowest Cost Solar Panels in America"
     leftBtnText="Order Now"
     rightBtnText="Learn More"
     backgroundImg="solar-panel.jpg"
    />
       <Section 
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-roof.jpg"
    />
       <Section 
        title="Accessories"
        description=""
        leftBtnText="Shop Now"
        backgroundImg="accessories.jpg"
    />
 </Container>
}

const Container = styled.div`
overflow-x: hidden;
`