type ProgrammesProps = {
    programmes: string[];
}


export default function Programmes({ programmes }: ProgrammesProps) {

    return (
        <section className="w-2/5 h-96 overflow-scroll bg-gray-200 rounded-lg border-[1px] px-10 border-black">
            {
                programmes.map((programme, index) => {
                    return (
                        <li key={index} className="list-none mx-auto">{programme}</li>
                    )
                })
            }
        </section>
    )
}
