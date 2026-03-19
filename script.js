// Navbar scroll effect — offset for topbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form submission — sends data via WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const inputs = this.querySelectorAll('input, select, textarea');
  const name     = inputs[0].value.trim();
  const phone    = inputs[1].value.trim();
  const email    = inputs[2].value.trim();
  const service  = inputs[3].value;
  const city     = inputs[4].value;
  const message  = inputs[5].value.trim();

  const text = `Hello Viraj Infra & Services! 🏗️

*New Enquiry from Website*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
🔧 *Service:* ${service}
📍 *City:* ${city}
💬 *Message:* ${message}`;

  const waURL = `https://wa.me/918860911709?text=${encodeURIComponent(text)}`;
  window.open(waURL, '_blank');

  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-check"></i> Redirecting to WhatsApp...';
  btn.style.background = '#25D366';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.style.background = '';
    this.reset();
  }, 3000);
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.service-card, .project-card, .why-card, .contact-item, .testimonial-card, .cert-item'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
