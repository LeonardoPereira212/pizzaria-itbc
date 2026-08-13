import React, {useState, useEffect} from "react"
 
import { Link } from "react-router-dom"
 
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import api from "../../services/api"
 
 
const ListarProduto = () => {
 
// useState: é um hook do React que serve para armazenar e controlar o estado de um componente (variáveis)
//          ele permite que você delcare variáveis que lembrar valores entres renderizações do componente
 
// Composição const [nome da variável, função para alterar o valor da variável] = (valor inicial da variável)
// Exemplo: Quero declarar uma variável numero cujo valor inicie com 0
// const [numero, setNumero] = useState(0)
// Para nosso aplicativo, preciso de uma array de produtos iniciando com um array vazio
// Por Quê ??? O objetivo é que esse array seja preenchido com os produtos que vem da API - BACK - END
//                      no momento em que a página for "carregada"
 
 
const [produtos, setProdutos] = useState([])
 
// useEffect: é um hook do React que serve para executar cógios que ficam fora do controle direto da renderização
// visual, os chamaodos "efeitos colaterais"
// Exemplo: buscar dados de uma API, configurar cronômetros, fazer algo quando o usuário aperta uma tecla,
//          aplicar o Modo Escuro na página
 
// Em nossa página, vamos utilizar para acessar a API-BACK END e carregar nossa tabela de protudos toda vez
// que a página for carregada.
 
// useEffect( função que será executada, [quando esse valor for alterado a função é chamada novamente])
// Obs: [] manter vazio, quando você quiser que o seu cógico rode exatamente uma única vez, logo após o componente
// aparecer na tela pela primeira vez
// Resumindo [] : Execute isso quando a página carregar e depois "ignore", não importa o que mude na tela!
 
 
useEffect(()=>{
 
  api
    .get("/produtos")
    .then((response)=>{
      // deu certo ;)
      console.log(response.data.data)
      setProdutos(response.data.data)
    })
    .catch((error)=>{
      // deu ruim :(
      console.error("Erro ao buscar a lista de produtos. ", error)
    })
 
},[])
 
const arrayProdutos = [
 
{
    id: 1,
    nome: "Pizza de Calabresa",
    precoVenda: 59.90,
    descricao: "Pizza de calabresa com bastante cebola"
},
{
    id: 2,
    nome: "Pizza de Mussarela",
    precoVenda: 69.90,
    descricao: "Pizza de mussarela com tomates frescos"
},
{
    id: 3,
    nome: "Pizza Portuguesa",
    precoVenda: 63.80,
    descricao: "Pizza de Portuguesa da melhor qualidade"
}
 
 
]
 
 
 
 
    return (
 
        <div className="container">
            <MenuFuncionario/>
 
            <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-success">
  <tr>
    <th>ID</th>
    <th>Nome</th>
    <th>Preço</th>
    <th>Ações</th>
  </tr>
</thead>
 
    <tbody>
 
    { arrayProdutos.map((produto) => (
 
        <tr>
        <td style={{ fontSize: "13px" }}> {produto.nome}</td>
 
        <td style={{ fontSize: "13px" }}></td>
        {
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(produto.precoVenda)
        }
 
        <td style={{ fontSize: "13px" }}> {produto.descricao}</td>
 
        <td className="text-center" style={{ width: "100px" }}>
          {/* Botão Editar */}
          <button className="btn btn-sm btn-primary me-2">
            <i className="fas fa-pencil-alt"></i>
          </button>
 
          {/* Botão Excluir */}
          <button className="btn btn-sm btn-danger">
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
 
 
     ))}
 
 
     
    </tbody>
  </table>
</div>
 
     <div className="text-end mt-3">
     <Link
      to="/produtos/novo"
      className={`btn btn-sucess`}
      >
        <i className="fas fa-plus">
          Novo Produto
        </i>
         
      </Link>
 
     </div>
 
        </div>
    )
}
 
export default ListarProduto