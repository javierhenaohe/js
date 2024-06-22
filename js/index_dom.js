import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import reponsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import darkTheme from "./dom/tema_oscura.js";
/* import { shortcuts } from "./dom/teclado.js"; */
//import { shortcuts } from "./dom/teclado.js";
//import { moveBall } from "./dom/moveBall.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jun 10, 2020 10:20:00", "Feliz cumpleaños");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://youtu.be/llfYdBL6lJA?si=2a5PBHlLmddl8iIA" target="_blank" rel="noopener">ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/llfYdBL6lJA?si=_8xMXbnii9D1m5xa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://maps.app.goo.gl/9Gff7Z3iRuq78Po27" target="_blank" rel="noopener">ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4737.655791048658!2d-76.31400904603991!3d3.689353683298522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39f9a7a7e9148f%3A0xfc62ff9dde8627cc!2sEstadio%20Alfredo%20Vasquez%20Cobo!5e0!3m2!1ses-419!2sco!4v1718408564134!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  reponsiveTester("responsive-tester");

  userDeviceInfo("user-device");

  webCam("webcam");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e), moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();

/* d.addEventListener("keyup", (e) => {
  shortcuts(e);
}); */
/* d.addEventListener("keypress", (e) => {
  shortcuts(e);
});
*/
