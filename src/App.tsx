import Programmes from "./components/Programmes"
import Search from "./components/Search"
import { useState } from "react"
import { programmeList } from "./assets/Subjects";
import { Alert } from "@/components/ui/alert"

//Bugs to solve
//=============================================
//Prevent "choose at least 3 electives" alert from firing when closing tags
//keep search box highlighted after choosing an elective

export default function App() {

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [programmes, setProgrammes] = useState<string[]>([]);
  const [alertMessage, setAlertMessage] = useState<string>("");

  function handleSubmit(e: any) {
    e.preventDefault();
    setProgrammes([]);
    setAlertMessage("");


    if (selectedSubjects.length >= 3) {
      const suggestedProgrammes: string[] = [];
      for (const { name, req, opt } of programmeList) {
        const checkSubjects = req.every((subject: string) => selectedSubjects.includes(subject))
        const checkSubjectsOpt = opt.some((subject: string) => selectedSubjects.includes(subject))
        if (checkSubjects && (checkSubjectsOpt || opt.length === 0)) {
          suggestedProgrammes.push(name);
        }
      }
      setProgrammes(suggestedProgrammes);
    } else {
      setAlertMessage("Please choose at least 3 subjects")
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center pt-16">
      <Search selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} handleSubmit={handleSubmit} setAlertMessage={setAlertMessage}/>
      <div className="h-24 w-full flex items-center">
        {alertMessage && (
          <Alert status="info" title={alertMessage} colorPalette="red" className="w-2/5 mx-auto"/>
        )}
      </div>
      <Programmes programmes={programmes} />
    </div>
  )
}
