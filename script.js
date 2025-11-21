function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    let strength = 0;
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    updateRule("len", hasLength);
    updateRule("upper", hasUpper);
    updateRule("lower", hasLower);
    updateRule("num", hasNumber);
    updateRule("special", hasSpecial);

    strength += hasLength ? 1 : 0;
    strength += hasUpper ? 1 : 0;
    strength += hasLower ? 1 : 0;
    strength += hasNumber ? 1 : 0;
    strength += hasSpecial ? 1 : 0;
    updateStrengthMeter(strength);
}
function updateRule(id, isValid) {
    const item = document.getElementById(id);
    const icon = item.querySelector(".icon");
    item.classList.remove("valid", "invalid");

    if (isValid) {
        item.classList.add("valid");
        icon.textContent = "✔";
    } else {
        item.classList.add("invalid");
        icon.textContent = "✖";
    }
}
function updateStrengthMeter(score) {
    const bar = document.getElementById("meter-bar");
    const msg = document.getElementById("strength-msg");

    if (score === 0) {
        bar.style.width = "0%";
        msg.innerHTML = "";
        return;
    }
    if (score <= 2) {
        bar.style.width = "30%";
        bar.style.background = "red";
        msg.innerHTML = "Weak Password ❌";
        msg.style.color = "red";
    } 
    else if (score === 3 || score === 4) {
        bar.style.width = "60%";
        bar.style.background = "orange";
        msg.innerHTML = "Moderate Password ⚠️";
        msg.style.color = "orange";
    } 
    else if (score === 5) {
        bar.style.width = "100%";
        bar.style.background = "#00ff88";
        msg.innerHTML = "Strong Password ✅";
        msg.style.color = "#00ff88";
    }
}
function togglePassword() {
    const input = document.getElementById("password");
    const toggle = document.getElementById("toggle");

    if (input.type === "password") {
        input.type = "text";
        toggle.textContent = "🙈";
    } else {
        input.type = "password";
        toggle.textContent = "🙉";
    }
}
