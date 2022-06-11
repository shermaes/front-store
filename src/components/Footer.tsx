import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
          <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        About us
      </h1>
            <ul style={{ color: "green",
                 textAlign: "center",  
                   marginTop: "25px" }}> We've been working with hardware since 1999</ul>
          </Column>
          <Column>
          <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Service
      </h1>
            <ul style={{ color: "green",
                 textAlign: "center",  
                   marginTop: "25px" }}>With us you will find all of the tools needed for your projects</ul>
          </Column>
          <Column>
          <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Contact Us
      </h1>
            <ul style={{ color: "green",
                 textAlign: "center",  
                   marginTop: "25px" }}>Phone: 3194752698</ul>
            <ul style={{ color: "green",
                 textAlign: "center",  
                   marginTop: "25px" }}>Email: raulstore@gmail.com</ul>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;