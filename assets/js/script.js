function handleSubmit () {
    const name = document.getElementById('name').value;
    const cost = document.getElementById('cost').value;

    localStorage.setItem("Nome", name);
    localStorage.setItem("Custo", cost);

    return;
}