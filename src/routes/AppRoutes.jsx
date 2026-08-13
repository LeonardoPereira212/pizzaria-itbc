import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route
 
}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"
 
 
const AppRoutes = () =>{
 
 
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
 
          </Routes>
     </HashRouter>
         
    )
}
 
export default AppRoutes