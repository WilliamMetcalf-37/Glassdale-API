import { useNotes, editNote, getNotes } from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");

export const editNoteFunction = () => {

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editButton--")) {
      const [prefix, id] = clickEvent.target.id.split("--");
      const notes = useNotes();

      const foundNote = notes.find(note =>{
        return note.id === parseInt( id ,10)
      })
      
      console.log(foundNote)
      const title = foundNote.title;
      const detail = foundNote.details;

      //   const foundCriminal = criminals.find(
      //     (singleCriminal) => {
      //         return singleCriminal.id === parseInt(event.detail.criminalId, 10)
      //     }
      // )

      const message = new CustomEvent("editNoteButtonClicked", {
        detail: {
          noteId: id,
          title: title,
          details: detail
        }
      });
      eventHub.dispatchEvent(message);
    }
  });
};

// open the edit form component
// eventHub.addEventListener("click", clickEvent => {
//   if (clickEvent.target.id.startsWith("editButton--")) {
//     const [prefix, id] = clickEvent.target.id.split("--")
// editNote(id).then(buildEditForm)

// const buildEditForm = () =>{
//   const titleFunction = (id)=>{
//       return document.getElementById(`${id}--title`).value
//     }
//     console.log(titleFunction(id))
//     const title = clickEvent.target.id.find(titleFunction())

//     console.log(title)
// }
