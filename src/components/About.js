import React from "react";
import HeadShot from "../assets/images/headshot.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mt-3">
              <img
                src="https://via.placeholder.com/398"
                alt=""
                className="img-fluid mx-auto d-block img-thumbnail"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-3">
              <h2>
                <span className="font-weight-bold">About</span> Me
              </h2>
              <h4 className="mt-4">
                Hello!{" "}
                <span className="text-custom font-weight-bold">
                  I'm Gregory Tristani.
                </span>
              </h4>
              <p className="text-muted mt-4">
                I am a Registered Massage Therapist, Certified Personal Trainer
                &amp; Human Movement Specialist eager to work with clients
                seeking relaxation, rehabilitation &amp; other benefits from
                Massage Therapy.
              </p>
              <p className="text-muted mt-2">
                My personal philosophy when it comes to Massage Therapy is to
                revitalize your life. We begin through initial assessment to
                determine limitations to gain a clarity of the issue. Through
                manual therapy, we aim to address the source causing the
                symptoms affecting your day to day so you may go from
                rehabilitating to preventative mobility.
              </p>
              <p className="text-muted mt-2">
                I look forward to treating, please see below for additional
                information and do not hesitate to get in touch!
              </p>
              <div>
                <ul className="mb-0 about-social list-inline mt-4">
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/gregory.tristani.rmt"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="mailto:gregorytristanirmt@outlook.com ">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
