import { saveNote } from "./NoteDataProvider.js"
import NoteListComponent from "./NoteList.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const NoteFormComponent = () => {

    eventHub.addEventListener("click", clickEvent => {

        if (clickEvent.target.id === "saveNote") {
  
            // Make a new object representation of a note
            const newNote = {
                // Key/value pairs here
                "date": Date.now(),
                "title": document.querySelector("#note__Title").value,
                "details": document.querySelector("#note__Details").value
            }
  
            // Change API state and application state
            saveNote(newNote).then(NoteListComponent)

        }
    })

    
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "showNotes"){
            const message = new CustomEvent("showNoteButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })



    const render = () => {
        contentTarget.innerHTML = `
        <h2>Add A Note:</h2>
        <div class="addANote">
            <label> Note Title</label>
            <input type="text" id="note__Title">
            <label> Note Description</label>
            <input type="text" id="note__Details"></input>
            <button id="saveNote">Save Note</button>
            <button id="showNotes">Show Notes</button>
        </div>
        `
    }

    render()
}

export default NoteFormComponent