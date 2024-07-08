class Ninja{
    constructor  (name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.force = 3;
    }
    sayName(){
        console.log (`El nombre del ninja es: ${this.name}`)
    }
    showStats(){
        console.log (`name: ${this.name}, force:${this.force}, speed:${this.speed}, health:${this.health}`)
    }
    drinkSake() {
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor (name, health=200){
        super(name, health)    
        this.sabiduria = 10;
        this.speed = 10;
        this.force = 10;
    }
    speakWisdom (){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        super.drinkSake();
    }
}

const Sensei1 = new Sensei ("Sofhia")

Sensei1.speakWisdom();
Sensei1.showStats();
