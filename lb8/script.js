
class Person {
    constructor(name, age, occupation, nationality) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.nationality = nationality;
    }

  
    displayInfo() {
        return `Ім'я: ${this.name}, Вік: ${this.age}, Рід занять: ${this.occupation}, Національність: ${this.nationality}`;
    }
}


const person1 = new Person("Андрій Боярский", 30, "Біснес Вумен", "Україна");
const person2 = new Person("Анна Смит", 27, "Відеоблогер", "Британка");
const person3 = new Person("Іван Васильченко", 35, "Механік", "Американец");


document.getElementById('box1').textContent = person1.displayInfo();
document.getElementById('box2').textContent = person2.displayInfo();
document.getElementById('box3').textContent = person3.displayInfo();
