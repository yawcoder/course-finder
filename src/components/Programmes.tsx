type ProgrammesProps = {
    programmes: string[];
    // setProgrammes: (event: string[]) => void;
}


export default function Programmes({ programmes } : ProgrammesProps) {

  return (
    <div>
        {
            programmes.map((programme, index) => {
                return (
                    <li key={index}>{programme}</li>
                )
            })
        }
    </div>
  )
}
