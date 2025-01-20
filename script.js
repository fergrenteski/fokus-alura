const html = document.querySelector('html');

// Botões
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const btns = document.querySelectorAll('.app__card-button');

// Banner
const banner = document.querySelector('.app__image');

// Título
const title = document.querySelector('.app__title');

// Temporizadores
const focoTemp = 1500;
const longoTemp = 900;
const curtoTemp = 300;

// Evento do Botão de Foco
focoBtn.addEventListener('click', () => {
    switchContext('foco');
    focoBtn.classList.add('active');
});

// Evento do Botão de Curto
curtoBtn.addEventListener('click', () => {
    switchContext('descanso-curto');
    curtoBtn.classList.add('active');
});

// Evento do Botão de Longo
longoBtn.addEventListener('click', () => {
    switchContext('descanso-longo');
    longoBtn.classList.add('active');
});

/**
 * Define o contexto através do nome.
 * @param {String} contexto Nome.
 */
function switchContext(contexto) {
    btns.forEach(function(btn) {
        btn.classList.remove('active');
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case 'foco':
            title.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            title.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case 'descanso-longo':
            title.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa!</strong>`
            break;
        default:
            break;
    }
}