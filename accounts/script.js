const usernameInput = document.getElementById('username');
const usernameFeedback = document.getElementById('usernameFeedback');
const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('passwordFeedback');
const signUpBtn = document.getElementById('signUpBtn');
const popup = document.getElementById('popup');
const continueBtn = document.getElementById('continueBtn');

const hasAccepted = localStorage.getItem('betaAccepted');

function isUsernameBlacklisted(name) {
  const blacklist = ['unscrub', 'astrarune', 'pyp', 'pyppe', 'pypppe', 'lily', 'john', 'lol', 'retard', 'nigger', 'faggot', 'nigga', 'niger', 'nigeria', 'tranny', 'whore', 'retigga', 'charlie', 'kirk', 'xDD', 'emojiscrub', 'minecraft', 'roblox', 'abc', 'def']; 
  for (const term of blacklist) {
    if (name.toLowerCase().includes(term)) {
      return true;
    }
  }
  return false;
}

function validateUsername() {
  const value = usernameInput.value.trim();
  
  if (!/^[a-zA-Z0-9]+$/.test(value)) {
    usernameFeedback.textContent = "Username doesn't meet requirements.";
    usernameFeedback.className = "feedback error";
    return false;
  }

  if (isUsernameBlacklisted(value)) {
    usernameFeedback.textContent = "This username is not allowed on Emojiscrub.";
    usernameFeedback.className = "feedback blacklist";
    return false;
  }

  if (value.length < 3) {
    usernameFeedback.textContent = "Username too short.";
    usernameFeedback.className = "feedback error";
    return false;
  }

  if (value.length > 30) {
    usernameFeedback.textContent = "";
    return false;
  }

  usernameFeedback.textContent = "This username is available.";
  usernameFeedback.className = "feedback success";
  return true;
}

function validatePassword() {
  const pw = passwordInput.value;

  if (pw.length === 0) {
    passwordFeedback.textContent = "Enter password.";
    passwordFeedback.className = "feedback error";
    return false;
  }

  if (pw.includes(" ")) {
    passwordFeedback.textContent = "Password does not meet requirements.";
    passwordFeedback.className = "feedback error";
    return false;
  }

  if (pw.length < 10) {
    passwordFeedback.textContent = "Password must be at least 10 characters long.";
    passwordFeedback.className = "feedback error";
    return false;
  }

  if (pw.length > 35) {
    passwordFeedback.textContent = "Password cannot exceed 35 characters.";
    passwordFeedback.className = "feedback error";
    return false;
  }

  if (!/[!@#$%^&*()_\-\+=\{}\[\]:;"'<>,.?/~`]/.test(pw)) {
    passwordFeedback.textContent = "Password must include at least one special symbol.";
    passwordFeedback.className = "feedback error";
    return false;
  }

  passwordFeedback.textContent = "";
  passwordFeedback.className = "feedback success";
  return true;
}

function updateButtonState() {
  const validUser = validateUsername();
  const validPass = validatePassword();
  signUpBtn.disabled = !(validUser && validPass);
}

window.addEventListener("DOMContentLoaded", () => {
  if (hasAccepted) {
    const container = document.querySelector('.container');
    container.innerHTML = `
      <h2>You've already made an account.</h2>
      <div style="display: flex; gap: 10px; justify-content: center;">
        <button id="goBackBtn">Go Back</button>
        <button id="logoutBtn">Log Out</button>
      </div>
    `;

    document.getElementById('goBackBtn').addEventListener('click', () => {
      window.location.href = 'https://escrub.astrarune.com';
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('betaAccepted');
      location.reload();
    });
  }
});

usernameInput.addEventListener('input', updateButtonState);
passwordInput.addEventListener('input', updateButtonState);

signUpBtn.addEventListener('click', () => {
  if (!validateUsername() || !validatePassword()) return;

  if (!hasAccepted) {
    popup.style.display = 'flex';
  } else {
    alert("You've already made an account.");
  }
});

continueBtn.addEventListener('click', () => {
  localStorage.setItem('betaAccepted', 'true');
  popup.style.display = 'none';
  window.location.href = 'https://escrub.astrarune.com';
});
