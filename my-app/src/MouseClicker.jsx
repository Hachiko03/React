
export default function MouseClicker() {
    function printNameOfEventTarget(event) {
        console.log(event.currentTarget.name)
  }
  function printSrcOfImg(event) {
    console.log(event.target.src)
  }

  return (
      <div>
          <button name='one' onClick={printNameOfEventTarget}>Handle Event 1 <img src=".\src\images\icons8-animal-25.png" onClick={printSrcOfImg}/></button>
    </div>
  )
}
/* Si, sigue imprimiendose en la consola el atributo name del botón. Se debe al bulling, que hace que 
el evento se propague hacia arriba, hasta su padre, en este caso el botón, ya que ambos tienen el 
evento onClick */