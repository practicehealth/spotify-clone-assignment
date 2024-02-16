import play from '../../../public/play.svg'

function PlayButton() {
  return (
    <div className=''>
        <button className="w-12 h-12 rounded-full text-xl transition duration-100 relative bg-green-400 opacity-95 flex items-center justify-center cursor-pointer">
            <img src={play}></img>
        </button>
    </div>
  )
}

export default PlayButton