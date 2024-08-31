/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {  
  Container,
  Row,
  Col,
} from "reactstrap";

function Principal() {
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
          <h1 className= "text-center">
                <span className="note"></span>
                Los más pedidos
              </h1>
          </div>
          <div id="buttons">                                                                   
            <Row>
            <Col md="4" sm="7">
                <h4 className="images-title"></h4>
                    <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/postresImg.png")}
                    />
                <div className="img-details">                  
                  <h5 className= "text-center">Torta Selva Negra</h5>                                 
                </div>
            </Col>
            <Col md="4" sm="7">
                <h4 className="images-title"></h4>
                    <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/postresImg2.png")}
                    />
                <div className="img-details">                  
                  <h5 className= "text-center">Pie de Limón</h5>                                 
                </div>
            </Col>
            <Col md="4" sm="7">
                <h4 className="images-title"></h4>
                    <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/postresImg3.png")}
                    />
                <div className="img-details">                  
                  <h5 className= "text-center">Cheesecake</h5>                                 
                </div>
            </Col>            
            </Row>           
          </div>
          <br />
          <div className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bocaditos.png") + ")",
        }}>

            </div>             
          <br />        
        </Container>
      </div>
    </>
  );
}

export default Principal;
