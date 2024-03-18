import React,{ useRef, useState } from "react";
import "../Style/HomeC.css";
import headerGuitar from "../Img/HeaderGuitar.png";
import Ava from "../Img/shiba.jpg"
import manPhone from "../Img/shadow.png";
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../Style/SwiperC.css"



export const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="Group-title">
          <div className="frame">
            <div className="ovan">
              <p>New</p>
            </div>
            <p>Stay connected to the upcoming & Recent jobs</p>
          </div>
          <div className="Group-title-content">
            <h1>Your Solution Legal Consultancy</h1>
            <p>
              We are here to help you take care of your legality with the best
              service especially for you.
            </p>
          </div>
          <div className="button">
            <button type="button">GET STARTED</button>
          </div>
        </div>
        <div className="hero-pic">
          <img
            className="overlay-image"
            src={headerGuitar}
            alt="headerGuitar"
          />
        </div>
      </div>
      {/* // ---- */}

      <div className="section-why">

        
        <div className="section-why-title">
          <h1> Why do we help with legalization?</h1>
          <p>
            We are here for UMKM in Indonesia to carry out the legalization
            process, which is sometimes complicated.
          </p>
        </div>
        {/* title */}
        <div className="our-feature">
          {/* chỉnh tại style  */}
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        
      </Swiper>
        </div>
      </div>





      {/* --- */}
      <div id="achievement">
        <div className="achievement-background">
          <div className="achievement-heading">
            <div className="achievement-heading-title">
              Some count that matters
            </div>
            <div className="achievement-heading-desc">
              Our achievement in the journey depicted in numbers
            </div>
          </div>
          <div className="achievement-count">
            <div className="achievement-count-1">
              <div className="achievement-count-1-title">30</div>
              <div className="achievement-count-1-desc">Clients</div>
            </div>
            <div className="divider-1"></div>
            <div className="achievement-count-2">
              <div className="achievement-count-2-title">300+</div>
              <div className="achievement-count-2-desc">
                Taken business legalities
              </div>
            </div>
            <div className="divider-2"></div>
            <div className="achievement-count-3">
              <div className="achievement-count-3-title">8</div>
              <div className="achievement-count-3-desc">Years of Journey</div>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}

      <section className="testimonial-section">
        <div className="section1">
          <h2>Clients Testimonial</h2>
          <div className="testimonial">
            <div className="cus_comment">
              <div className="form">
                <div className="content">
                  <h3>Incredible Experience</h3>
                  <p>
                    We had an incredible experience working with Landify and
                    were impressed they made such a big difference in only three
                    weeks. Our team is so grateful for the wonderful
                    improvements they made and their ability to get familiar
                    with the concept so quickly.
                  </p>
                </div>
              </div>
              <div className="user-info">
                <img src={Ava} alt="" />
                <div className="info">
                  <h4>Anya Tailor Joy</h4>
                  <p>CEO, SF Industires</p>
                </div>
              </div>
            </div>
            <div>
              <div className="form">
                <div className="content">
                  <h3>Dependable, Responsive, Professional Partner</h3>
                  <p>
                    Fermin Apps has collaborated with Landify team for several{" "}
                    <br />
                    projects such as Photo Sharing Apps and Custom Social <br />
                    Networking Apps. The experience has been pleasant,
                    <br />
                    professional and exceeding our expectations.
                  </p>
                </div>
              </div>
              <div className="user-info">
                <img src={Ava} alt="" />
                <div className="info">
                  <h4>Sri Alam</h4>
                  <p>CEO, Membagongkan GROUP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>

      <div className="section2">
          <div className="container">
            <div className="content2">
              <h2>Complex Questions?</h2>
              <p>
                Request for a personalized budget for your legal problem. We
                will send you a coupe options in 24 hours. You can have free
                consult , if a our first customer
              </p>
              <button className="button-test">
                <img src="asset/Call.png" alt="" className="call-icon" /> Call
                now
              </button>
            </div>
            <div className="photo">
              <img src={manPhone} alt="" />
            </div>
          </div>
        </div>


    </>

  );
};
