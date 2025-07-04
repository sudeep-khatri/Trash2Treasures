// Animate feature cards on load
document.querySelectorAll('.feature-card').forEach((card, i) => {
  setTimeout(() => card.style.opacity = 1, 300 + i * 150);
});

// Modal logic
const openModalBtn = document.getElementById('openModalBtn');
const modalBg = document.getElementById('modalBg');
const closeModalBtn = document.getElementById('closeModalBtn');
const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const tabIndicator = document.getElementById('tabIndicator');

function animateTabIndicator() {
  if (!tabIndicator) return;
  if (tabLogin.classList.contains('active')) {
    tabIndicator.style.left = '4px';
  } else {
    tabIndicator.style.left = 'calc(50% + 4px)';
  }
}

openModalBtn.onclick = () => {
  modalBg.classList.add('active');
  document.body.style.overflow = 'hidden';
};
closeModalBtn.onclick = () => {
  modalBg.classList.remove('active');
  document.body.style.overflow = '';
};
modalBg.onclick = (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove('active');
    document.body.style.overflow = '';
  }
};

if (tabLogin && tabSignup) {
  tabLogin.onclick = function() {
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    document.getElementById('loginForm').style.display = '';
    document.getElementById('signupForm').style.display = 'none';
    animateTabIndicator();
  };
  tabSignup.onclick = function() {
    tabSignup.classList.add('active');
    tabLogin.classList.remove('active');
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = '';
    animateTabIndicator();
  };
}

// On load, set indicator position
animateTabIndicator();

// Prevent default form submission for demo
loginForm.onsubmit = signupForm.onsubmit = (e) => {
  e.preventDefault();
  alert('Demo only: No backend connected.');
};

// Animate modal on open
modalBg.addEventListener('transitionend', () => {
  if (modalBg.classList.contains('active')) {
    document.getElementById('modal').focus();
  }
});

// Animate tasks section on scroll
function revealTasksOnScroll() {
  const tasksSection = document.getElementById('tasksSection');
  const rect = tasksSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    tasksSection.classList.add('visible');
    window.removeEventListener('scroll', revealTasksOnScroll);
  }
}
window.addEventListener('scroll', revealTasksOnScroll);
window.addEventListener('DOMContentLoaded', revealTasksOnScroll);

// Optionally, stagger task cards animation
document.addEventListener('DOMContentLoaded', () => {
  const tasksSection = document.getElementById('tasksSection');
  const cards = tasksSection.querySelectorAll('.task-card');
  tasksSection.addEventListener('transitionend', () => {
    if (tasksSection.classList.contains('visible')) {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.transitionDelay = `${i * 0.1 + 0.2}s`;
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, i * 100);
      });
    }
  });
});

document.querySelectorAll('.tasks-table-row').forEach(row => {
  row.addEventListener('click', function() {
    document.querySelectorAll('.tasks-table-row').forEach(r => r.classList.remove('selected'));
    this.classList.add('selected');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const modalBottom = document.getElementById("modalBottom");
  const modalBottomLogin = document.getElementById("modalBottomLogin");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  if (showSignup) {
    showSignup.onclick = function(e) {
      e.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "flex";
      modalBottom.style.display = "none";
      modalBottomLogin.style.display = "block";
      modalTitle.innerHTML = 'Create your <span>Trash2Treasure</span> account';
      modalDesc.textContent = "Sign up and start your eco-friendly journey!";
    };
  }
  if (showLogin) {
    showLogin.onclick = function(e) {
      e.preventDefault();
      loginForm.style.display = "flex";
      signupForm.style.display = "none";
      modalBottom.style.display = "block";
      modalBottomLogin.style.display = "none";
      modalTitle.innerHTML = 'Welcome to <span>Trash2Treasure</span>';
      modalDesc.textContent = "Join the movement and start earning points for eco-friendly actions!";
    };
  }
});