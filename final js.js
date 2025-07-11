<script>
  // Smooth scrolling for anchor links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Basic contact form validation
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[placeholder="Your Name"]');
    const email = contactForm.querySelector('input[placeholder="Your Email"]');
    const message = contactForm.querySelector('textarea');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    // Simple email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });

  // Optional: Add active link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    package_type VARCHAR(50),
    booking_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString(); // e.g., 03:45:12 PM
  document.getElementById('liveClock').textContent = time;
}

setInterval(updateClock, 1000); // update every 1 second
updateClock(); // initial call

now.toLocaleString('en-GB');    // for 24-hour format, DD/MM/YYYY

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
</script>