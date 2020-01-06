import {
  useNotes,
  getNotes,
  deleteNote,
  editNote
} from "./NoteDataProvider.js";
import noteComponent from "./Note.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".notesContainer");
const contentTarget = document.querySelector(".noteFormContainer");
const notes = useNotes();

const NoteListComponent = () => {
  eventHub.addEventListener("showNoteButtonClicked", event => {
    getNotes().then(() => {
      const notes = useNotes();
      render(notes);
    });
  });


  // delete
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteButton--")) {
      const [prefix, id] = clickEvent.target.id.split("--");
      deleteNote(id).then(() => {
        const theNewNotes = useNotes()
        render(theNewNotes)
      });
      console.log(useNotes())
    }
  });

  // open the edit form component
  eventHub.addEventListener("editNoteButtonClicked", clickEvent => {
    const notes = useNotes();
    const id = clickEvent.detail.noteId;
    const title = clickEvent.detail.title;
    const detail = clickEvent.detail.details;

    const hiddenId = document.querySelector("#note__id")
    hiddenId.value = id
    console.log(hiddenId.value)
    const editTitle = document.querySelector("#note__Title")
    editTitle.value = title
    const editDetail = document.querySelector("#note__Details")
    editDetail.value = detail
    
  });
eventHub.addEventListener("noteHasBeenEdited", event => {
        const updatedNotes = useNotes()
        render(updatedNotes)
})
eventHub.addEventListener("noteHasBeenSaved", event => {
        const updatedNotes = useNotes()
        render(updatedNotes)
})


    ;

  const render = notesCollection => {
    console.log(contentElement);
    contentElement.innerHTML = `
      <h2>Notes:</h2>
      <section class="containerOfNotes">
      ${notesCollection
        .map(note => {
          console.log(note);
          return noteComponent(note);
        })
        .join("")}
     </section>`;
  };
};

export default NoteListComponent;
