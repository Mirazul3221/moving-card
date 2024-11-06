const card = document.querySelector('.crd');
console.log(card)
let mousePoint = {
    x : null,
    y : null
}

let note = {
    dom : null,
    x : null,
    y : null,
}
document.addEventListener('mousedown',(e)=>{
    if (e.target.classList.contains('crd')) {
        console.log(true)
        mousePoint = {
            x:e.clientX,y:e.clientY
        }

        note = {
            dom : e.target,
            x : e.target.getBoundingClientRect().left,
            y : e.target.getBoundingClientRect().top
        }
 
    }
  })
  document.addEventListener('mousemove',(e)=>{
    console.log(note)
    if (note.dom == null) return

    let currentCursor = {
        x:e.clientX,
        y:e.clientY  
    }

    let distance = {
        x : currentCursor.x - mousePoint.x,
        y : currentCursor.y - mousePoint.y

    }
    note.dom.style.left = (note.x + distance.x) + "px"
    note.dom.style.top = (note.y + distance.y) + "px"
    note.dom.style.cursor = 'grab'
  })

  window.addEventListener('mouseup',()=>{
     if (note.dom == null) return;
     note.dom.style.cursor = 'auto';
     note.dom = null
  })