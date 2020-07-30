import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Breadcrumb = props => {
    return(
        <div>
           <Container>
               <Row className="justify-content-center my-5">
                   <Col md={6} xs={10} className="breadcrumb">
                       <div className="mx-auto">
                        <h5>
                           <Link to="/">Home</Link> | {props.link}
                        </h5>
                       </div>
                       
                   </Col>
               </Row>
           </Container> 
        </div>
    )
}

export default Breadcrumb;