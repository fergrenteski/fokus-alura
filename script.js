const html = document.querySelector('html');

const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');

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
}