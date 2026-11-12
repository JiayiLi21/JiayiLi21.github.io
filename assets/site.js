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
    if (open) navigation.querySelector("a")?.focus();
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
    const navigationWasOpen = navigation.dataset.open === "true";
    emailMenu.open = false;
    navigation.dataset.open = "false";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    if (navigationWasOpen) menuToggle.focus();
  });

  year.textContent = String(new Date().getFullYear());
  syncThemeButton();
})();

(() => {
 const dialog = document.querySelector('.figure-dialog');
 document.querySelectorAll('.figure-open').forEach(button => button.addEventListener('click', () => {
  dialog.querySelector('img').src = button.dataset.figure;
  dialog.querySelector('img').alt = button.querySelector('img').alt;
  dialog.querySelector('p').textContent = button.dataset.caption;
  dialog.showModal();
 }));
 dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
 dialog.addEventListener('click', e => { if(e.target === dialog && (e.clientX < dialog.getBoundingClientRect().left || e.clientX > dialog.getBoundingClientRect().right || e.clientY < dialog.getBoundingClientRect().top || e.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
 const links = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
 links.forEach(a => a.addEventListener('click', () => {
  document.querySelector('.primary-nav').dataset.open = 'false';
  const toggle = document.querySelector('.menu-toggle');
  toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');
 }));
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {if(entry.isIntersecting) links.forEach(a => {
   if(a.hash === '#' + entry.target.id) a.setAttribute('aria-current','location');
   else a.removeAttribute('aria-current');
  });});
 },{rootMargin:'-15% 0px -60% 0px',threshold:0});
 links.forEach(a => {const section=document.querySelector(a.hash);if(section)observer.observe(section);});
})();
