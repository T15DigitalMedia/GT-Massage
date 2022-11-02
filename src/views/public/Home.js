import React from "react";
import TextRotator from "../../components/textRotator/TextRotator";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Service from "../../components/Service";
import ContactForm from "../../components/contactForm/ContactForm";
import About from "../../components/About";
import Booking from "../../components/Booking";

const Home = () => {
  return (
    <>
      <Header />
      <section className="section header-bg-img h-100vh" id="home">
        <div className="header-table">
          <div className="header-table-center">
            <div className="container position-relative z-index">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="text-center header-content mx-auto">
                    <h1 className="header-name text-white text-capitalize mb-0">
                      Greg Tristani
                    </h1>
                    <h1 className="header-name text-white text-capitalize mb-0">
                      Registered Massage Therapy
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll_down">
          <a href="#about" className="scroll">
            <i className="text-white"></i>
          </a>
        </div>
      </section>

      <About />
      <Service />
      <Booking />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
