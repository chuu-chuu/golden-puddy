import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Breadcrumb from './Breadcrumb';


class Detail extends React.Component {
    state = {  
        userData: [],
        userAd: [],
      };
    componentDidMount(){ 
        const { match: { params } } = this.props;

        fetch(`https://reqres.in/api/users/${params.id}`)      
        .then(res => res.json())
        .then(json => {
            this.setState({ 
                userData: json.data, 
                userAd: json.ad
            });
        });

    }
    

    render() {
        
        return (
            <>
            <Breadcrumb link='Detail'/>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} xs={10} className="detail text-center p-4" data-aos="zoom-in" data-aos-offset="200"
                        data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
                        data-aos-once="false">
                        <div className="detail__img mb-3">
                            <Image src={this.state.userData.avatar} />
                        </div>
                        <div className="detail__name mb-3">
                            Name - <span>{this.state.userData.first_name}&nbsp; 
                            {this.state.userData.first_name}</span>
                        </div>

                        <div className="detail__email mb-3">
                            Email - <span>{this.state.userData.email}</span>
                        </div>

                        <div className="detail__company mb-3">
                            Company - <span>{this.state.userAd.company}</span>
                        </div>

                        <div className="mb-3">
                            <q>{this.state.userAd.text}</q>
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        )}
        
}

export default Detail;