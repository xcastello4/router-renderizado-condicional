import { useState } from 'react';
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home - Renderizado Condicional</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <a href='/about'>Ir a Sobre nosotros</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/915346987234586624/5qruaoso_400x400.jpg' alt='Foto de Xavier'/>
        <p>¡Hola! Me llamo Xavier y estoy creando un renderizado condicional</p>
      </div>
      <a href='/'>Ir a la home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
