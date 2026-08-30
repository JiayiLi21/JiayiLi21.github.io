(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");
  const emailMenu = document.querySelector(".email-menu");
  const year = document.getElementById("current-year");

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const effectiveTheme = () => root.dataset.theme || (systemPrefersDark.matches ? "dark" : "light");

  const syncThemeButton = () => {
    const dark = effectiveTheme() === "dark";
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute("aria-label", dark ? "Use light appearance" : "Use dark appearance");
  };

  themeToggle.addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("appearance", next);
    syncThemeButton();
  });

  systemPrefersDark.addEventListener("change", () => {
    if (!root.dataset.theme) syncThemeButton();
  });

  menuToggle.addEventListener("click", () => {
    const open = navigation.dataset.open !== "true";
    navigation.dataset.open = String(open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  document.addEventListener("click", (event) => {
    if (emailMenu.open && !emailMenu.contains(event.target)) emailMenu.open = false;
    if (
      navigation.dataset.open === "true" &&
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navigation.dataset.open = "false";
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    emailMenu.open = false;
    navigation.dataset.open = "false";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });

  year.textContent = String(new Date().getFullYear());
  syncThemeButton();
})();
