const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);
  //console.log(e.keyCode);
  console.log(e.key);

  //const move = (direction) => {};

  switch (e.key) {
    /* Izquierda */
    case "ArrowDown":
      //move("left");
      x--;
      break;
    case "ArrowUp":
      //move("up");
      y--;
      break;
    case "ArrowLeft":
      //move("right");
      x++;
      break;
    case "ArrowRight":
      y++;
      //move("down");
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  /* console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
  console.log(e); */
  /*   if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    confirm("Haz lanzado un aviso con el teclado");
  } */
}
