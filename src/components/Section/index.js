import React from 'react'
import { Fade } from 'react-reveal'
import {Wrapper, TopContent, MidContent, Buttons, ButtonGroup, LeftButton, RightButton, InfoWrapper, OrderButton} from "./section.style"

export default function Section({ car : {title, description, LeftButtonText, RightButtonText, backgroundImage, view_backgroundImage,arrow}, show }) {
  
  return (
    <Wrapper bgImage={show ? backgroundImage : view_backgroundImage}>
     <Fade bottom>
        <TopContent>
            <h1>{title}</h1>
            <p>Leasing starting at $349/mo</p>
        </TopContent>
     </Fade>

        <MidContent>

          {/* This part show in model-car Component*/}
          {!show &&
            <Fade delay={300}>
             <InfoWrapper>

                <div className="infoBar">

                  <div className="Specs">
                    <h2>396 mi</h2>
                    <span>Range (EPA est)</span>
                  </div>
                  <div className="Specs">
                    <h2>1.99s</h2>
                    <span>0-60 mph</span>
                  </div>
                  <div className="Specs">
                    <h2>200 mph</h2>
                    <span>Top Speed</span>
                  </div>
                  <div className="Specs power_peak">
                    <h2>1,020 hp</h2>
                    <span>Peak Power</span>
                  </div>
                  <div className="order_button">
                    <OrderButton>Order Now</OrderButton>
                  </div>

                </div>

                <img src='/images/down-arrow.svg' alt="arrow" />
            </InfoWrapper>
          </Fade>
          
          
          }
          
          {/* This part show in home Commponent */}
          {show && 
        <Fade bottom>
          <Buttons>
              <ButtonGroup>
                  <LeftButton>
                    Custome Order
                  </LeftButton>
                  {RightButtonText && 
                  <RightButton>
                      Demo Drive
                  </RightButton>
                  }

              </ButtonGroup>
              { arrow &&
                <img src='/images/down-arrow.svg' alt="arrow" />
              }
          </Buttons>
        </Fade >
        }
        </MidContent>

    </Wrapper>
  )
}
