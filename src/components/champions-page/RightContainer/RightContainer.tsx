import React, { Component } from 'react'
import Champie from "../../../assets/Champie.png";
import { Container, Row, Col } from "react-bootstrap";


export class RightContainer extends Component {
    render() {
        return (
            <div>
                <Container>
                  <div className="cp-mainBox">
                    <div className="cp-logo-image">
                      <img src={Champie} alt="imagem" />
                    </div>
                    <div className="cp-champList">
                      <h4>Name: </h4>
                    </div>
                  </div>
                  <div className="cp-direction">
                    
                    <Row>
                      <Col sm={12} lg={4}>
                        <div className="cp-secondBox">
                          <img src={Champie} alt="imagem" className="cp-imag" />
                          <h5>
                            Best player w/ that champion <br /> &#128142; C1 lv.
                            452
                          </h5>
                        </div>
                      </Col>

                      <Col sm={12} lg={4}>
                        <div className="cp-thirdBox">
                          <img src={Champie} alt="imagem" className="cp-imag" />
                          <h5>
                            Best player w/ that champion <br /> &#128142; C1 lv.
                            452
                          </h5>
                        </div>
                      </Col>
                      <Col sm={12} lg={4}>
                        <div className="cp-fourthBox">
                          <img src={Champie} alt="imagem" className="cp-imag" />
                          <h5>
                            Best player w/ that champion <br /> &#128142; C1 lv.
                            452
                          </h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
            </div>
        )
    }
}

export default RightContainer
