export {};

class Me {
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';
  static isProgrammer: boolean = true;

  static work() {
    // return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
