const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = documente.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('date-proximo');
        atual.classlist.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})