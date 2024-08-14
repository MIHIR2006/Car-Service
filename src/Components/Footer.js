import React from 'react';


function Footer() {
    return (
        <>
            <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Address</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Opening Hours</h4>
                            <h6 class="text-light">Monday - Friday:</h6>
                            <p class="mb-4">09.00 AM - 09.00 PM</p>
                            <h6 class="text-light">Saturday - Sunday:</h6>
                            <p class="mb-0">09.00 AM - 12.00 PM</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Services</h4>
                            <a class="btn btn-link" href="/">Diagnostic Test</a>
                            <a class="btn btn-link" href="/">Engine Servicing</a>
                            <a class="btn btn-link" href="/">Tires Replacement</a>
                            <a class="btn btn-link" href="/">Oil Changing</a>
                            <a class="btn btn-link" href="/">Vacuam Cleaning</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" style={{ maxWidth: "400px;" }}>
                                <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" class="col-12 mt-2 btn btn-primary position-absolute ">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="/">Car Serv</a> , All Right Reserved.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="/">Home</a>
                                    <a href="/">Cookies</a>
                                    <a href="/">Help</a>
                                    <a href="/">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Footer;