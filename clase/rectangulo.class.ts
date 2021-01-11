export class Rectangulo {
    constructor(public base: number,
                public altura: number) {}

    retornarArea() {
        return this.base * this.altura;
    }
} 