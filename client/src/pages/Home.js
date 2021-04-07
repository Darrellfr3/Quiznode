import React from 'react';
import Footer from "../components/footer"
import {Row, Col, Button} from "react-bootstrap";
import Navbar from '../components/navbar';
import { BrowserRouter as Router} from 'react-router-dom';





function Home() {
    return (
        <Router>
        <div className="userHome">

            <Navbar/>
            <h2>User Page</h2>
                    
            <Row>
            <Col>
            <div id="nodecircle1">
          <h3> Build a Quiz</h3>
          <Button>Build Me</Button>
          </div>
          </Col>

            <Col>
            <div id="nodecircle1">
          <h3> Take a Quiz</h3>
          <Button>Take Me</Button>
          </div>
            </Col>

            <Col>
            <div id="nodecircle1">
          <h3> PreGenerated Quiz </h3>
          <Button>Generate Me</Button>
          </div>
          </Col>
      

          </Row>
   
          <Footer/>
        </div>
        </Router>
        
    )
}

export default Home
