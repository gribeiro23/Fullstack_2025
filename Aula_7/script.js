let canvas = document.getElementById('canvas')
let ctx =  canvas.getContext('2d');

//Quadrado
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'white';
ctx.fillRect(10,10,70,70);
ctx.strokeRect(10,10,70,70);
ctx.closePath();

//Linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'white';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'Black';
ctx.strokeStyle = 'white';
ctx.arc(200,200,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Texto
ctx.beginPath();
ctx.lineWidth = 10;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'white';
ctx.font = "90px Comic Sans MS"
ctx.textAlign = "center";
ctx.strokeText("Opa",200,350)
ctx.fillText("Opa",195,350);
ctx.closePath();

let canvas_2 = document.getElementById('canvas_2')
let ctx2 = canvas_2.getContext('2d');

//Quadrados
ctx2.beginPath();
//QuadradoVermelho
ctx2.lineWidth = 5;
ctx2.fillStyle = 'Red'
ctx2.strokeStyle = 'Red'
ctx2.fillRect(0,0,50,50);
ctx2.strokeRect(0,0,50,50)
//QuadradoAzul
ctx2.lineWidth = 5;
ctx2.fillStyle = 'Blue'
ctx2.strokeStyle = 'Blue'
ctx2.fillRect(350,0,50,50);
ctx2.strokeRect(350,0,50,50)
//QuadradoAmarelo
ctx2.lineWidth = 5;
ctx2.fillStyle = 'Yellow'
ctx2.strokeStyle = 'Yellow'
ctx2.fillRect(0,350,50,50);
ctx2.strokeRect(0,350,50,50)
//QuadradoVerde
ctx2.lineWidth = 5;
ctx2.fillStyle = 'Green'
ctx2.strokeStyle = 'Green'
ctx2.fillRect(350,350,50,50);
ctx2.strokeRect(350,350,50,50)
ctx2.closePath();

//Arcos
ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.fillStyle = 'whitesmoke';
ctx2.strokeStyle = 'Green';
ctx2.arc(200,201,50,0*Math.PI,1*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//Linhas
//LinhaVerde
ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.fillStyle = 'Green';
ctx2.strokeStyle = 'Green';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200)
ctx2.fill();
ctx2.stroke();
ctx2.closePath();
ctx2.beginPath();

//LinhaVermelha
ctx2.lineWidth = 3;
ctx2.fillStyle = 'Red'
ctx2.strokeStyle = 'Red'
ctx2.moveTo(50,50);
ctx2.lineTo(400,400);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//LinhaAzul
ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.fillStyle = 'Blue';
ctx2.strokeStyle = 'Blue';
ctx2.moveTo(350,50);
ctx2.lineTo(0,400)
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//Arcos
ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.fillStyle = 'Yellow';
ctx2.strokeStyle = 'Green';
ctx2.arc(80,140,20,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.fillStyle = 'Yellow';
ctx2.strokeStyle = 'Green';
ctx2.arc(320,140,20,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//Texto
ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'black';
//ctx2.strokeStyle = 'black';
ctx2.font = "25px Comic Sans MS"
ctx2.textAlign = "center";
//ctx2.strokeText("Desenvolvimento Web",200,350)
ctx2.fillText("Desenvolvimento Web",200,75);
ctx2.closePath();







