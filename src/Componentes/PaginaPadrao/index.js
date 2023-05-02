import Banner from 'Componentes/Banner'

import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

            {/* Renderizar o conteúdo da rota AQUI.. */}
            <Outlet />
        </main>
    )
}