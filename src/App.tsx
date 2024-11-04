import Programmes from "./components/Programmes"
import Search from "./components/Search"
import { useState } from "react"
import { programmeList } from "./assets/Subjects";


export default function App() {

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [programmes, setProgrammes] = useState<string[]>([]);

  function handleSubmit(e: any){
    e.preventDefault();
    const suggestedProgrammes = []
    for (const { name, req } of programmeList){
      const checkSubjects = req.every((subject: string) => selectedSubjects.includes(subject))
      if (checkSubjects){
        suggestedProgrammes.push(name)
        setProgrammes(suggestedProgrammes);
      }
    }
  }

  return (
    <div className="w-full flex justify-center items-center pt-24">
      <Search selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} handleSubmit={handleSubmit}/>
      <Programmes programmes={programmes} />
    </div>
  )
}
