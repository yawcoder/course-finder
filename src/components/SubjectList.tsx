type SubjectListProps = {
    suggestions: string[];
    handleSuggestionClick: (suggestion: string) => void;
}


export default function SubjectList({suggestions, handleSuggestionClick}: SubjectListProps) {
    return (
        <ul className="max-h-48 overflow-scroll">
            {
                suggestions.map((suggestion, index) => {
                    return (
                        <li key={index} onClick={() => {handleSuggestionClick(suggestion)}} className="cursor-pointer hover:bg-blue-800 hover:text-white">
                            {suggestion}
                        </li>
                    )
                })
            }
        </ul>
    )
}
