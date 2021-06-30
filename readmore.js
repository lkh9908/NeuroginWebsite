const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.firstChild.classList.contains('fa-angle-double-down')) {
    readMoreBtn.firstChild.classList.remove('fa-angle-double-down');
    readMoreBtn.firstChild.classList.add('fa-angle-double-up');
  } else {
    readMoreBtn.firstChild.classList.remove('fa-angle-double-up');
    readMoreBtn.firstChild.classList.add('fa-angle-double-down');
  }
});
