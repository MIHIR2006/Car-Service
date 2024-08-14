import React from "react";
import Car1 from "../IMG/CAR-1.png";
import BgCar2 from "../IMG/Car-Bg-2.png";
import AboutData from "./AboutData";
import IconData from "./Icon-Data";
import CountBg from "./CountBg";
import BookingData from "./BookingData";
import OurTeam from "./OurTeam";
import OurClients from "./OurClients";
import ServiceData from "./ServiceData";




function Home() {
    return (
        <>
            {/* <!-- Section Start --> */}
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={BgCar2} alt="img" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start pt-5">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown"> Car Servicing </h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated text-size slideInDown">Qualified Car Repair Service Center</h1>
                                            <a href="/" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src={Car1} alt="bg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Section End --> */}

            {/* <!-- Section 2 Start --> */}
            <IconData />
            {/* <!-- Section 2 End --> */}


            {/* <!-- About Start --> */}
            <AboutData />
            {/* <!-- About End --> */}


            {/* <!-- Fact Start --> */}
            <CountBg />
            {/* <!-- Fact End --> */}


            {/* <!-- Service Start --> */}
            <ServiceData />
            {/* <!-- Service End --> */}


            {/* <!-- Booking Start --> */}
            <BookingData />
            {/* <!-- Booking End --> */}


            {/* <!-- Team Start --> */}
            <OurTeam />
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            <OurClients />
            {/* <!-- Testimonial End --> */}

        </>
    )
}
export default Home