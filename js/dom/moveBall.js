import { d } from "./teclado";

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);
  console.log(e.keyCode);
  console.log(e.key);

  //const move = (direction) => {};
  switch (e.keyCode) {
    /* Izquierda */
    case 37:
      //move("left");
      x--;
      break;
    case 38:
      //move("up");
      y--;
      break;
    case 39:
      //move("right");
      x++;
      break;
    case 40:
      //move("down");
      y++;
      break;

    default:
      break;
  }
  $ball.style.transform = `traslate(${x * 10}px, ${y * 10}px) `;
}
