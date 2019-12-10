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
  }
    
    
  
  )
  }

  export const useNotes = () =>{
    return notes
  }