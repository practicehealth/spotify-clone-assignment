interface Section {
    title?: string;
    children?: React.ReactNode;
}

const Section = ({title,children}: Section) => {

  return (
    <div className="p-4">
        <div className="flex justify-between p-2">
            <span className="font-semibold text-2xl">{title}</span>
        </div>
        {children}
    </div>
  )
}

export default Section