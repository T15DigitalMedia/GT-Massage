import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Booking = () => {
  return (
    <section className="section bg-light" id="booking">
      <div className="container">
        <div className="row align-items-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                Locations <span class="fw-bold">&amp; How To Book</span>
              </h2>
            </div>
          </div>
          <div class="row col-mb-50">
            <div className="col-lg-4">
              <div className="text-center services-boxes rounded p-4 mt-4">
                <div className="services-boxes-icon">
                  {/* <FontAwesomeIcon icon={faSpa} size="3x" /> */}
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">GT RMT (Mobile)</h5>
                  <p class="text-muted mx-auto section-subtitle mt-3">
                    is based out of Burlington, Ontario, Canada and can travel
                    up to 30km for an appointment
                  </p>
                  <div className="services-title-border"></div>
                  <h5>How to Book?</h5>
                  <p>
                    Fill out the{" "}
                    <AnchorLink href="#contact">contact</AnchorLink> section
                    below or see the{" "}
                    <AnchorLink href="#contact">contact me</AnchorLink> section
                  </p>
                  <h5>Availablity &amp; Schedule</h5>
                  <p>Friday, Saturday &amp; Sunday</p>
                  <p class="text-muted mx-auto section-subtitle mt-3">
                    (*Weekdays availability must be outside of conflicting
                    schedule*)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center services-boxes rounded p-4 mt-4">
                <div className="services-boxes-icon">
                  {/* <FontAwesomeIcon icon={faSpa} size="3x" /> */}
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Massage Addict</h5>
                  <p class="text-muted mx-auto section-subtitle mt-3">
                    1900 Appleby Line, Burlington, ON
                  </p>
                  <div className="services-title-border"></div>
                  <h5>How to Book?</h5>
                  <p>
                    Visit their{" "}
                    <a href="https://www.massageaddict.ca/burlington/book-an-appointment">
                      website
                    </a>
                    <br />
                    or call <a href="tel:2892451555">(289)-245-1555</a>
                  </p>
                  <h5>Availablity &amp; Schedule</h5>
                  <p>
                    Monday - Wednesday 1pm till 730pm <br /> Thursday 1130am
                    till 6pm <br />
                     See 
                    <a href="https://www.massageaddict.ca/burlington/book-an-appointment">
                      website
                    </a>
                     for current availability
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center services-boxes rounded p-4 mt-4">
                <div className="services-boxes-icon">
                  {/* <FontAwesomeIcon icon={faSpa} size="3x" /> */}
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">Elite Performance Center</h5>
                  <p class="text-muted mx-auto section-subtitle mt-3">
                    3466 Mainway, Burlington, ON
                  </p>
                  <div className="services-title-border"></div>
                  <h5>How to Book?</h5>
                  <p>
                    Visit their{" "}
                    <a href="https://www.eliteperformancecenter.ca/">website</a>
                    <br />
                    call <a href="tel:9053353722">(905)-335-3722</a>
                    <br />
                    or email{" "}
                    <a href="mailto:info@eliteperformancecenter.ca">
                      info@eliteperformancecenter.ca
                    </a>
                  </p>
                  <div className="services-title-border"></div>
                  <h5>Availablity &amp; Schedule</h5>
                  <p>
                    Monday - Wednesday 11am &amp; 8pm <br />
                    Thursday 945am &amp; 630pm <br /> Friday 930am &amp; 230pm
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

export default Booking;
