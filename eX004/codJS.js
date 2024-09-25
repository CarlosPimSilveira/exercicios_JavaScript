var nome = window.prompt('Qual é o seu nome?');
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br>`);
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`);
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`);

var n1 = 1545.5;
document.write(`O valor de n1 é ${n1}<br>`); 

n1 = n1.toFixed(2).replace('.', ',');  //adicionamos casas decimais e ainda trocamos o ponto por virgula
document.write(`O valor de n1 formatado com 2 casas decimais é ${n1}<br>`); 

var n1 = 1545.5;
//dessa forma formata para valor da moeda do brasil podemos mudar o BRL para outras moedas
n1 = n1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
document.write(`O valor de n1 formatado como moeda é ${n1}<br>`);
