import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio' 
import SobreMim from './Paginas/SobreMim' 
import Menu from './Componentes/Menu';
import Rodape from './Componentes/Rodape';
import PaginaPadrao from 'Componentes/PaginaPadrao';
import Post from 'Paginas/Post';
import NaoEncontrada from 'Paginas/NaoEncontrada';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>

        <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='sobremim' element={<SobreMim />} />
        </Route> 
            
            <Route path='posts/:id/*' element={<Post />} />
{/* 
O que está acontecendo no <Route></Route> acima, é mais ou menosisso:

--> Na rota '/', a estrutura a ser renderizada é:
    <PaginaPadrao>
      <Inicio />
    <PaginaPadrao>

--> Já na rota '/sobremim', a estrutura a ser renderizada é:        
    <PaginaPadrao>
      <SobreMim />
    <PaginaPadrao>
*/}

        <Route path='*' element={<NaoEncontrada />} />
      </Routes>  

      <Rodape />  
    </BrowserRouter>
  )
}

export default AppRoutes;
