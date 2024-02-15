import React from 'react'

type Props = {}

const SignUpFooter = (props: Props) => {
    return (
        <div className="bg-gray-200 py-4 px-6 flex  items-center w-full h-16 bg-gradient-to-r from-purple-800 to-blue-500 justify-between">
            <div className=" flex   text-white w-full flex-col ">
                <div className=" flex text-md font-bold">Welcome to our website</div>
                <div className="text-md">
                    Fusce porttitor lectus id ultricies bibendum. Phasellus sit amet magna nec velit pellentesque fringilla.
                </div>
            </div>
            <div className="flex">
                <button className=" flex  text-nowrap text-lg font-semibold bg-white rounded-full py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold">
                    Log in
                </button>
            </div>
        </div>

    )
}

export default SignUpFooter