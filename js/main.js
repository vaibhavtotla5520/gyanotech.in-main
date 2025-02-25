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

