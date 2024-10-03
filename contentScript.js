function disableReCAPTCHA() {
  var reCAPTCHAiframes = document.querySelectorAll('iframe[src*="google.com/recaptcha"]');
  reCAPTCHAiframes.forEach(function(iframe) {
    iframe.remove();
  });

  var verifyPrompts = document.querySelectorAll('div[role="alert"]');
  verifyPrompts.forEach(function(prompt) {
    prompt.remove();
  });
}

document.addEventListener("DOMContentLoaded", disableReCAPTCHA);
document.addEventListener("DOMSubtreeModified", disableReCAPTCHA);
