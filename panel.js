// Animate panels on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.panel').forEach(panel => {
    panel.style.opacity = '1';
    panel.style.transform = 'translateY(0)';
  });
});

// Admin Panel navigation
document.getElementById('adminLink').onclick = function(e) {
  e.preventDefault();
  // Replace with your actual admin login page path
  window.location.href = "admin-login.html";
};

// No JS needed for userLink since it's a direct hyperlink now