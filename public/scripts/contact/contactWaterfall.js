const contactsSection = document.querySelector("#contact");
const title = document.querySelector("#contact h2");
const items = document.querySelectorAll(
  ".contact-button, .charlybot-button, #github, #linkedin, #cv"
);

// observe projectsSection to add animations when visible, loading animations project sections

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        title.classList.add("title-loaded");

        const timeout = 100;
        setTimeout(() => {
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("contact-visible");
            }, timeout * (index + 1));
          });
        }, 200);
      } else {
        title.classList.remove("title-loaded");
        items.forEach((item) => {
          item.classList.remove("contact-visible");
        });
      }
    });
  },
  { threshold: 0.8 }
);



observer.observe(contactsSection);
