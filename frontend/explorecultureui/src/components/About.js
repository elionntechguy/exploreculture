import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
       <div>
           <Container fluid className="teksti">
               <Row className="text-center">
               <Col xs ="12" lg="5">
               <img src="https://images.pexels.com/photos/802412/pexels-photo-802412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  style={{width:"60%", margin:"20px", borderRadius:"5px"}} alt="Looking"/>
               </Col>
               <Col xs lg="1"></Col>
               <Col xs ="10" lg="5">
                   <p className="text-justify" style={{marginTop: "50px"}}>
                   exploreCulture <br/>
                   <br/>
                    exploreCulture is a website dedicated to Albanian culture through the most innovative and up-to-date methods of the 21st century. Our website uses virtually reality, augmented reality and 8d audio technologies to make learning Albanian culture more attractive. We have a simple design where web navigation is as easy as possible.
                   </p>
               </Col>
               <Col xs lg="1"></Col>
               </Row>

               <Row className="text-center" style={{backgroundColor:"#B4CED9"}}>
               <Col xs lg="1"  className="A"></Col>
               <Col xs ="10" lg="5" className="A">
                    <p className="text-justify" style={{marginTop: "60px"}}>
                    Virtually reality<br/>
                   <br/>
                    Through virtually reality technology we make possible for our user to visit different places that belong to the Albanian culture and still feel comfortable in his or her house.
                   </p>
               </Col>
               <Col xs lg="1"  className="A"></Col>
               <Col xs ="12" lg="5" className="B">
               <img src="https://images.pexels.com/photos/3175983/pexels-photo-3175983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{width:"60%", margin:"20px", borderRadius:"5px"}} alt="virtually reality"/>
               </Col>
               </Row>

               <Row className="text-center" >
               <Col xs ="12" lg="5">
               <img src="https://images.pexels.com/photos/326461/pexels-photo-326461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{width:"60%", margin:"20px", borderRadius:"5px"}} alt="augmented reality"/>
               </Col>
               <Col xs lg="1"></Col>
               <Col xs ="10" lg="5">
                   <p className="text-justify"  style={{marginTop: "60px"}}>
                   Augmented reality<br/>
                   <br/>
                    Through augmented reality technology we make possible that virtual object to intereact with the world around us.
                   </p>
               </Col>
               <Col xs lg="1">
               </Col>
               </Row>

               <Row className="text-center" style={{backgroundColor:"#B4CED9"}}>
               <Col xs lg="1"  className="A"></Col>
               <Col xs ="10" lg="5" className="A">
                   <p className="text-justify"  style={{marginTop: "60px"}}>
                   8d Audio<br/>
                   <br/>
                    Through 8d audio technology we make possible for the user to feel the Albanian culture through the sounds and music and with 8d audio we get in the albanian melody.
                   </p>
               </Col>
               <Col xs lg="1"  className="A"></Col>
               <Col xs ="12" lg="5" className="B">
               <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width:"60%", margin:"20px", borderRadius:"5px"}} alt="8d Audio"/>
               </Col>
               </Row>



           </Container>
       </div>
    )
}

export default About
