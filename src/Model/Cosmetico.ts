import { Produto } from "./Produto";

// Essa é uma subclasse e só ira herdar da Super classe Produto
export class Cosmetico extends Produto {
  private _fragancia: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    fragancia: string
  ) {
    super(id, nome, tipo, preco);
    this._fragancia = fragancia;
  }

  public get fragancia(): string {
    return this._fragancia;
  }

  public set fragancia(value: string) {
    this._fragancia = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Tipo de Cosmetico: ${this._fragancia}`);
  }
}
