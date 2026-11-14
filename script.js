// GlowUp student business proposal website interactions
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Close the mobile navigation after a section link is selected.
  document.querySelectorAll("#navLinks .nav-link, #navLinks .btn").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navLinks");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Show a back-to-top control after the visitor scrolls.
  const backToTop = document.getElementById("backToTop");
  const updateBackToTop = () => {
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Prepare an email using the visitor's default email application.
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(`GlowUp inquiry: ${data.get("service")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterested in: ${data.get("service")}\n\nMessage:\n${data.get("message")}`
      );
      if (feedback) feedback.textContent = "Opening your email application…";
      window.location.href = `mailto:lumakingandrei@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});