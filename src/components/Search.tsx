import { Field } from "@/components/ui/field"
import { Input } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { subjects } from "@/assets/Subjects"
import SubjectList from "./SubjectList"
import ClosableTag from "./ClosableTag"

type SearchProps = {
    selectedSubjects: string[];
    setSelectedSubjects: (subject: string[]) => void;
    handleSubmit: (event: any) => void;
}

export default function Search({ selectedSubjects, setSelectedSubjects, handleSubmit }: SearchProps) {

    const [formInput, setFormInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([])


    function handleInputChange(e: any) {
        const input = e.target.value;
        setFormInput(input);

        if (input) {
            const filteredSuggestions = subjects.filter((subject) => {
                return subject.includes(input);
            })
            setSuggestions(filteredSuggestions);
            // console.log(suggestions);
        } else {
            setSuggestions([]);
        }
    }

    function handleSuggestionClick(suggestion: any) {
        if(selectedSubjects.length < 4){
            setSelectedSubjects([...selectedSubjects, suggestion]);
            setFormInput("");   
            setSuggestions([]);
        } else {
            alert("You can only choose 4 subjects")
            setFormInput("");
            setSuggestions([]);
        }
    }

    function handleClose(subject: string){
        const newSelectedSubjects = selectedSubjects.filter((e) => {
            return e !== subject;
        })
        setSelectedSubjects(newSelectedSubjects);
    }

    return (
        <div className="w-2/5">
            <form onSubmit={handleSubmit}>
                <Field label="">
                    <Input placeholder="Enter your electives" onChange={handleInputChange} value={formInput} className="outline-none border-2 py-5 px-2"/>
                    <ClosableTag selectedSubjects={selectedSubjects} handleClose={handleClose}/>
                </Field>
                {
                    suggestions.length > 0 && (
                        <SubjectList suggestions={suggestions} handleSuggestionClick={handleSuggestionClick} />
                    )
                }
                <Button size="xl" type="submit" className="bg-blue-800 p-5 text-white font-bold mt-10 hover:bg-yellow-500">Find Courses</Button>
            </form>
        </div>
    )
}
