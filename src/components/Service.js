import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faHeart } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <section className="section bg-grey" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                Services <span class="fw-bold">Offered</span>
              </h2>
            </div>
          </div>
          <div class="row col-mb-50">
            <div className="col-lg-6">
              <div className="text-center services-boxes rounded p-4 mt-4">
                <div className="services-boxes-icon">
                  <FontAwesomeIcon icon={faSpa} size="3x" />
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Registered Massage Therapy</h5>
                  <div className="services-title-border"></div>
                  <p>
                    Deep Tissue, Athletic, Swedish, Myofascial, Trigger Point
                    Release, Fascia Stretch Therapy, Education, Assessments
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center services-boxes rounded p-4 mt-4">
                <div className="services-boxes-icon">
                  <FontAwesomeIcon icon={faHeart} size="3x" />
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Personal Training</h5>
                  <div className="services-title-border"></div>
                  <p>
                    1V1, Return to Fitness, Form Assessment, Stretch &amp;
                    Release tutorials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
