import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Default() {
    return(
        <section>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h3 className="text-title text-center text-uppercase">
                            The Requested URL 
                            was not found!
                        </h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Default;