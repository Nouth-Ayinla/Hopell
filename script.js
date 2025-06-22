document.addEventListener('DOMContentLoaded', function() {
  
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  
  burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
  });
  
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    });
  });
  
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      
      console.log('Form submitted:', data);
      
      
      alert('Thank you for your message! I will get back to you soon.');
      
      
      contactForm.reset();
    });
  }
  
  
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.masonry-item, .about-content, .about-img, .contact-info, .contact-form');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  
  document.querySelectorAll('.masonry-item, .about-content, .about-img, .contact-info, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  
  animateOnScroll();
  
 
  window.addEventListener('scroll', animateOnScroll);
});
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = encodeURIComponent(this.name.value);
  const phone = encodeURIComponent(this.phone.value);
  const email = encodeURIComponent(this.email.value);
  const message = encodeURIComponent(this.message.value);
  
  // Create WhatsApp message
  let whatsappMessage = `New Crochet Inquiry:%0A%0A`;
  whatsappMessage += `*Name:* ${name}%0A`;
  if (phone) whatsappMessage += `*Phone:* ${phone}%0A`;
  if (email) whatsappMessage += `*Email:* ${email}%0A`;
  whatsappMessage += `*Message:*%0A${message}`;
  
  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/2347045015379?text=${whatsappMessage}`, '_blank');
  
  // Optional: Reset form after submission
  this.reset();
});