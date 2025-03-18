// active navbar

document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector(".navigation-wrap");

  if (nav) {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
      } else {
        nav.classList.remove("scroll-on");
      }
    };
  } else {
    console.error("Navigation element not found!");
  }

  // Hide navbar after clicking a nav link
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");

  if (navBar && navCollapse) {
    navBar.forEach(function (a) {
      a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
      });
    });
  } else {
    console.error("Navbar links or collapse element not found!");
  }
});

//counter design

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5287, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});
