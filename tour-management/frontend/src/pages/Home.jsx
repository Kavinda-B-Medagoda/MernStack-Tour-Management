import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVdo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import WorldImg from "../assets/images/world.png";

import SearchBar from "../shared/SearchBar";

function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before You Go..."} />
                  <img src={WorldImg} alt="" />
                </div>
                <h1>
                  Traveling open the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  perferendis at corporis natus dolorum, minima vitae corrupti
                  eveniet laborum sed, iure ullam distinctio? A, ipsum. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Labore
                  architecto nihil eveniet.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__image-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__image-box mt-4">
                <video src={heroVdo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__image-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
