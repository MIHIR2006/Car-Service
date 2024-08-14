import React from "react";
import ServiceData from "./ServiceData";
import BookingData from "./BookingData";
import OurClients from "./OurClients";


function Service() {
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header Service-header mb-5 p-0" >
                <div class="container-fluid page-header-inner py-5">
                    <div class="container text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center text-uppercase">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item"><a href="/">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

             {/* <!-- Service Start --> */}
             <ServiceData />
            {/* <!-- Service End --> */}

             {/* <!-- Booking Start --> */}
             <BookingData />
            {/* <!-- Booking End --> */}

            {/* <!-- Testimonial Start --> */}
            <OurClients />
            {/* <!-- Testimonial End --> */}
        </>
    )
}
export default Service;