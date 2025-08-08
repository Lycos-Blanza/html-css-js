// TAB SWITCH
function switchTab(category) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.project-card-container').forEach(card => {
    card.style.display = card.classList.contains(category) || category === 'all' ? 'block' : 'none';
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// CONTACT FORM
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const pattern = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,}$/;

  [name, email, message].forEach(i => i.addEventListener('input', () => i.setCustomValidity('')));

  // Capture-phase submit handler: runs before other handlers and blocks them if validation fails
  form.addEventListener('submit', function (e) {
    e.preventDefault();               // This stop normal submit
    e.stopImmediatePropagation();     // Thisprevent any other submit handlers from running

    const nameVal = name.value.trim();
    let emailVal = email.value.trim();
    const msgVal = message.value.trim();

    if (!nameVal) {
      name.setCustomValidity('Name required');
      name.reportValidity();
      name.focus();
      return;
    }

    if (!emailVal) {
      email.setCustomValidity('Email required');
      email.reportValidity();
      email.focus();
      return;
    }

    // normalize to lowercase for checking (and put it back into the field)
    emailVal = emailVal.toLowerCase();
    email.value = emailVal;

    if (!pattern.test(emailVal)) {
      email.setCustomValidity('Invalid email (use lowercase letters, numbers and periods only)');
      email.reportValidity();
      email.focus();
      return;
    }

    if (!msgVal) {
      message.setCustomValidity('Message required');
      message.reportValidity();
      message.focus();
      return;
    }

    // Passed all checks — do the success action
    alert('Thank you for contacting me! I will get back to you shortly.');
    form.reset();
  }, true);
});

// Color Randomizer For Project Section
function getRandomDarkColor() {
  const r = Math.floor(Math.random() * 100); 
  const g = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  return `rgb(${r}, ${g}, ${b})`;
}

// Triggers once clicked
document.addEventListener('click', function (e) {
  const card = e.target.closest('.project-card');
  if (card) {
    const newDarkColor = getRandomDarkColor();
    document.getElementById("projects").style.background = newDarkColor;
  }
});