let notes = []

export const saveNote = note => {
  return fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}



  // rest of the code here

  export const getNotes = () =>{
    return   fetch("http://localhost:3000/notes") 
  .then(res =>res.json())
  .then(parsedNotes => {
    
    notes = parsedNotes.slice()
  })}

export const deleteNote = noteId => {
  return fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE"
  })
      .then(getNotes)
}

export const editNote = note =>{
  return fetch(`http://localhost:3000/notes/${note.id}`, {
  method: "PUT",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(note)
}).then(getNotes)

}


  export const useNotes = () =>{
    return notes
  }