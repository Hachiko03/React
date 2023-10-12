import React, { useEffect } from 'react'

export default function MouseClicker() {
    function printNameOfEventTarget(event) {
        console.log(event.target.name)
    }
  return (
      <div>
          <button name='one' onClick={printNameOfEventTarget}>Handle Event 1</button>
    </div>
  )
}
