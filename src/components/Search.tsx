import { Field } from "@/components/ui/field"
import { Input } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { subjects } from "@/assets/Subjects"
import SubjectList from "./SubjectList"
import ClosableTag from "./ClosableTag"

export default function Search() {

    const [formInput, setFormInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])


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
        }
    }

    function handleClose(subject: string){
        const newSelectedSubjects = selectedSubjects.filter((e) => {
            return e !== subject;
        })
        setSelectedSubjects(newSelectedSubjects);
    }

    function handleSubmit(e: any) {
        e.preventDefault();
    }

    return (
        <div className="w-2/5">
            <form onSubmit={handleSubmit}>
                <Field label="">
                    <Input placeholder="Enter your electives" onChange={handleInputChange} value={formInput} />
                    <ClosableTag selectedSubjects={selectedSubjects} handleClose={handleClose}/>
                </Field>
                {
                    suggestions.length > 0 && (
                        <SubjectList suggestions={suggestions} handleSuggestionClick={handleSuggestionClick} />
                    )
                }
                <Button size="xl" type="submit">Find Courses</Button>
            </form>
        </div>
    )
}
