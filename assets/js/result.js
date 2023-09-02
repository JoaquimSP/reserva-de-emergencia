window.addEventListener('load', () => {
    const name = localStorage.getItem('Nome');
    const cost = localStorage.getItem('Custo');
    /* const cost = parseFloat(localStorage.getItem('Valor')); */

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-value').innerHTML = cost;
})