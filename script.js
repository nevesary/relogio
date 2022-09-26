// Criando um relógio virtual

function relogio() {
    var msg = window.document.querySelector(`#msg`)
    var img = window.document.querySelector(`#imagem`)
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    
    if(hora < 10){
        hora ="0"+ hora;
    }
    if(min < 10){
        min="0"+ min;
    }
    if(seg < 10){
        seg="0"+ seg;
    }
    
    if (hora >= 0 && hora < 12) {  
        createDay("manha", "rgb(241, 186, 67)", msg, hora,min,seg, "Bom Dia,")
    } else if (hora >= 12 && hora <= 18) { 
        createDay("tarde", "rgba(100, 100, 255, 0.733)", msg, hora,min,seg, "Boa tarde,")
    } else { 
        createDay("noite", "rgb(4, 1, 39)", msg, hora,min,seg, "Boa noite,")
    }
}   

function createDay(imgName, color, msg, hora,min,seg, text) {
    var img = window.document.querySelector(`#imagem`);
    img.src = `./img/${imgName}.jpg`;
    document.body.style.background = color

    var horas = hora + ":" + min + ":" + seg;
    msg.innerHTML = `${text} agora são exatamente <strong>${horas}</strong>`
}

var timer = setInterval(()=> {
    relogio()
},1000);



