const opsi = document.querySelectorAll('section.opsi img');
const imgPlayer = document.querySelector('section.player img');
const imgComputer = document.querySelector('section.computer img');

opsi[0].addEventListener('click', function(){
    opsi[0].classList.add('btn-opsi');
    opsi[1].classList.remove('btn-opsi');
    opsi[2].classList.remove('btn-opsi');
    putar();
    setTimeout(function(){
        imgPlayer.setAttribute('src', 'img/jempol.png');
        hasil(permainan('GAJAH', com()));
    }, 1500);
});
opsi[1].addEventListener('click', function(){
    opsi[0].classList.remove('btn-opsi');
    opsi[1].classList.add('btn-opsi');
    opsi[2].classList.remove('btn-opsi');
    putar();
    setTimeout(function(){
        imgPlayer.setAttribute('src', 'img/telunjuk.png');
        hasil(permainan('ORANG', com()));
    }, 1500);
});
opsi[2].addEventListener('click', function(){
    opsi[0].classList.remove('btn-opsi');
    opsi[1].classList.remove('btn-opsi');
    opsi[2].classList.add('btn-opsi');
    putar();
    setTimeout(function(){
        imgPlayer.setAttribute('src', 'img/kelingking.png');
        hasil(permainan('SEMUT', com()));
    }, 1500);
});

function putar(){
    const gambar = ['jempol', 'telunjuk', 'kelingking'];
    const mulai = new Date().getTime();
    let i = 0;
    setInterval( function(){
        if(new Date().getTime() - mulai > 1500){
            clearInterval;
            return;
        }
        imgPlayer.style.backgroundColor = 'gold';
        imgComputer.style.backgroundColor = 'gold';
        imgPlayer.setAttribute('src', 'img/' + gambar[i] + '.png');
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
    }, 100)
}
function com(){
    var acak = Math.floor(Math.random() * 3)
    switch(acak){
        case 0:
            computer = "ORANG";
            imgComputer.setAttribute('src', 'img/telunjuk.png');
            break;
        case 1:
            computer = "SEMUT";
            imgComputer.setAttribute('src', 'img/kelingking.png');
            break;
        case 2:
            computer = "GAJAH";
            imgComputer.setAttribute('src', 'img/jempol.png');
            break;
    }
    return computer;
}
function permainan(player, computer){
    if(player == computer) return 'SERI';
    if(player == 'ORANG') return (computer == 'SEMUT') ? 'MENANG' : 'KALAH';
    if(player == 'SEMUT') return (computer == 'GAJAH') ? 'MENANG' : 'KALAH';
    if(player == 'GAJAH') return (computer == 'ORANG') ? 'MENANG' : 'KALAH';
}
function hasil(hasil){
    if(hasil == 'MENANG'){
        imgPlayer.style.backgroundColor = 'greenyellow';
        imgComputer.style.backgroundColor = 'rgb(255, 29, 29)';
    }else if(hasil == 'KALAH'){
        imgPlayer.style.backgroundColor = 'rgb(255, 29, 29)';
        imgComputer.style.backgroundColor = 'greenyellow';
    }else{
        imgPlayer.style.backgroundColor = 'grey';
        imgComputer.style.backgroundColor = 'grey';
    }
}
