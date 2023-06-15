import {EVENTS} from './consts.js'

export function navigate (href) {
    window.history.pushState({}, '', href)
    // crear evento personalizado para que el navegador nos avise de que ha cambiado la ruta
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {
        event.preventDefault()
        navigate(to)
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}
