/*
  Single Responsability Principle - A class should have only one responsability
  Open / closed Principle - a class or method should be open to extensions but closed to modification
  Liskov Substitution Principle - objects in a program should be replaceable with instances of their subtypes
  Interface Segregation Principle - it's better to use many specific interfaces than one general
  Dependency Inversion Principle - High level classes or methods shouldn't depend on the low level ones but on the common abstraction.
*/

// SRP
class ToDoList {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  remove(idx) {
    this.items = items.splice(idx, 1)
  }

  toString() {
    return this.items.toString();
  }

  // no other method is needed - the management of any to do list is already provided
}

// OCP
class Coder {
  constructor(fullName, lang, hobby, education, workplace, position) {
    this.fullName = fullName
    this.language = lang
    this.hobby = hobby
    this.education = education
    this.workplace = workplace
    this.position = position
  }
}

class CoderFilter {
  filterByFullName(coders, fullName) {/*...*/}
  // ^ that's bad, because we would have to modify the code in order to filter a database by another parameter
  // for example sex; it's not even included in the class atributes but there might be a day that we'd need to add it
  // instead of modifying the full code, I should be able to automatically extend every dependency with this new member.
}

// instead we may just want to have a function filterByAtribute(array, atributeName, value) {...}

// LSP

class Rectangle {
  constructor(width, height) {
    this.#width = width
    this.#height = height
  }

  get width() {return this.#width;}
  get height() {return this.#height;}

  set width(newWidth) {this.#width = newWidth;}
  set height(newHeight) {this.#height = newHeight;}

  get area() {return this.#width * this.#height;}
  get circumference() {return 2*(this.#width + this.#height);}
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
  // The constructor is not sufficient to have a valid square.
  // E.g. using Rectangle's width setter could create an impossible square of size 3x4
  // Not only it violate our common sense but also the rule set by Square's constructor
  // Thus we need to overwrite the setters:
  set width (newWidth) {
    this.#width = this.#height = newWidth;
  }

  set height (newHeight) {
    this.#width = this.#height = newWidth;
  }
}

// ISP
class CellPhone {
  constructor() {
    if (this.constructor.name === 'CellPhone') {
      throw new Error ('Phone class is abstract') // actually we'll be treating it as an interface.
    }
  }

  call(number) {};
  message(number, text) {};
  // every phone has to be able to connect via call or message with any other phone.
  // However not every phone has to be able to connect to iCloud
  // so a method like connectToICloud musn't be implemented here, nor any other method that would exclude any phone.
}

// DIP
class FileSystem {
  save(data) {/*...*/}
}

class ExternalDataBase {
  save(data) {/*...*/}
}

class LocalPersistance {
  save(data) {/*...*/}
}

class PersistanceManager {
  saveData (dataBase, data) {
    dataBase.save(data);
  }
}

// tutorial based on the dev.to article
