import Programmes from "./components/Programmes"
import Search from "./components/Search"
import { useState } from "react"
import { programmeList } from "./assets/Subjects";


export default function App() {

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [programmes, setProgrammes] = useState<string[]>([]);

  function handleSubmit(e: any) {
    e.preventDefault();
    setProgrammes([]);
    const suggestedProgrammes = [];

    if (selectedSubjects.length >= 3) {
      for (const { name, req, opt } of programmeList) {
        const checkSubjects = req.every((subject: string) => selectedSubjects.includes(subject))
        const checkSubjectsOpt = opt.some((subject: string) => selectedSubjects.includes(subject))
        if (checkSubjects && (checkSubjectsOpt || opt.length === 0)) {
          suggestedProgrammes.push(name);
          setProgrammes(suggestedProgrammes);
        }
      }
    } else {
      alert("Please choose at least 3 subjects")
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center pt-24">
      <Search selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} handleSubmit={handleSubmit} />
      <Programmes programmes={programmes} />
    </div>
  )
}
