const noteComponent = (note) =>{
  return `
  <section class="note__card">
<div class="criminalName">${new Date(note.date).toLocaleDateString('en-US')}</div>
<div id="${note.id}--title">${note.title}</div>
<div id="${note.id}--details">${note.details}</div>
<button id="deleteButton--${note.id}">Delete note</button>
<button id="editButton--${note.id}">Edit note</button>

</section>
`
}

export default noteComponent