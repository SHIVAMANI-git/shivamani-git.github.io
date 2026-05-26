// ----------------------------------------------------
// Web3Forms Form Submission Handling
// ----------------------------------------------------
const contactForm = document.querySelector('.contact-form-panel form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (!submitBtn) return;
    
    const originalBtnText = submitBtn.textContent;
    
    // Validate hCaptcha response token
    const hCaptchaWidget = contactForm.querySelector('[name="h-captcha-response"]');
    const hCaptchaResponse = hCaptchaWidget ? hCaptchaWidget.value : '';
    if (!hCaptchaResponse) {
      alert('Please complete the hCaptcha verification.');
      return;
    }
    
    submitBtn.textContent = 'Sending Message...';
    submitBtn.disabled = true;

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Public client-side Web3Forms key. Protect it using Web3Forms domain restriction.
    const accessKey = 'c844132e-cd0b-4bc0-87b9-6e009b54f720';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          "h-captcha-response": hCaptchaResponse,
          subject: 'New Portfolio Contact Message from ' + name
        })
      });

      const result = await response.json();
      if (result.success) {
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
        // Reset hCaptcha widget after successful send
        if (typeof hcaptcha !== 'undefined') {
          hcaptcha.reset();
        }
      } else {
        alert('Something went wrong. Error: ' + result.message);
      }
    } catch (err) {
      alert('Network error. Failed to send message.');
      console.error(err);
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}
