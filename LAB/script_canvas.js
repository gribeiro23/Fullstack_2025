let Canvas = document.getElementById('Canvas');
let ctx = Canvas.getContext('2d');

function desenhar_quadrado(largura,color1,color2,x,y,tam1,tam2){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = color1;
    ctx.strokeStyle = color2;
    ctx.fillRect(x,y,tam1,tam2);
    ctx.strokeRect(x,y,tam1,tam2);
    ctx.closePath();
}

function desenhar_linha(largura,color1,color2,x1,y1,x2,y2){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = color1;
    ctx.strokeStyle = color2;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();

}

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

function escrever(largura,color1,color2,font,texto1,x1,y1,texto2,x2,y2){
    ctx.beginPath();
    ctx.lineWidth = largura;
    ctx.fillStyle = color1;
    ctx.strokeStyle = color2;
    ctx.font = font
    ctx.textAlign = "center";
    ctx.strokeText(texto1,x1,y1)
    ctx.fillText(texto2,x2,y2);
    ctx.closePath();

}

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
desenhar_arco(1,'transparent','green',150,149,80,1,2);
desenhar_arco(1,'cyan','blue',150,115,15,0,2);
desenhar_arco(1,'yellow','green',65,220,15,0,2);
desenhar_arco(1,'yellow','green',235,220,15,0,2);

//TEXTO
escrever(5,'black','black','30px Arial','Canvas',)



