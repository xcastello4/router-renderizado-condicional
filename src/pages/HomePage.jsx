import { Link } from '../Link'

export function HomePage() {
    return (
        <>
            <h1>Home - Renderizado Condicional</h1>
            <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
            <Link to='/about'>Ir a Sobre nosotros</Link>
        </>
    )
}