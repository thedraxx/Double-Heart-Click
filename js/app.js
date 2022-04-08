const times = document.querySelector('#times');

let valor = 0;

window.addEventListener('load', () => {
    let imgs = [
        'https://www.tonica.la/__export/1594139330908/sites/debate/img/2020/07/07/master-chief-halo-3.jpg_1902800913.jpg',
        'https://static1-es.millenium.gg/articles/0/45/77/0/@/241942-kirby-article_image_t-1.jpg',
        'https://www.gamerfocus.co/wp-content/uploads/2016/08/metroid_samus_01.jpg',
        'https://as01.epimg.net/meristation/imagenes/2021/12/15/noticias/1639571660_510224_1639571703_noticia_normal.jpg'
    ];


    for (let i = 0; i < 4; i++) {
        div = document.createElement('div');
        div.classList.add('loveMe');
        div.style.background = `url(${imgs[i]}) no-repeat center center/cover`;
        document.body.appendChild(div);
    }
    const valores = document.querySelectorAll('.loveMe');
    agregarEventos(valores);
})

function agregarEventos(valores) {

    valores.forEach(e => {
        e.addEventListener('dblclick', () => {
            times.innerHTML=`${valor}`;
            valor++;
        })
    })
}

