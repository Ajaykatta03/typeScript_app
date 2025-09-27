// ...existing code...
export class HomeInterface {
  id: number;
  name: string;
  image: string;

  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Image: ${this.image}`;
  }
}