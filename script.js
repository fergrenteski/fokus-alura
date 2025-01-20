const html = document.querySelector('html');

const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');

const title = document.querySelector('.app__title');

const focoTemp = 1500;
const longoTemp = 900;
const curtoTemp = 300;

focoBtn.addEventListener('click', () => {
    switchContext('foco');
});

curtoBtn.addEventListener('click', () => {
    switchContext('descanso-curto');
});

longoBtn.addEventListener('click', () => {
    switchContext('descanso-longo');
});

function switchContext(contexto) {
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