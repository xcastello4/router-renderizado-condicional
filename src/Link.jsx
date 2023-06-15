import {EVENTS} from './consts.js'

export function navigate (href) {
    window.history.pushState({}, '', href)
    // crear evento personalizado para que el navegador nos avise de que ha cambiado la ruta
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {
        const isMainEvent = event.button === 0 // Primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isModifiedEvent && isManageableEvent) {
            event.preventDefault()
            navigate(to) // navegación con SPA
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}
