var iframes = document.getElementsByTagName('iframe');

for (var i = 0; i < iframes.length; i++) {
    // Faça algo para verificar se este é o iframe desejado
    // Por exemplo, você pode verificar o conteúdo do iframe ou outros atributos
    var conteudoIframe = iframes[i].contentDocument || iframes[i].contentWindow.document;
    
    // Exemplo: Verificar se o iframe contém um elemento com ID específico
    var elementoDesejado = conteudoIframe.getElementById('timesheet-container-table');
    
    if (elementoDesejado) {
        // Este é o iframe desejado
        console.log('Encontrou o iframe desejado!');
        break;
    }
}
