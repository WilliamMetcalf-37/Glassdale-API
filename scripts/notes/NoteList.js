import { useNotes, getNotes, deleteNote, editNote } from "./NoteDataProvider.js"
import noteComponent from "./Note.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".notesContainer")
const notes = useNotes()


const NoteListComponent=()=>{
eventHub.addEventListener("showNoteButtonClicked", event=>{
  getNotes().then(()=> {const notes = useNotes()
      render(notes)
    }
  )
})
// delete
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteButton--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
       deleteNote(id).then( () => render(useNotes()) )
    }
})
// open the edit form component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("editButton--")) {
    const [prefix, id] = clickEvent.target.id.split("--")
    const title = document.querySelector(`#${id}--title`)
    console.log(title)
    const details = document.querySelector(`#${id}--details`)
    editNote(id)
    
      contentElement.innerHTML =`
      <h2> Edit Note:</h2>
      <label>Note title</label>
      <input id ="note__Title" type="text" value="${title}" />
      <label>Note Detail</label>
      <input id="note__Details" type="text" />
      <button id="button--save">Save</button>
      `
  }
})

   const render = notesCollection => {
   
    console.log(contentElement)
      contentElement.innerHTML = `
      <h2>Notes:</h2>
      <section class="containerOfNotes">
      ${
        notesCollection.map((note) => {
          console.log(note)
          return noteComponent(note)
        }).join("")
        
          }
     </section>`;
    }
  
  
}
   
export default NoteListComponent