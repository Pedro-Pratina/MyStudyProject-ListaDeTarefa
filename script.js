function enviar() {
    let pegarNome = document.getElementById('nome-tarefa')
    let nomeTarefa = pegarNome.value
    
    let pegarData = document.getElementById('data-tarefa')
    let dataTarefa = pegarData.value

    if (nomeTarefa !== '' && dataTarefa !== '') {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerText = `${nomeTarefa} ${dataTarefa}`;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-task-button';
        removeButton.innerHTML = '&times;';
        removeButton.addEventListener('click', () => {
            if (confirm('Tem certeza que quer excluir a tarefa??')) {
            li.remove();}
        });

        const feitoButton = document.createElement('button')
        feitoButton.className = 'pronto-button'
        feitoButton.innerHTML = '&times;'
        feitoButton.addEventListener('click', () => {
            if (confirm('Certeza que a tarefa está pronta?')) {
                li.classList.add('pronto')
                feitoButton.remove()
            }
        })

        // Adicionar o botão de remoção ao elemento li
        li.appendChild(removeButton);
        li.appendChild(feitoButton)

        let listaConstruir = document.querySelector('ul');
        listaConstruir.appendChild(li);

        // Limpar os campos de entrada após adicionar a tarefa
        pegarNome.value = '';
        pegarData.value = '';
    } else {
        alert("Falta Algo");
    }
}