import React from "react";
import C1 from "../IMG/Client-1.jpg";
import C2 from "../IMG/Client-2.jpg";
import C3 from "../IMG/Client-3.jpg";
import C4 from "../IMG/Client-4.jpg";

function OurClients() {
    return (
        <>
            <div className="container-xxl py-5 ">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-primary text-uppercase">Testimonial</h6>
                        <h1 className="mb-5">Our Clients Say!</h1>
                    </div>
                    <div className="row" >
                        <div className="col-lg-3 col-12 ">
                            <div className="card ">
                                <img src={C1} alt="img" />
                                <div className="card-body text-center">
                                    <h5 className="mb-0 p-0">Client Name</h5>
                                    <p className="mt-2">Profession</p><hr />
                                    <div className="p-0 m-0 text-left w-100">
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="card ">
                                <img src={C2} alt="img" />
                                <div className="card-body text-center">
                                    <h5 className="mb-0 p-0">Client Name</h5>
                                    <p className="mt-2">Profession</p><hr />
                                    <div className="p-0 m-0 text-left w-100">
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="card ">
                                <img src={C3} alt="img" />
                                <div className="card-body text-center">
                                    <h5 className="mb-0 p-0">Client Name</h5>
                                    <p className="mt-2">Profession</p><hr />
                                    <div className="p-0 m-0 text-left w-100">
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="card ">
                                <img src={C4} alt="img" />
                                <div className="card-body text-center">
                                    <h5 className="mb-0 p-0">Client Name</h5>
                                    <p className="mt-2">Profession</p><hr />
                                    <div className="p-0 m-0 text-left w-100">
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurClients;