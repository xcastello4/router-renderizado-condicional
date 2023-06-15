import { Link } from '../Link'

export function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src='https://pbs.twimg.com/profile_images/915346987234586624/5qruaoso_400x400.jpg' alt='Foto de Xavier'/>
          <p>¡Hola! Me llamo Xavier y estoy creando un renderizado condicional</p>
        </div>
        <Link to='/'>Ir a la home</Link>
      </>
    )
}