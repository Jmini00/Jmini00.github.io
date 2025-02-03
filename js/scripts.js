
    //Pop-up box CV
    const cv = document.getElementById('cv');
    cv.addEventListener("click", () => {
        download()
    });

    function download() {
        Swal.fire({
            icon: "question",
            title: "Mon CV ?...",
            html: `Souhaitez-vous y jeter un oeil ?? <br> Faites le bon choix 😃`,
            showCancelButton: true,
            confirmButtonText: `<a class="btn" href="CVProDevJerome.pdf" download="CVProDevJerome.pdf"><i class="fa fa-thumbs-up"></i> Ok </a>`,
            cancelButtonText: `<a class="btn" href="CVMaj.pdf" download="CVMaj.pdf"><i class="fa fa-thumbs-down"></i></a>`,
        });
    }

    // Scroll reveal
    ScrollReveal({
        // reset: true,
        distance: '40px',
        duration: 2500,
        delay: 500
    });

    ScrollReveal().reveal('.page-section-heading, .masthead-avatar', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-item, #contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.about-left, .masthead-subheading, .skills-left, .picture-left, .education', { origin: 'left' });
    ScrollReveal().reveal('.about-right, .masthead-heading, .skills-right, .picture-right, .jobs', { origin: 'right' });


    // Effet type
    const typed = new Typed('.multiple-text', {
        strings: ['curieux', 'passionné', "jeune diplômé quarantenaire", "en quête d'un nouveau challenge", 'Développeur Web Full Stack'],
        typeSpeed: 90,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    // Animation logo
    const picture = document.querySelector(".masthead-avatar");
    let isZoomedOut = false; 
    setInterval(() => {
        if (isZoomedOut) {
            picture.classList.remove('zoomOut');
            picture.classList.add('zoomIn');
        } else {
            picture.classList.remove('zoomIn');
            picture.classList.add('zoomOut');
        }
        isZoomedOut = !isZoomedOut; 
    }, 4000);

    // Modal à l'ouverture
    const myModal = new bootstrap.Modal(document.getElementById('mentionsLegales'), {
        keyboard: false
      })
      setTimeout(() => {
        myModal.toggle()
      },10000);
        



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
