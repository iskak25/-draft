import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider";
import you2 from "../img/you-2.jpg";
import you3 from "../img/you-3.jpg";
import Jumbotron from "./Jumbotron";

const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBotto: "2rem" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={you2} />
              <Card.Body>
                <Card.Title>WelDev Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  molestiae repellat assumenda. Aperiam, excepturi blanditiis.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={you2} />
              <Card.Body>
                <Card.Title>WelDev Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  molestiae repellat assumenda. Aperiam, excepturi blanditiis.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={you2} />
              <Card.Body>
                <Card.Title>WelDev Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  molestiae repellat assumenda. Aperiam, excepturi blanditiis.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
      <Container className="d-flex flex-wrap" style={{ marginBotton: "40px" }}>
        <Row>
          <Col md={7}>
            <img src={you3} height={400} />
          </Col>
          <Col md={5}>
            <h2>Hello Iskak</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              alias tempore similique dicta cum dolorem, suscipit placeat
              tenetur velit repudiandae ex vel deserunt modi ad provident labore
              fugiat exercitationem debitis reiciendis cumque impedit!
              Perspiciatis autem mollitia inventore voluptate vel necessitatibus
              ullam accusantium laborum iure optio odio soluta exercitationem
              illo facilis alias ducimus, maxime nobis tenetur sunt veniam saepe
              in sapiente adipisci! Aliquid rerum corrupti accusamus,
              voluptatibus aliquam tempora modi maiores quaerat tempore, optio
              aperiam. Dolorum voluptatibus soluta quam aspernatur quod rerum
              delectus amet ipsa ex inventore fugiat nam alias error adipisci
              commodi facilis praesentium aliquid, sunt veniam consequuntur modi
              unde.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
