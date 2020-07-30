import React from "react";

import { Container, Row, Col, Image } from 'react-bootstrap';

import '../component.scss';
import {Link} from 'react-router-dom';


class List extends React.Component {
  
  state = {  
    users: [],
  };

  componentDidMount() {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      this.setState({ users: json.data});
    });

    
  }
  render() {
    return (
      <section>
        <Container>
          <h3 className="text-center my-5">Best Selling Authors of 2019</h3>
          <Row>
            {this.state.users.map(user => 
              <Col md={4} key={user.id} data-aos="zoom-in" data-aos-offset="200"
              data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
              data-aos-once="false" className="mb-5">
                <div className="author py-5 text-center">
                  <div className="author__img">
                    <Image src={user.avatar} alt="student-image"/>
                  </div>
  
                  <div className="author__name my-3">
                    {user.first_name} {user.last_name}
                  </div>
                  
                  <Link to={{pathname: `/${user.id}`}} className="author__btn">
                    View Detail
                  </Link>
                  
                </div>
              </Col>
            )}
            
          </Row>
        
          
        </Container>
     </section>
    
    );
  }

  
  
}
export default List;