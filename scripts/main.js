import getCriminals from "./criminals/criminalDataProvider.js"
import CriminalListComponent from "./criminals/criminalList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import ConvictionSelect from "./convictions/convictionsSelect.js"



getConvictions().then(
  () => ConvictionSelect()
)

getCriminals().then(
  () => CriminalListComponent()
)

