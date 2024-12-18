import { Produto } from "../Model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos = new Array<Produto>();

  id: number = 0;

  cadastrarProduto(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("O Produto foi cadastrado com sucesso!");
  }

  listarTodosOsProdutos(): void {
    for (let produto of this.listaProdutos) produto.visualizar();
  }

  consultarProdutoPorId(numero: number): void {
    const buscaProduto = this.buscarNoArray(numero);

    if (buscaProduto !== null) buscaProduto.visualizar();
    else console.log("\nProduto não Encontrado!");
  }
  atualizarProduto(produto: Produto): void {
    const buscaProduto = this.buscarNoArray(produto.id);

    if (buscaProduto !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
    } else {
      console.log("\nO Produto foi atualizada com sucesso!");
    }
  }
  deletarProduto(numero: number): void {
    const buscaProduto = this.buscarNoArray(numero);

    if (buscaProduto !== null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
      console.log("O Produto foi deletado com sucesso!");
    } else {
      console.log("\nProduto não Encontrada!");
    }
  }
  public gerarId(): number {
    return ++this.id;
  }

  public buscarNoArray(numero: number): Produto | null {
    for (let produto of this.listaProdutos) {
      if (produto.id === numero) return produto;
    }

    return null;
  }
}
