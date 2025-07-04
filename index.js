//   <!-- JavaScript to handle navigation -->

    function navigateTo(page) {
      const homePage = document.getElementById('homePage');
      const appointmentPage = document.getElementById('appointmentPage');

      if (page === 'home') {
        homePage.classList.remove('hidden');
        appointmentPage.classList.add('hidden');
      } else if (page === 'appointment') {
        homePage.classList.add('hidden');
        appointmentPage.classList.remove('hidden');
      }
    }

  

//   <!-- JS logic for navigation and form -->
    function navigateTo(page) {
      const homePage = document.getElementById('homePage');
      const appointmentPage = document.getElementById('appointmentPage');
      if (page === 'home') {
        homePage.classList.remove('hidden');
        appointmentPage.classList.add('hidden');
      } else {
        homePage.classList.add('hidden');
        appointmentPage.classList.remove('hidden');
      }
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const captcha = form.captcha.value.trim();
      const agree = form.agree.checked;

      if (!name || !phone || !captcha || !agree) {
        alert("Please fill all fields and accept terms.");
        return false;
      }

      console.log("Form submitted:", { name, phone, captcha, agree });
      return true;
    }

// <!-- Appointment script -->
   // Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value;
  const date = this.date.value;

  alert(`Appointment requested for ${name} on ${date}`);

  this.reset(); // Clear form fields
});

// Simple navigation toggle (simulate React-style page change)
function navigateTo(page) {
  const hero = document.getElementById('hero');
  const body = document.getElementById('body');
  const appointment = document.getElementById('appointment');

  if (page === 'book') {
    if (hero) hero.style.display = 'none';
    if (body) body.style.display = 'none';
    if (appointment) appointment.style.display = 'flex';
  } else {
    if (hero) hero.style.display = 'block';
    if (body) body.style.display = 'block';
    if (appointment) appointment.style.display = 'none';
  }

  // Scroll to top forcefully
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 50);
}


//   <!--body Scripts -->
  function toggleAccordion(index) {
    for (let i = 0; i < 5; i++) {
      const content = document.getElementById(`accordion-content-${i}`);
      const icon = document.getElementById(`toggle-icon-${i}`);
      if (i === index) {
        const isOpen = !content.classList.contains('hidden');
        content.classList.toggle('hidden');
        icon.textContent = isOpen ? '+' : '−';
      } else {
        document.getElementById(`accordion-content-${i}`).classList.add('hidden');
        document.getElementById(`toggle-icon-${i}`).textContent = '+';
      }
    }
  }

  document.getElementById("mobileForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const captcha = form.captcha.value.trim();
    const agree = form.agree.checked;
    if (!name || !phone || !captcha || !agree) {
      alert("Please fill all fields and accept terms.");
      return;
    }
    console.log("Form submitted:", { name, phone, captcha, agree });
  });
