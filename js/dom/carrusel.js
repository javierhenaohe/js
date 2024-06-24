const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".sliders-btns .next"),
    $prevBtn = d.querySelector(".sliders-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");

  let i = 0;

  console.log("0");

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();

      $slides[i].classList.remove("active");

      i--;

      console.log("1");

      if (i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();

      $slides[i].classList.remove("active");

      i++;

      if (i >= $slides.length) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });
}
