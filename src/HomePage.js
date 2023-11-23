import React from 'react'
import CarouselPage from './CarouselPage'
import CardPage from './CardPage'
import MDBContainer from './login'

function HomePage() {
  return (
    <div style={{alignContent: 'center', marginTop:'0%', fontWeight:'bold'}}> 
    <CarouselPage/>
    <CardPage/>
   <MDBContainer />
    </div>
  )
}

export default HomePage