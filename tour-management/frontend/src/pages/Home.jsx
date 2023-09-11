import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVdo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import WorldImg from "../assets/images/world.png";
import Experience from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tour/FeaturedTourList";
import MasonryImagesgallery from "../components/image-gallery/MasonryImagesgallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

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
      {/* Hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_-tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Featured section end */}

      {/* experience section start */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our experience <br /> we will serve you{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem optio ea, error quia molestiae neque. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful Trip </h6>
                </div>
                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regular clients </h6>
                </div>
                <div className="counter__box">
                  <span>15+</span>
                  <h6>Years Experience </h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={Experience} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience section end */}

      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesgallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* gallery section end */}

      {/* testimonials section */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our fans saying about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* news letter section */}
      <section>
        <Newsletter />
      </section>
    </>
  );
}

export default Home;
