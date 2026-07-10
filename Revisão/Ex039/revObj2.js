// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Carlos', 'Pim');
console.log(p1.nomeCompleto); 


function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
} // palavra new cria um objeto vazio {} - this não é uma variavel! -> cria um novo objeto e atrela com o this ao novo objeto!
const p2 = new Pessoa('Luiz', 'Mirandaa')
console.log(p2)