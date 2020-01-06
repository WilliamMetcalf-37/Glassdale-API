import { saveNote, editNote, useNotes } from "./NoteDataProvider.js"
import NoteListComponent from "./NoteList.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const NoteFormComponent = () => {
const resetNoteFields = () =>{
    document.querySelector("#note__id").value = ""
    document.querySelector("#note__Title").value = ""
    document.querySelector("#note__Details").value = ""
}
    eventHub.addEventListener("click", clickEvent => {
        const hiddenId = document.querySelector("#note__id").value
        if(hiddenId === ""){

            if (clickEvent.target.id === "saveNote") {
      
                // Make a new object representation of a note
                const newNote = {
                    // Key/value pairs here
                    "date": Date.now(),
                    "title": document.querySelector("#note__Title").value,
                    "details": document.querySelector("#note__Details").value
                }
      
                // Change API state and application state
               saveNote(newNote).then(()=>{
                   eventHub.dispatchEvent(new CustomEvent("noteHasBeenSaved"))
               }).then(resetNoteFields)
    
            }
        }
        // EditNote
        else{
            if (clickEvent.target.id === "saveNote") {
      
                // Make a new object representation of a note
                const newNote = {
                    // Key/value pairs here
                    "date": Date.now(),
                    "title": document.querySelector("#note__Title").value,
                    "details": document.querySelector("#note__Details").value,
                    "id": hiddenId
                }
      
                // Change API state and application state
                editNote(newNote).then(()=> eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited")))
                .then(resetNoteFields)
    
            }

            
        

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
        <div class="NoteFormTitle">Add A Note:</div>
        <div class="addANote" id="addANote">
            <input type="hidden" id="note__id"/>
            <div class="noteTitle">
            <label> Note Title:</label>
            <input type="text" id="note__Title">
            </div>
            <div class="noteDescription">
            <label> Note Description:</label>
            <input type="text" id="note__Details"></input>
            </div>
            <button id="saveNote">Save Note</button>
            <button id="showNotes">Show Notes</button>
        </div>
        <div class="witnessButton">
            <button class="button--Witness">Witness Statements</button>
        </div>
        `
    }

    render()

}
export default NoteFormComponent