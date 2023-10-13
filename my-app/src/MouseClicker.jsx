
export default function MouseClicker() {
    function printNameOfEventTarget(event) {
        console.log(event.currentTarget.name)
    }
  return (
      <div>
          <button name='one' onClick={printNameOfEventTarget}>Handle Event 1 <img src=".\src\images\icons8-animal-25.png"/></button>
    </div>
  )
}
