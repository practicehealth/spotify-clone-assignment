import FlatButton from "../button/flatButton";

const FooterSignUpFree = () => {
    return (
            <div className='col-span-2 flex justify-between items-center py-2 px-4 text-gray-200 font-medium bg-gradient-to-r from-pink-800 via-purple-600 to-blue-400'>
                <div>
                    <div className='text-sm'>Preview of Spotify</div>
                    <div> Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
                </div>

                <FlatButton
                    icon={"0"} literal={"Sign up free"} title="" href={""}
                    className="rounded-full text-gray-950 justify-center font-bold hover:scale-105 text-sm bg-white h-12 w-60 lg:w-40"
                />
            </div>
    )
}

export default FooterSignUpFree;