class Forma{
    constructor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura){
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.strokeStyle = this.cor_linha;
        contexto.fillRect(this.x,this.y,this.largura,this.altura);
        contexto.strokeRect(this.x,this.y,this.largura,this.altura);
        contexto.closePath();
    }
}


let canvas1 = document.getElementById('Canvas');
let ctx1 = canvas1.getContext('2d');

let Quadrado1 = new Forma('black','black',3,200,200,20,20);

function animacao(){
    ctx1.clearRect(0,0,400,400);

    Quadrado1.desenhe(ctx1);
    requestAnimationFrame(animacao);
}

animacao()

document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    let x = x_mouse - Quadrado1.largura / 2;
    let y = y_mouse - Quadrado1.altura / 2;
    
    x = Math.max(0, Math.min(x, canvas1.width - Quadrado1.largura));
    y = Math.max(0, Math.min(y, canvas1.height - Quadrado1.altura));

    Quadrado1.x = x;
    Quadrado1.y = y;

})