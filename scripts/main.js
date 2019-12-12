import getCriminals from "./criminals/criminalDataProvider.js"
import CriminalListComponent from "./criminals/criminalList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import ConvictionSelect from "./convictions/convictionsSelect.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import officerSelect from "./officers/Officer.js"
import NoteFormComponent from "./notes/NoteForm.js"
import { getNotes } from "./notes/NoteDataProvider.js"
import NoteListComponent from "./notes/NoteList.js"
import { getWitnesses } from "./witnesses/witnessDataProvider.js"
import witnessListComponent from "./witnesses/witnessList.js"

getCriminals()
.then(getConvictions)
.then(CriminalListComponent)
.then(ConvictionSelect)
.then(getOfficers)
.then(officerSelect)
.then(NoteListComponent)
.then(NoteFormComponent)
.then(getWitnesses)
.then(witnessListComponent)
