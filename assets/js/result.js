window.addEventListener('load', () => {
    const name = localStorage.getItem('Nome');
    const cost = localStorage.getItem('Custo');
    /* const cost = parseFloat(localStorage.getItem('Valor')); */

    const cost1 = cost * 3;
    const cost2 = cost * 6;
    const cost3 = cost * 12;

    document.getElementById('result-name').innerHTML = name;

    /* document.getElementById('result-value').innerHTML = cost; */
    document.getElementById('result-value1').innerHTML = cost1;
    document.getElementById('result-value2').innerHTML = cost2;
    document.getElementById('result-value3').innerHTML = cost3;
})