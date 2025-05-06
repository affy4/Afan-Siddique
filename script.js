document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle

    const menuToggle = document.querySelector('.mobile-menu-toggle');

    const mobileNav = document.querySelector('.mobile-nav');

    

    menuToggle.addEventListener('click', function() {

        mobileNav.classList.toggle('active');

        

        // Animate hamburger to X

        const spans = menuToggle.querySelectorAll('span');

        spans.forEach(span => span.classList.toggle('active'));

        

        if (mobileNav.classList.contains('active')) {

            document.body.style.overflow = 'hidden';

        } else {

            document.body.style.overflow = 'auto';

        }

    });

    

    // Close mobile menu when clicking on a link

    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    mobileLinks.forEach(link => {

        link.addEventListener('click', function() {

            mobileNav.classList.remove('active');

            document.body.style.overflow = 'auto';

            

            const spans = menuToggle.querySelectorAll('span');

            spans.forEach(span => span.classList.remove('active'));

        });

    });

    

    // Mentor Filtering

    const mentorFilter = document.getElementById('mentor-filter');

    const mentorCards = document.querySelectorAll('.mentor-card');

    

    if (mentorFilter) {

        mentorFilter.addEventListener('change', function() {

            const selectedCategory = this.value;

            

            mentorCards.forEach(card => {

                if (selectedCategory === 'all') {

                    card.style.display = 'block';

                } else {

                    const categories = card.dataset.category.split(' ');

                    if (categories.includes(selectedCategory)) {

                        card.style.display = 'block';

                    } else {

                        card.style.display = 'none';

                    }

                }

            });

        });

    }

    

    // Workshop Carousel

    const workshopsContainer = document.querySelector('.workshops-container');

    const workshopCards = document.querySelectorAll('.workshop-card');

    const prevWorkshopBtn = document.querySelector('.workshops-nav .prev-btn');

    const nextWorkshopBtn = document.querySelector('.workshops-nav .next-btn');

    

    if (workshopsContainer && prevWorkshopBtn && nextWorkshopBtn) {

        let scrollAmount = 0;

        const cardWidth = workshopCards[0].offsetWidth + 32; // Card width + gap

        

        prevWorkshopBtn.addEventListener('click', function() {

            scrollAmount = Math.max(scrollAmount - cardWidth, 0);

            workshopsContainer.scrollTo({

                left: scrollAmount,

                behavior: 'smooth'

            });

        });

        

        nextWorkshopBtn.addEventListener('click', function() {

            scrollAmount = Math.min(scrollAmount + cardWidth, workshopsContainer.scrollWidth - workshopsContainer.clientWidth);

            workshopsContainer.scrollTo({

                left: scrollAmount,

                behavior: 'smooth'

            });

        });

    }

    

    // Testimonial Carousel

    const testimonialContainer = document.querySelector('.testimonials-container');

    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const prevTestimonialBtn = document.querySelector('.testimonial-nav .prev-btn');

    const nextTestimonialBtn = document.querySelector('.testimonial-nav .next-btn');

    

    if (testimonialContainer && prevTestimonialBtn && nextTestimonialBtn) {

        let scrollAmount = 0;

        const cardWidth = testimonialCards[0].offsetWidth + 32; // Card width + gap

        

        prevTestimonialBtn.addEventListener('click', function() {

            scrollAmount = Math.max(scrollAmount - cardWidth, 0);

            testimonialContainer.scrollTo({

                left: scrollAmount,

                behavior: 'smooth'

            });

        });

        

        nextTestimonialBtn.addEventListener('click', function() {

            scrollAmount = Math.min(scrollAmount + cardWidth, testimonialContainer.scrollWidth - testimonialContainer.clientWidth);

            testimonialContainer.scrollTo({

                left: scrollAmount,

                behavior: 'smooth'

            });

        });

    }

    

    // Community Carousel

    const communitySlides = document.querySelectorAll('.community-slide');

    const indicators = document.querySelectorAll('.indicator');

    

    if (communitySlides.length > 0 && indicators.length > 0) {

        let currentSlide = 0;

        

        function showSlide(index) {

            communitySlides.forEach(slide => slide.classList.remove('active'));

            indicators.forEach(indicator => indicator.classList.remove('active'));

            

            communitySlides[index].classList.add('active');

            indicators[index].classList.add('active');

            currentSlide = index;

        }

        

        indicators.forEach((indicator, index) => {

            indicator.addEventListener('click', function() {

                showSlide(index);

            });

        });

        

        // Auto slide

        setInterval(function() {

            let nextSlide = (currentSlide + 1) % communitySlides.length;

            showSlide(nextSlide);

        }, 5000);

    }

    

    // Contact Form Submission

    const contactForm = document.getElementById('contactForm');

    

    if (contactForm) {

        contactForm.addEventListener('submit', function(e) {

            e.preventDefault();

            

            // Get form values

            const name = document.getElementById('name').value;

            const email = document.getElementById('email').value;

            const message = document.getElementById('message').value;

            

            // Simple validation

            if (!name || !email || !message) {

                alert('Please fill in all fields');

                return;

            }

            

            // Here you would typically send the form data to a server

            // For this example, we'll just show a success message

            alert('Thank you for your message! We will get back to you soon.');

            contactForm.reset();

        });

    }

    

    // Smooth scrolling for anchor links

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function(e) {

            e.preventDefault();

            

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                const headerHeight = document.querySelector('header').offsetHeight;

                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                

                window.scrollTo({

                    top: targetPosition,

                    behavior: 'smooth'

                });

            }

        });

    });

    

    // Add active class to nav links based on scroll position

    function setActiveNavLink() {

        const sections = document.querySelectorAll('section[id]');

        const scrollPosition = window.scrollY;

        

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 100;

            const sectionHeight = section.offsetHeight;

            const sectionId = section.getAttribute('id');

            

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {

                document.querySelectorAll('nav a').forEach(link => {

                    link.classList.remove('active');

                    if (link.getAttribute('href') === '#' + sectionId) {

                        link.classList.add('active');

                    }

                });

            }

        });

    }

    

    window.addEventListener('scroll', setActiveNavLink);

    

    // Initialize active nav link on page load

    setActiveNavLink();

});

  
