$(document).ready(function() {
    $('header button').click(function() {  // quando clicar botão
        $('form').slideDown();    // acontece issso o form aparece na tela (slideDown)
    })

    $('#botao-cancelar').click(function() {  // recolher o form
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {  // para quando clicar no botão submit a página não att
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_balnk" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');      
    })
})