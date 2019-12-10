import getCriminals from "./criminals/criminalDataProvider.js"
import CriminalListComponent from "./criminals/criminalList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import ConvictionSelect from "./convictions/convictionsSelect.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import officerSelect from "./officers/Officer.js"
import NoteFormComponent from "./notes/NoteForm.js"
import { getNotes } from "./notes/NoteDataProvider.js"
import NoteListComponent from "./notes/NoteList.js"
import initializeDetailButtonEvents from "./dialog.js"

getCriminals().then(
  () => CriminalListComponent()
).then(initializeDetailButtonEvents)

getConvictions().then(
  () => ConvictionSelect()
).then()
getOfficers().then(
  () => officerSelect()
)

NoteListComponent()
NoteFormComponent()
