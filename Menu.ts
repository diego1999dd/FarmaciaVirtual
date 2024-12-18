import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Medicamento } from "./src/Model/Medicamento";
import { Cosmetico } from "./src/Model/Cosmetico";

export function main() {
  let id, tipo, preco, opcao: number;
  let nome, generico, fragancia: string;

  const tipoProdutos = ["💊 Medicamento", "💄Cosmetico"];

  const produtos = new ProdutoController();

  //Novas Instâncias da Classe Medicamentos
  produtos.cadastrarProduto(
    new Medicamento(produtos.gerarId(), "Paracetamol", 1, 24.9, "Analgesico 💊")
  );
  produtos.cadastrarProduto(
    new Medicamento(produtos.gerarId(), "Dipirona", 1, 26.9, "Analgesico 💊")
  );
  produtos.cadastrarProduto(
    new Medicamento(
      produtos.gerarId(),
      "Buscopan",
      1,
      21.0,
      "Antiflamatorio 💊"
    )
  );

  // Novas Instâncias da Classe Cosmeticos
  produtos.cadastrarProduto(
    new Cosmetico(
      produtos.gerarId(),
      "Hidratante facial",
      2,
      31.0,
      "Produto de cuidado com a pele 💧"
    )
  );
  produtos.cadastrarProduto(
    new Cosmetico(
      produtos.gerarId(),
      "Batom",
      2,
      50.0,
      "Produto de maquiagem 💄"
    )
  );

  while (true) {
    menu();

    opcao = readlinesync.questionInt("Digite a opcao desejada:");
    if (opcao === 0) {
      about();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCadastrar produto 📝\n\n");

        console.log("Digite o ID do Produto: ");
        id = readlinesync.questionInt("");

        console.log("Digite o Nome do Produto: ");
        nome = readlinesync.question("");

        console.log("Escolha o Tipo do Produto: ");
        tipo =
          readlinesync.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

        console.log("Digite o Preco do Produto: ");
        preco = readlinesync.questionInt("");

        switch (tipo) {
          case 1:
            console.log("Digite o Tipo de Medicamento: 💊");
            generico = readlinesync.question("");
            produtos.cadastrarProduto(
              new Medicamento(produtos.gerarId(), nome, tipo, preco, generico)
            );
            break;
          case 2:
            console.log("Digite o Tipo de Cosmetico: 💄");
            fragancia = readlinesync.question("");
            produtos.cadastrarProduto(
              new Cosmetico(produtos.gerarId(), nome, tipo, preco, fragancia)
            );
            break;
        }
        keyPress();
        break;
      case 2:
        console.log("\n\nListar todos os Produtos\n\n");
        produtos.listarTodosOsProdutos();
        keyPress();
        break;
      case 3:
        console.log("\n\nConsultar Produtos por Id\n\n");
        console.log("Digite o ID do Produto:");
        id = readlinesync.questionInt("");

        produtos.consultarProdutoPorId(id);

        keyPress();
        break;
      case 4:
        console.log("\n\n✏️ Atualizar Produto\n\n");
        id = readlinesync.questionInt(
          "Digite o ID do Produto a ser atualizado: "
        );
        let produto = produtos.buscarNoArray(id);

        if (produto !== null) {
          nome = readlinesync.question("Digite o novo Nome do Produto: ");
          preco = readlinesync.questionFloat(
            "Digite o novo Preco do Produto: "
          );

          tipo = produto.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite o novo Medicamento: 💊");
              generico = readlinesync.question("");
              produtos.atualizarProduto(
                new Medicamento(id, nome, produto.tipo, preco, generico)
              );
              break;
            case 2:
              console.log("Digite o novo Cosmetico: 💄");
              fragancia = readlinesync.question("");
              produtos.atualizarProduto(
                new Cosmetico(id, nome, produto.tipo, preco, fragancia)
              );
              break;
          }
          console.log("✅ Produto atualizado com sucesso!");
        } else {
          console.log("❌ Produto não encontrado!");
        }
        keyPress();
        break;
      case 5:
        console.log("\n\n🗑️ Deletar Produto\n\n");
        console.log("Digite o id do Produto:");
        id = readlinesync.questionInt("");

        produtos.deletarProduto(id);
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");
        keyPress();
        break;
    }
  }
}

function menu(): void {
  console.log(colors.fg.white);
  console.log("##########################################################");
  console.log("               💊  FARMACIA DO DIDI + DISCUNTU  💄       ");
  console.log("##########################################################");
  console.log("                 1 - 📝 Cadastrar produto                 ");
  console.log("                 2 - 📋 Listar todos os Produtos          ");
  console.log("                 3 - 🔎 Consultar Produtos por Id         ");
  console.log("                 4 - ✏️  Atualizar Produto                 ");
  console.log("                 5 - 🗑️  Deletar Produto                   ");
  console.log("                 0 - 🚪 Sair                              ");
  console.log("##########################################################");
  console.log(colors.reset);
}

function about() {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Diego. 🚀");
  console.log("Generation Brasil - diegon@genstudents.org");
  console.log("github.com/diego1999dd");
  console.log("\n*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}
main();
