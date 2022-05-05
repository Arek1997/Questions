document.querySelector(".questions").addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-regular")) {
    const article = e.target.closest("article");
    const answer = article.querySelector(".answer");
    const icon = article.querySelector("i");

    answer.classList.toggle("hidden");
    icon.classList.toggle("fa-square-plus");
    icon.classList.toggle("fa-square-minus");
  }
});
