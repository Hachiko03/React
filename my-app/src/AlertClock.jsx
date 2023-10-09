export function AlertClock() {
    function giveLocalDate() {
        const hour = new Date()
        alert (`La hora actual es ${hour.toLocaleTimeString()}`)
    }
    return (
        <div>
            <button onClick={giveLocalDate}> Click para obtener la hora actual</button>
        </div>
    )
}