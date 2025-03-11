(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

})(jQuery);

window.addEventListener('scroll', function() {
    if (window.innerWidth > 1000) {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.navbar-brand img');

    if (window.scrollY > 100) { // Adjust scroll threshold as needed
        navbar.classList.add('sticky-top');
        logo.src = 'img/logo-sticky-top.png'; // Change to the new logo
    } else {
        navbar.classList.remove('sticky-top');
        logo.src = 'img/logo.png'; // Revert to the default logo
    }
}
});

// window.onload = function updateLogoOnResize() {
//     const logo = document.querySelector('.navbar-brand img');

//     if (window.innerWidth <= 768) {
//         logo.src = 'img/logo-sticky-top.png'; // Mobile screen logo
//     } else {
//         logo.src = 'img/logo.png'; // Default logo
//     }
// }

function showContent(contentId) {
    // Hide all content divs
    var contents = document.getElementsByClassName('content-display');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
        contents[i].classList.remove('active');
    }
    // Show the selected content
    var activeContent = document.getElementById(contentId);
    activeContent.style.display = 'block';
    activeContent.classList.add('active');

    // Scroll to the content on devices narrower than 768px
    if (window.innerWidth < 768) {
        // Scroll only if the function is triggered by a user action
        if (window.event && window.event.type === 'click') {
            activeContent.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const sliderContent = document.querySelector('.slider-content');
    const sliderItems = Array.from(sliderContent.children);
    const sliderWidth = sliderContent.scrollWidth;
    let animationId;

    // Clone the slider items to create an infinite loop effect
    sliderItems.forEach(item => {
        const clone = item.cloneNode(true);
        sliderContent.appendChild(clone);
    });

    // Function to animate the slider
    function animateSlider() {
        sliderContent.style.transform = `translateX(-${sliderContent.scrollLeft}px)`;
        sliderContent.scrollLeft += 2;

        // Reset scroll position to create the loop effect
        if (sliderContent.scrollLeft >= sliderWidth) {
            sliderContent.scrollLeft = 0;
        }

        animationId = requestAnimationFrame(animateSlider);
    }

    // Start the animation
    animateSlider();

    // Pause animation on hover
    sliderContent.addEventListener('mouseover', () => cancelAnimationFrame(animationId));
    sliderContent.addEventListener('mouseout', () => animateSlider());
});

const faqs = [
  { id: 1, question: "Are your services customizable?", answer: "Yes, we provide fully customizable solutions tailored to your business needs. Whether it’s a website, software, or automation tool, we ensure it aligns with your goals and requirements." },
  { id: 2, question: "Do you offer ongoing support and maintenance?", answer: "Absolutely! We provide 24/7 support and maintenance services to ensure your systems run smoothly. Our team is always available to address any issues or updates." },
  { id: 3, question: "How long does it take to develop a website?", answer: "The timeline depends on the complexity of the project. A basic website can take 2-4 weeks, while a custom e-commerce platform or web application may take 6-12 weeks. We provide a detailed timeline during the planning phase." },
  { id: 4, question: "Can you migrate my existing website to a new platform?", answer: "Yes, we offer website migration services to ensure a seamless transition to a new platform without losing data or functionality." },
  { id: 5, question: "What is an ERP system, and how can it benefit my business?", answer: "An ERP (Enterprise Resource Planning) system integrates all core business processes (finance, HR, inventory, etc.) into a single platform. It improves efficiency, reduces costs, and provides real-time insights for better decision-making." },
  { id: 7, question: "Do you provide ready-made CRM solutions, or are they custom-built?", answer: "We offer both! You can choose from our pre-built CRM solutions or opt for a custom-built CRM tailored to your specific needs." },
  { id: 8, question: "Can you integrate third-party tools with my ERP/CRM system?", answer: "Yes, we specialize in integrating third-party tools like payment gateways, marketing platforms, and analytics tools with your ERP or CRM system." },
  { id: 9, question: "What server management services do you offer?", answer: "We provide: 24/7 server monitoring, Backup and disaster recovery, Performance optimization, Cloud server management" },
  { id: 10, question: "How do you ensure server security?", answer: "We implement advanced security measures, including firewalls, encryption, access controls, and regular security audits, to protect your servers from threats." },
  { id: 11, question: "How do you handle project updates and communication?", answer: "We provide regular updates through emails, calls. You’ll always be in the loop!" },
  { id: 12, question: "What if I need changes after the project is completed?", answer: "We offer post-project support and are happy to make changes or updates as needed. Additional changes may be billed separately based on the scope." },
  { id: 13, question: "How involved do I need to be during the project?", answer: "We encourage collaboration and regular communication to ensure the project meets your expectations. However, our team handles all the technical aspects, so you can focus on your business." }
];

function displayFaqs(filteredFaqs) {
    const faqContainer = document.getElementById("accordionExample");
    faqContainer.innerHTML = ""; // Clear previous FAQs

    filteredFaqs.forEach(faq => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("col-lg-6", "p-2");
        faqItem.innerHTML = `
            <div class="accordion-item rounded-3 mb-3">
                <h2 class="mb-0">
                    <button class="accordion-button pe-5 bg-transparent collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse${faq.id}"
                        aria-expanded="false"
                        aria-controls="collapse${faq.id}">
                        ${faq.question}
                    </button>
                </h2>
                <div id="collapse${faq.id}"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body text-body">${faq.answer}</div>
                </div>
            </div>`;

        faqContainer.appendChild(faqItem);
    });
}
displayFaqs(faqs);

$('#newsletter_btn').on('click', function() {
        var email = $('#newsletter_email').val();

        if (email === "" || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        $.ajax({
            url: 'your-server-endpoint-url',
            type: 'POST',
            data: {
                email: email,
                source: 'web'
            },
            success: function(response) {
                alert(response);
                $('#newsletter_email').val('');
            },
            error: function(xhr, status, error) {
                alert("An error occurred. Please try again later.");
                console.error(response);
            }
        });
    });

    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
