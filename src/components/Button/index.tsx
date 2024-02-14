interface ButtonProps {
    plain?: boolean;
    iconOnly?: boolean;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    small?: boolean;
    outline?: boolean;
}

function Button(props: ButtonProps){
    if(props.plain){
        return <PlainButton {...props}/>
    }else if(props.iconOnly){
        return <IconButton {...props}/>
    }else if(props.outline){
        return <OutlineButton {...props}/>
    }
    
return <BaseButton {...props} />
}

function BaseButton(props: ButtonProps){
    const baseClass = ['bg-white text-black px-7 py-3 font-semibold rounded-3xl hover:scale-105'];
    if(props.small){
       baseClass.push('text-md !py-2 !px-6');
    }
    return (
        <button className={baseClass.join(' ')}>{props.children}</button>
    )
}

function PlainButton({children}: ButtonProps){
    return (
        <button className="text-neutral-400 px-7 py-3 font-semibold rounded-3xl hover:scale-105">{children}</button>
    )
}

function OutlineButton({children, small=false}: ButtonProps){
    const baseClass = ['flex gap-1 bg-black text-white border border-white px-7 py-3 font-semibold rounded-3xl hover:scale-105'];
    if(small){
       baseClass.push('text-md !py-2 !px-6');
    }
    return (
        <button className={baseClass.join(' ')}>{children}</button>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function IconButton({icon, iconOnly, ...props}: ButtonProps){
    return (
        <button className="p-2 bg-black hover:bg-neutral-800 rounded-full disabled:cursor-not-allowed" {...props}>
           {icon}
        </button>
    )
}

export default Button;