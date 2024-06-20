document.addEventListener("mousemove",dibujarMause);
var cuadro = document.getElementById("canvas");
var papel=cuadro.getContext("2d");
function dibujarMause(evento)
{
  dibujar("red","mousemove","mousemove","mousemove","mousemove",papel)
}
function dibujar(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
