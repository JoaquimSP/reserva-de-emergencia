window.addEventListener('load', () => {
    const name = localStorage.getItem('Nome');
    const cost = localStorage.getItem('Custo');
    /* const cost = parseFloat(localStorage.getItem('Valor')); */

    const cost1 = cost * 3;
    const cost2 = cost * 6;
    const cost3 = cost * 12;

    const value1 = cost1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const value2 = cost2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const value3 = cost3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('result-name').innerHTML = name;

    /* document.getElementById('result-value').innerHTML = cost; */
    document.getElementById('result-value1').innerHTML = value1;
    document.getElementById('result-value2').innerHTML = value2;
    document.getElementById('result-value3').innerHTML = value3;
})