document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For simplicity, we're just displaying a response message
    document.getElementById('response').textContent = `Thank you, ${name}. We have received your message: "${message}"`;
});
