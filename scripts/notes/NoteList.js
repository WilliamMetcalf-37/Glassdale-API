import { useNotes, getNotes } from "./NoteDataProvider.js"
import noteComponent from "./Note.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".notesContainer")




const NoteListComponent=()=>{
eventHub.addEventListener("showNoteButtonClicked", event=>{
  getNotes().then(
    ()=> {
      const notes = useNotes()
      render(notes)
    }
  )
  
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