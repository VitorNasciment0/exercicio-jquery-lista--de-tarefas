$(document).ready(function(){
    $('#botao-nova-tarefa').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('#botao-limpar').click(function(){
        $('#lista-de-textos').empty();
    });

    $('form').on('submit', function(e){
        e.preventDefault();

        const texto = $('#novo-texto').val();

    if (texto.trim() !== '') {
    const textoSpan = $("<span>").text(texto);
    const botaoRemover = $("<span>").text("X").addClass("remover-item");
    const novoItem = $("<li>").append(textoSpan, botaoRemover);

    botaoRemover.click(function(e){
        e.stopPropagation();
        novoItem.remove();
    });

    textoSpan.click(function(){
        $(this).toggleClass("riscado");
    });

    $('#lista-de-textos').append(novoItem);
    $('#novo-texto').val('');
    }
});
});