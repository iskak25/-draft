import React from "react";
import { Carousel, Container } from "react-bootstrap";
import you from "../img/you-1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item style={{ height: "600px" }}>
            <img className="d-block w-100vw" src={you} alt="you-1" />
            <Carousel.Caption>
              <h3>Wed Developer Blog</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                aut eaque, repellat nisi, labore molestias eveniet quidem qui at
                corporis odit, enim ipsa nam vel ratione deserunt hic animi
                accusantium?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "600px" }}>
            <img className="d-block w-100vw" src={you} alt="you-1" />

            <Carousel.Caption>
              <h3>Wed Developer Blog</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                aut eaque, repellat nisi, labore molestias eveniet quidem qui at
                corporis odit, enim ipsa nam vel ratione deserunt hic animi
                accusantium?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "600px" }}>
            <img className="d-block w-100vw" src={you} alt="you-1" />

            <Carousel.Caption>
              <h3>Wed Developer Blog</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                aut eaque, repellat nisi, labore molestias eveniet quidem qui at
                corporis odit, enim ipsa nam vel ratione deserunt hic animi
                accusantium?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Slider;
