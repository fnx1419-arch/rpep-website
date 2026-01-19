// ===== LOGIN FORM SCRIPT =====
const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const validUser = "testuser";
    const validPass = "password123";

    if (usernameInput === validUser && passwordInput === validPass) {
      alert("🎉 Login successful! Welcome, " + usernameInput + "!");
    } else {
      alert("❌ Login failed. Please check your username and password.");
    }
  });
}


// ===== PROGRAM TABS (programme.html) =====
(function () {
  const tabsWrap = document.getElementById("programTabs");
  const details = document.getElementById("programDetails");
  if (!tabsWrap || !details) return;

  const content = {
    foundation: {
      title: "Foundation Phase",
      text:
        "Build strong fundamentals in radiology through structured resources, guided reading, and beginner-friendly learning materials that prepare you for hospital exposure."
    },
    shadowing: {
      title: "Hospital Shadowing",
      text:
        "Observe real radiology workflows in hospitals, learn professional etiquette, and understand how imaging supports diagnosis and patient care through supervised exposure."
    },
    workshops: {
      title: "Workshops & Skills",
      text:
        "Develop practical skills through workshops: image interpretation basics, communication, case discussions, and tool familiarity to strengthen your confidence and knowledge."
    },
    advanced: {
      title: "Advanced Exploration",
      text:
        "Dive deeper into specialized areas of radiology including interventional procedures, subspecialty rotations, research opportunities, and career pathway planning with guidance from experienced radiologists."
    }
  };

  tabsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".program-tab");
    if (!btn) return;

    tabsWrap.querySelectorAll(".program-tab").forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.tab;
    const data = content[key];
    if (!data) return;

    details.innerHTML = `<h2>${data.title}</h2><p>${data.text}</p>`;
  });
})();
