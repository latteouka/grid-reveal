import "./scss/style.scss";
import gsap from "gsap";

// import { Contents } from "./parts/contents";

// mydisplay
// new Contents({
//   el: document.body,
// });

function init() {
  console.log("init");

  const picker = document.querySelector(".container")!;

  const lines = {
    vertical: picker.querySelectorAll(
      ".item:nth-child(-n+4):not(:nth-child(1)) i"
    ),
    horizontal: picker.querySelectorAll(".item:nth-child(4n+5) i"),
  };
  const cells = picker.querySelectorAll(".cell");
  const items = picker.querySelectorAll(".item");

  gsap.set(lines.horizontal, {
    scaleX: 0,
    transformOrigin: "0% 50%",
  });
  gsap.set(lines.vertical, {
    scaleY: 0,
    transformOrigin: "50% 0%",
  });

  const tl = gsap
    .timeline({
      defaults: {
        duration: 1.5,
        ease: "power2.inOut",
      },
    })
    .to(
      lines.horizontal,
      {
        duration: 2.8,
        scaleX: 1,
        ease: "linear",
      },
      "lines"
    )
    .to(
      lines.vertical,
      {
        scaleY: 1,
        stagger: { each: 0.6 },
        ease: "linear",
      },
      "lines"
    )
    .to(cells, {
      rotateY: 90,
      force3D: true,
      ease: "power4.inOut",
    });

  for (let i = 0; i < items.length; i++) {
    tl.to(
      items[i],
      {
        backgroundPositionX: Math.random() * 80,
        backgroundPositionY: Math.random() * 80,
      },
      "back"
    );
  }
  for (let i = 0; i < items.length; i++) {
    tl.to(
      items[i],
      {
        backgroundPositionX: Math.random() * 30,
        backgroundPositionY: Math.random() * 30,
      },
      "back2"
    );
  }
  for (let i = 0; i < items.length; i++) {
    tl.to(
      items[i],
      {
        backgroundPositionX: Math.random() * 50,
        backgroundPositionY: Math.random() * 50,
      },
      "back3"
    );
  }
  for (let i = 0; i < items.length; i++) {
    tl.to(
      items[i],
      {
        backgroundPositionX: Math.random() * 80,
        backgroundPositionY: Math.random() * 80,
      },
      "back4"
    );
  }
  console.log(cells);
  document.addEventListener("click", () => tl.restart());
}

init();
