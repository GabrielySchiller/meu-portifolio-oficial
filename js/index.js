const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
   
    mostrarMaisProjetos();

    
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}



let botaoCopiar = document.querySelector('#copiar');
botaoCopiar.addEventListener('click', copiarGmail);

async function copiarGmail() {
    try {
        let gmail = document.querySelector('.gmail').textContent;
        
        // Usa a API Clipboard para copiar o texto
        await navigator.clipboard.writeText(gmail);
        alert('Gmail copiado com sucesso!');
    } catch (err) {
        console.error('Erro ao copiar o Gmail: ', err);
        alert('Falha ao copiar o Gmail.');
    }
}







