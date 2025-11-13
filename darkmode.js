
  const toggleButton = document.getElementById("darkModeToggle");
  const icon = document.getElementById("modeIcon");
  const isDark = localStorage.getItem("darkMode") === "true";

  // Apply saved mode on load
  if (isDark) {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Toggle dark/light mode
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", dark);

    // Switch icon
    if (dark) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });

