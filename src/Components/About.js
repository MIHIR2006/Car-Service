import React from "react";
import IconData from "./Icon-Data";
import AboutData from "./AboutData";
import CountBg from "./CountBg";
import OurTeam from "./OurTeam";

function About() {
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header About-header mb-5 p-0">
                <div class="container-fluid page-header-inner py-5">
                    <div class="container text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center text-uppercase">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item"><a href="/">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Section 2 Start --> */}
            <IconData />
            {/* <!-- Section 2 End --> */}

            {/* <!-- About Start --> */}
            <AboutData />
            {/* <!-- About End --> */}

            {/* <!-- Fact Start --> */}
            <CountBg />
            {/* <!-- Fact End --> */}

            {/* <!-- Team Start --> */}
            <OurTeam />
            {/* <!-- Team End --> */}


        </>
    )
}
export default About;