(function () {
  "use strict";

  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  /* ---------- Light / dark toggle ---------- */
  function currentTheme() {
    var chosen = root.getAttribute("data-theme");
    if (chosen === "light" || chosen === "dark") return chosen;
    return media.matches ? "dark" : "light";
  }

  var toggle = document.getElementById("theme-toggle");

  function updateToggleLabel() {
    if (!toggle) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " theme");
    toggle.setAttribute("title", "Switch to " + next + " theme");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* Storage can be blocked; the choice then lasts for this page view only. */
      }
      updateToggleLabel();
    });
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateToggleLabel);
    }
    updateToggleLabel();
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Underline the nav link for the section in view ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^='#']"));
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
    });
  }

  links.forEach(function (a) {
    a.addEventListener("click", function () { setActive(a.getAttribute("href").slice(1)); });
  });

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Project popups ---------- */
  // A button with data-dialog="some-id" opens the <dialog id="some-id">. The popup
  // closes with its close button, the Escape key, or a click outside of it.
  function isOutside(dialog, event) {
    var box = dialog.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right ||
      event.clientY < box.top || event.clientY > box.bottom;
  }

  Array.prototype.forEach.call(document.querySelectorAll("dialog"), function (dialog) {
    if (typeof dialog.showModal !== "function") return;

    var closeButton = dialog.querySelector("[data-close]");
    if (closeButton) {
      closeButton.addEventListener("click", function () { dialog.close(); });
    }

    // Close only when the press starts and ends outside the popup, so that
    // selecting text inside it and letting go outside does not close it.
    var pressedOutside = false;
    dialog.addEventListener("pointerdown", function (event) {
      pressedOutside = event.target === dialog && isOutside(dialog, event);
    });
    dialog.addEventListener("click", function (event) {
      if (pressedOutside && event.target === dialog && isOutside(dialog, event)) {
        dialog.close();
      }
      pressedOutside = false;
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll("[data-dialog]"), function (button) {
    var dialog = document.getElementById(button.getAttribute("data-dialog"));
    if (!dialog || typeof dialog.showModal !== "function") return;
    button.addEventListener("click", function () {
      dialog.showModal();
      dialog.scrollTop = 0;
      // Focus the popup itself rather than its close button, so the Space and
      // arrow keys scroll the popup instead of pressing the button.
      dialog.focus({ preventScroll: true });
    });
  });
})();
