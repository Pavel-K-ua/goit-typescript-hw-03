class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  abstract OpenDoor(key: Key): void;

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class MyHouse extends House {
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door open");
    } else {
      console.log("Invalid key");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());
house.comeIn(person);

export {};
