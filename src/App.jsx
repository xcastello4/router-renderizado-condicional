import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear evento personalizado para que el navegador nos avise de que ha cambiado la ruta
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home - Renderizado Condicional</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
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
      <button onClick={() => navigate('/')}>Ir a la home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.addEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
