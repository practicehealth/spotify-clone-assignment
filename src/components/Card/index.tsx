
interface CardProps {
    noPadding?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    className?: string;
    title?: string;

}

function Card({noPadding = false, children, className}: CardProps){
    let cardClasses = [];
    const baseClass = 'bg-neutral-900 flex flex-col rounded-lg';
    const withPadding = 'p-4';
    
    cardClasses = [baseClass];
    if(!noPadding){
        cardClasses.push(withPadding)
    }
    if(className){
        cardClasses.push(className)
    }

  

    return (
        <div className={cardClasses.join(' ')}>
            {children}
        </div>
    )
}

export default Card