const heading=document.querySelector('h1');
heading.style.color='#000033'
heading.style.fontSize='60px'
heading.style.fontWeight='bold'


document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('emailInput').value;

    // Validate email format
    if (validateEmail(email)) {
      // Redirect to success page
      window.location.href = 'success.html?email=' + encodeURIComponent(email);
    }
  });
  function validateEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }

 