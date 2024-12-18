import { Produto } from "./Produto";

// Essa é uma subclasse e só ira herdar da Super classe Produto
export class Medicamento extends Produto {
  private _generico: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    generico: string
  ) {
    super(id, nome, tipo, preco); // Aqui no caso não preciso da generico
    this._generico = generico; // Aqui no caso seria o private generico
  }

  public get generico(): string {
    return this._generico;
  }

  public set generico(value: string) {
    this._generico = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Tipo de Generico: ${this._generico}`);
  }
}
