var showcase = new Typed(".typed", {
  strings: ["Computer Scientist", "Python Developer", "Solutionist "],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
});

document.querySelector(".nav-toggler").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("side-active");
  document.querySelector(".icons").classList.toggle("toggler");
});
