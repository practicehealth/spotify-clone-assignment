import Header from '../components/Header'
import PlayList from '../components/PlayList'
import Section from '../components/Section'
import {playlist} from '../data.json'

const Home = () => {
  return (
    <div>
       <Header />
          <Section title='Spotify Playlist'>
             <PlayList data={playlist}/>
          </Section>
    </div>
  )
}

export default Home