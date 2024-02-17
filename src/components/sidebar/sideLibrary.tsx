import { faListDots, faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../section/sectionContainer";
import FlatButton from "../button/flatButton";
import { items } from "../../constants/menu";

export default function SideLibrary() {
    return (
        <SectionContainer className="h-full justify-stretch items-stretch">
            <div className="relative flex justify-between items-center px-5 py-4">
                <FlatButton
                    literal={"Your Library"} icon={faListDots} title="" href={""}
                    className="rounded-3xl flex gap-3 items-center px-2 py-1 text-neutral-400 hover:text-white transition-colors duration-300"
                />
                <FlatButton
                    className="flex rounded-[50%] aspect-square items-center justify-center w-8 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                    title="Create playlist or folder" icon={faPlus} literal="" href={""}
                />
            </div>

            <div className="flex flex-col gap-5 h-44 pt-2 pb-5 overflow-auto px-2">
                <div className='flex flex-col gap-3 items-start bg-neutral-800 p-4 rounded-lg'>
                    <p className="font-bold text-gray-50">Create your first playlist</p>
                    <p className="text-sm font-bold text-gray-50">It&apos;s easy, we will help you</p>
                    <FlatButton
                        icon={"0"} literal={"Create playlist"} title="" href=""
                        className="px-5 py-2 rounded-full text-black justify-center font-bold hover:scale-105 text-sm bg-white"
                    />
                </div>

                <div className='flex flex-col gap-3 items-start bg-neutral-800 p-4 rounded-lg'>
                    <p className="font-bold text-gray-50">Let&apos;s find some podcasts to follow</p>
                    <p className="text-sm font-bold text-gray-50">We&apos;ll keep you updated on new episodes</p>
                    <FlatButton
                        icon={"0"} literal={"Browse podcasts"} title="" href=""
                        className="px-5 py-2 rounded-full text-black justify-center font-bold hover:scale-105 text-sm bg-white"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-10 items-start px-6 justify-between py-6">
                <ul className="flex flex-wrap text-[0.7rem] text-neutral-400 gap-5">
                    {items.map((item: any, i: number) => {
                        return (
                            <li key={i}>
                                <FlatButton className="#" literal={item} icon={"0"} title={""} href={""} />
                            </li>
                        )
                    })}
                </ul>

                <FlatButton
                    literal={"English"} icon={faGlobe} title="" href={""}
                    className="hover:scale-105 py-1 flex items-center gap-1 text-sm text-gray-200 font-bold border-[1px] px-3 border-zinc-500 hover:border-white rounded-3xl"
                />
            </div>
        </SectionContainer>
    );
}