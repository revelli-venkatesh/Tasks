document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from being submitted
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");
  
    let isValid = true;
  
    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
  
    // Name validation
    if (name.trim() === '') {
      nameError.textContent = 'Name is required!';
      isValid = false;
    }
  
    // Email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      emailError.textContent = 'Please enter a valid email address!';
      isValid = false;
    }
  
    // Message validation
    if (message.trim() === '') {
      messageError.textContent = 'Message is required!';
      isValid = false;
    }
  
    // If form is valid, show success message
    if (isValid) {
      successMsg.textContent = 'Thank you for your message! We will get back to you soon.';
      successMsg.style.color = 'green';
    } else {
      successMsg.textContent = '';
    }
  });
  
