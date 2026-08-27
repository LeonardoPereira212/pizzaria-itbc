import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route
}
from "react-router-dom"
 
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"
import ListarCategoria from "../pages/ListarCategoria/ListarCategoria"
import NovoProduto from "../pages/NovoProduto/NovoProduto"
import EditarProduto from "../pages/EditarProduto/EditarProduto"
 
// BrowserRouter : utilize para navegação local ou no link "href"
// HashRouter: utilize para navegação local ou online utilizando "Link"
 
const AppRoutes = () => {
 
    return (
        <HashRouter>
            <Routes>
 
                <Route
                    path="/"
                    element={<HomeFuncionario/>}
                />
 
                <Route
                    path="/home"
                    element={<HomeFuncionario/>}
                />
 
                <Route
                    path="/produtos"
                    element={<ListarProduto/>}
                />
 
                <Route
                    path="/categorias"
                    element={<ListarCategoria/>}
                />
 
                <Route
                    path="/produtos/novo"
                    element={<NovoProduto/>}
                />
 
                <Route
                    path="/produtos/novo/id"
                    element={<NovoProduto/>}
                />
 
                <Route
                    path="/produtos/editar/:id"
                    element={<EditarProduto/>}
                />
 
            </Routes>
        </HashRouter>
    )
}
 
export default AppRoutes
 