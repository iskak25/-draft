import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import you3 from "../img/you-3.jpg";
const Styles = styled.div`
  .jumbo {
    backgroud: url(${you3}) no-repeat fixed botton;
    backgroud-size: cover;
    color: #efefef;
    height: 400px;
    position: realative;
    z-index: -2;
  }
`;
const Jumbotron = () => (
  <Styles>
    <Container>
      <div
        className="jumbo"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg")`,
          height: 400,
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <h2>Hello World</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            cumque eos, labore excepturi vel sed ipsam optio nostrum non
            voluptates perferendis doloremque nulla officiis eaque ea quae autem
            delectus minus.
          </p>
        </div>
      </div>
    </Container>
  </Styles>
);
export default Jumbotron;
