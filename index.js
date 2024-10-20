class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    
    heroAttack() {
 	
    let attack = ""
    if (this.tipo === "Mago") {
      attack = "magia"
    } else if (this.tipo === "Guerreiro") {
      attack = "espada"
    } else if (this.tipo === "Monge") {
      attack = "artes marciais"
    } else if (this.tipo === "Ninja") {
      attack = "shuriken"
    }
  
    console.log(`O ${this.tipo} atacou usando ${attack}`)
  }
  }
  
let heroi = new Heroi("Joanna D'ark", 40, "Guerreiro");
	heroi.heroAttack()
  