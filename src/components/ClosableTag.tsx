import { HStack } from "@chakra-ui/react"
import { Tag } from "@/components/ui/tag"


type ClosableTagProps = {
    selectedSubjects: string[];
    handleClose: (subject: string) => void;
}

export default function ClosableTag({selectedSubjects, handleClose}: ClosableTagProps) {
    return (
        <HStack>
            {selectedSubjects.map((subject, index) => {
                return (
                    <Tag key={index} closable onClose={() => {handleClose(subject)}}>{subject}</Tag>
                )
            })}
        </HStack>
    )
}
