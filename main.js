console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
// Deixando bonito agora
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// Criado por IA)
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Este parágrafo foi criado com JavaScript usando criatividade!';
paragrafo.style.fontStyle = 'italic';
paragrafo.style.color = 'green';
elementoBody.appendChild(paragrafo);
