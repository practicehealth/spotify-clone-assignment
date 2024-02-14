
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import Section from '../components/Section'
import data from '../data.json'
import { useState } from 'react'

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Search = () => {
  const searchData = data.browseall;
  const [term, setTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  }

  let searchResult = null;
  if(term.trim().length === 0){
    searchResult = (
      <Section title="Browse All">
        <div className="grid grid-cols-5 gap-4">
        {searchData.map((item, index) => {
          return <div key={index} className="overflow-hidden bg-neutral-400 relative w-full rounded-lg border-0 after:content-[' '] after:block pb-[100%]" style={{backgroundColor: getRandomColor()}}>
            <div className="absolute top-0 left-0 p-3 text-2xl font-bold">{item.geners}</div>
            <img src="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa" className="w-[100px] h-[100px] absolute -bottom-[15px] -right-[15px] rotate-[25deg]" alt="" />
          </div>
        })}
        </div>
      </Section>
    )
  }else{
    const testTags = ['All', 'Songs', 'Artists', 'Playlists', 'Podcasts & Shows', 'Profiles'];
    searchResult = (
      <div className='p-4 flex flex-col'>
        <div className="flex gap-3">
          {testTags.map((item, index) => <Tag text={item} key={index} active={selectedTag === item ? true : false} onClick={() => setSelectedTag(item)}/>)}
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header search={<SearchInput value={term} onChange={handleChange} />}/>
      {searchResult}
    </div>
  )
}


function Tag({text, active, onClick=() => {}}){
  return <div className={`bg-neutral-800 px-4 py-2 rounded-full cursor-pointer text-sm ${active ? 'bg-white text-black' : ''}`} onClick={onClick}>{text}</div>
}

export default Search