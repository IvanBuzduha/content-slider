const li = document.querySelectorAll("header .list .list-item");
const div = document.querySelector("header .list .box");

div.style.left = li[0].offsetLeft + "px";

li.forEach((item, key) => {
  item.addEventListener("click", (e) => {
    li.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
    div.style.transition = "0.5s";
    div.style.left = `${e.target.offsetLeft}px`;

    const slider = document.querySelector(".slider-block").offsetWidth;
    console.log("slider:", slider);
    let t = 0;
    // if (key == 1) {
    //   t = slider;
    // }
    // if (key == 2) {
    //   t = slider * 2;
    // }
    // if (key == 3) {
    //   t = slider * 3;
    // }
    // if (key == 4) {
    //   t = slider * 4;
    // }
    switch (t == 0) {
      case key == 1:
        t = slider;
        break;
      case key == 2:
        t = slider * 2;
        break;
      case key == 3:
        t = slider * 3;
        break;
      case key == 4:
        t = slider * 4;
        break;
    }

    document.querySelector(".slider").style.transform = `translateX(-${t}px)`;
  });
});
