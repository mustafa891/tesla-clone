import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import {Wrapper} from "./model-car.style"
import { Context } from '../../context/context';
import Header from "../Header";
import Section from "../Section/"; 
import Interior_Specs from '../Interior_Specs';
import Gen_Spec from '../Gen_Spec';

export default function ModelCar() {
  document.title = "Model 3 | Tesla";


  const {cars} = useContext(Context);
  const carName = useParams().carName;
  return (
    <Wrapper>
        <Header />
        {
          cars.map((car, i) => {
              if(car.name == carName) {
                return <>
                  <Section  key={i} car={car} />
                  <Interior_Specs key={i} />
                  <Gen_Spec key={i} />
                </>
              }
          })
        }
    </Wrapper>
  )
}
