
import Icon from "../Icon";

interface SearchProps {
    value?: string;
    onChange?: React.FormEventHandler<HTMLInputElement>;
}

const SearchInput = (props: SearchProps) => {
    return (
        <div className="relative w-[400px]">
            <div className="absolute left-3 top-3">
                <Icon name="search" />
            </div>
            <input type="text" className="w-full bg-neutral-800 rounded-full p-3 pl-12 shadow outline-none" placeholder="What do you want to play?" {...props}/>
        </div>
    )
}

export default SearchInput;