const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "更多") {
    readMoreBtn.innerText = "收起";
  } else {
    readMoreBtn.innerText = "更多";
  }
});
