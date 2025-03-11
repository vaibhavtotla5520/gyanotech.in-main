document.write(`        <!-- Footer Start -->
        <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Get In Touch</h5>
                        <p><i class="fa fa-map-marker-alt me-3"></i><a style="color:white;" target="_blank" href="https://maps.app.goo.gl/brJi47GFGdCxdg7p8">Plot 1, Vipin Garden Extension, Uttam Nagar, New Delhi</p>
                        <p><i class="fa fa-phone-alt me-3"></i><a style="color:white;" href="tel:9571188059">+91 95711 88059</a></p>
                        <p><i class="fa fa-envelope me-3"></i><a style="color:white;" href="mailto:info@gyanotech.in">info@gyanotech.in</a></p>
                        <div class="d-flex pt-2">
                            <!--<a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>-->
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <!--<a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>-->
                            <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/gyanotech.in" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/gyanotech-it-solution/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Popular Link</h5>
                        <a class="btn btn-link" href="about.html">About Us</a>
                        <a class="btn btn-link" href="contact.html">Contact Us</a>
                        <!--<a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                        <a class="btn btn-link" href="">Career</a>-->
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Project Gallery</h5>
                        <div class="row g-2">
                            <div class="col-4">
                                <img class="img-fluid" src="img/erp.jpg" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/monitoring.jpg" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/crm.jpg" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/automation.jpg" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/server.jpg" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/ticket.jpg" alt="Image">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Newsletter</h5>
                        <p>Stay updated with the latest tech trends and offers!</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" id="newsletter_email" placeholder="Your Email" style="height: 48px;">
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2" id="newsletter_btn"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-lg-5">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">gyanotech.in</a>, All Right Reserved.

							<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/
							Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>-->
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <!-- <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->


        <!-- Back to Top -->
        <a href="https://wa.me/919571188059" class="whatsapp-btn" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2 "><i class="fa fa-chevron-up"></i></a>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QMEK8DXXYQ"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-QMEK8DXXYQ');
    </script>
</body>

</html>`);

let fileName = window.location.pathname.split("/").pop().split(".")[0];
