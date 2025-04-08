let Canvas = document.getElementById('Canvas');
let ctx = Canvas.getContext('2d');
let Canvas2 = document.getElementById('Canvas2');
let ctx2 = Canvas2.getContext('2d');

//FUNÇÃO QUADRADO
function desenhar_quadrado(largura,color1,color2,x,y,tam1,tam2){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = color1;
    ctx.strokeStyle = color2;
    ctx.fillRect(x,y,tam1,tam2);
    ctx.strokeRect(x,y,tam1,tam2);
    ctx.closePath();
}

//FUNÇÃO QUADRADO2
function desenhar_quadrado2(largura,color1,color2,x,y,tam1,tam2){
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.fillStyle = color1;
    ctx2.strokeStyle = color2;
    ctx2.fillRect(x,y,tam1,tam2);
    ctx2.strokeRect(x,y,tam1,tam2);
    ctx2.closePath();
}

//FUNÇÃO LINHA
function desenhar_linha(largura,color1,color2,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = color1;
    ctx.strokeStyle = color2;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
}

//FUNÇÃO LINHA2
function desenhar_linha2(largura,color1,color2,x1,y1,x2,y2,x3,y3){
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.fillStyle = color1;
    ctx2.strokeStyle = color2;
    ctx2.moveTo(x1,y1);
    ctx2.lineTo(x2,y2);
    ctx2.lineTo(x3,y3);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
    ctx2.beginPath();
}

//FUNÇÃO ARCO
function desenhar_arco(largura,color1,color2,x,y,tam,pi1,pi2){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = color1;
    ctx.strokeStyle = color2;
    ctx.arc(x,y,tam,pi1*Math.PI,pi2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

//FUNÇÃO ARCO2
function desenhar_arco2(largura,color1,color2,x,y,tam,pi1,pi2){
    ctx2.beginPath();
    ctx2.lineWidth = largura;
    ctx2.fillStyle = color1;
    ctx2.strokeStyle = color2;
    ctx2.arc(x,y,tam,pi1*Math.PI,pi2*Math.PI);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
}

//FUNÇÃO ESCREVER
function escrever(largura,color1,font,texto2,x2,y2){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = color1;
    ctx.font = font
    ctx.textalign = "center";
    ctx.fillText(texto2,x2,y2);
    ctx.closePath();

}

//DESENHO CANVA 1
//QUADRADOS
desenhar_quadrado(5,'blue','blue',0,0,50,50);
desenhar_quadrado(5,'red','red',250,0,50,50);
desenhar_quadrado(5,'red','red',108,152,40,40);
desenhar_quadrado(5,'yellow','yellow',0,250,25,50);
desenhar_quadrado(5,'yellow','yellow',25,275,25,25);
desenhar_quadrado(5,'black','black',275,250,25,50);
desenhar_quadrado(5,'black','black',250,275,25,25);
desenhar_quadrado(5,'cyan','cyan',0,125,25,50);
desenhar_quadrado(5,'cyan','cyan',275,137,25,25);

//LINHAS
desenhar_linha(1,'green','green',0,150,300,150);
desenhar_linha(1,'black','black',150,150,150,260);
desenhar_linha(1,'blue','blue',50,50,150,150);
desenhar_linha(1,'red','red',250,50,150,150);


//ARCO
desenhar_arco(1,'white','green',150,300,70,1.5,2);
desenhar_arco(1,'white','green',150,300,85,1,1.5);
desenhar_arco(1,'cyan','green',150,300,45,1,2);
desenhar_arco(1,'cyan','green',150,300,45,1,2);
desenhar_arco(1,'transparent','green',150,149,60,1,2);
desenhar_arco(1,'transparent','green',150,149,80,1,1.25);
desenhar_arco(1,'transparent','green',150,149,80,1.75,2);
desenhar_arco(1,'cyan','blue',150,115,15,0,2);
desenhar_arco(1,'yellow','green',65,220,15,0,2);
desenhar_arco(1,'yellow','green',235,220,15,0,2);

//TEXTO
escrever(5,'black','20px Arial','Canvas',115,50);

//DESENHO CANVA 2
//QUADRADOS
//ASFALTO
desenhar_quadrado2(0,'gray','gray',0,220,300,80);
//CASA
desenhar_quadrado2(0,'#86471a','#86471a',115,130,80,90);
//ÁRVORE
desenhar_quadrado2(0,'#86471a','#86471a',42,160,20,60);
//ÁRVORE
desenhar_quadrado2(0,'#86471a','#86471a',250,200,20,60);
//PORTA
desenhar_quadrado2(0,'#624423','#624423',145,175,20,45);
//CARRO
desenhar_quadrado2(2,'#458efc','#458efc',0,220,40,80);
//CARRO
desenhar_quadrado2(2,'#458efc','#458efc',25,265,90,35);
//JANELA
desenhar_quadrado2(0,'#47bdfd','#47bdfd',123,154,20,20);
//JANELA
desenhar_quadrado2(0,'#47bdfd','#47bdfd',166,154,20,20);

//LINHAS
desenhar_linha2(0,'#FF6347','#FF6347',114,130,194,130,155,90);


//ARCO
//CARRO
desenhar_arco2(11,'#458efc','#458efc',10,220,26,1,2);
//CARRO
desenhar_arco2(12,'#458efc','#458efc',115,300,30,1,2);
//ÁRVORE
desenhar_arco2(0,'#318a26','#318a26',52,160,26,0,2);
//ÁRVORE
desenhar_arco2(0,'#318a26','#318a26',260,198,26,0,2);
//SOL
desenhar_arco2(0,'Yellow','Yellow',240,60,35,0,2);

