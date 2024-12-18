import { Produto } from "../Model/Produto";

export interface ProdutoRepository {
  cadastrarProduto(produto: Produto): void;
  listarTodosOsProdutos(): void;
  consultarProdutoPorId(numero: number): void;
  atualizarProduto(produto: Produto): void;
  deletarProduto(numero: number): void;
}
