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
                    <h4 className="text-white first-title mb-4">Welcome</h4>
                    <h1 className="header-name text-white text-capitalize mb-0">
                      I'm{" "}
                      <span className="simple-text-rotate font-weight-bold">
                        <TextRotator
                          items={[
                            "Greg Tristani",
                            "A Registered Massage Therapist",
                          ]}
                        />
                      </span>
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
