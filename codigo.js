let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let imagen = new Image();
imagen.src = 'argentina.png'; 

function cubo(x,y,an,al,color) {
 c.fillStyle = color;
 c.fillRect(x,y,an,al);
}

function cuboRotar(x,y,an,al,color,angulo){
  c.save();
  c.translate(x + an / 2, y + al / 2);
  c.rotate(angulo * Math.PI / 180);
  c.fillStyle = color;
  c.fillRect(-an / 2, -al / 2, an, al); 
  c.restore();
}

function circulo(x, y, radio, color) {
  c.beginPath();
  c.fillStyle = color;
  c.arc(x, y, radio, 0, Math.PI * 2, false);  
  c.fill();
  c.closePath();
};

function contornoCirculo(x, y, radio, color) {
  c.beginPath();
  c.arc(x, y, radio, 0, Math.PI * 2, false);
  c.strokeStyle = color;
  c.stroke();
  c.closePath();
};

function linea(x1,y1,x2,y2,color,grosor){
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.strokeStyle = color;
  c.lineWidth = grosor;
  c.stroke();
};

function contorno(x,y,an,al,color) {
 c.strokeStyle = color;
 c.strokeRect(x,y,an,al); 
};

function dibujarTexto(texto, x, y, color,tamano, fuente,alineacion) {
  c.font = `${tamano}px ${fuente}`;
  c.fillStyle = color;  
  c.textAlign = alineacion;
  c.fillText(texto, x, y);
};

function imagenes(img,x,y,an,al){
 c.drawImage(img,x,y,an,al)
};

let animacion = ()=>{
window.requestAnimationFrame(animacion); c.clearRect(0,0,canvas.width,canvas.height);
cubo(0,0,innerWidth,innerHeight,'black')
imagenes(imagen,0,0,400,300)
cubo(0,200,50,50,'blue',0,0);
circulo(200,400,50,'green');
contornoCirculo(100,300,30,'#31ff15');
cuboRotar(100,20,50,100,'yellow',45);
linea(100,100,200,250,'red',10);
contorno(100,500,100,50,'rgb(25,28,100)');
dibujarTexto("Argentina 🇦🇷⭐⭐⭐",200,350,"red","39","Arial","center")

};
animacion();














