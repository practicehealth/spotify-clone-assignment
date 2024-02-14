import { cn } from '../../utils'

type Props = {
    text: string,
    className?: string
}

const Heading = ({text,className}: Props) => {
  return (
    <h3 className={cn("text-2xl font-bold text-white my-1.5", className)}>{text}</h3>
  )
}

export default Heading