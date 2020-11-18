import React from 'react';
import Header from './Header'
import axios from 'axios';
import Post from './Post.tsx'
import '../css/TrendingBody.css';
import '../css/TrendingSidebar.css';
import { useDataLayerValue } from '../DataLayer';
import MusicElem from './MusicElem.tsx'
import TrendingSidebar from './TrendingSidebar.tsx'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function TrendingBody({ spotify }) {
    const [{ user, discover_weekly }, dispatch] = useDataLayerValue();
    let text1 = 
    `
        Cole and Kendrick literally hit the streets. Why do they need to tweet? 
        They’ve literally always used their platform to shed light on these kinds of issues. 
        Let’s build each other up, there’s no need for this kind of infighting. 
        SMH #JCole #KendrickLamar #NoName #SnowOnThaBluff

    `
    let profile1 = "https://pbs.twimg.com/profile_images/1244423745860784128/GuH12aEt_400x400.jpg"
    let text2 = 
    `
    A lot of activist need to really listen to the lyrics of this new J. Cole song.
    Unfortunately a lot of you "woke" niggas have superiority complex
    #SnowOnThaBluff
    `
    let profile2 = "https://pbs.twimg.com/profile_images/1303047889107791873/kWZUsR99_400x400.jpg"
    let text3 = ` @noname drops #Song33 a response to @JCole #SnowOnThaBluff`
    let profile3 = "https://images.complex.com/image/upload/w_650/complex_nbiphu.jpg"
    let text4 = `Morning.  I stand behind every word of the song that dropped last night #SnowOnThaBluff`
    let profile4 = "https://pbs.twimg.com/profile_images/1286117233585008640/CBP7O5Xm_400x400.jpg"

// export default class PersonList extends React.Component{
//     state = {
//         data: []
//     }
      
//       componentDidMount(){
//         axios.get(`https://api.spotify.com/v1/tracks/{4SFknyjLcyTLJFPKD2m96o}`)
//           .then(res => {
//             const artistName = res.name;
//             const albumArtwork = res.images.url;
//             this.setState({data});
//           })
//       }
      
    return (
            <div class = "bigBody">
                <Header className = "header" spotify={spotify}/>
                <div className = "flexBody">
                    <div className="t_body">
                        <div className = "t_body_info">
                            <div className = "t_body_infoText">
                                <h2>Trending</h2>
                                <p><strong>J. Cole </strong>Snow On Tha Bluff</p>
                                <MoreHorizIcon className = "moreOptionIcon"/>
                            </div>
                        </div>
                        <div className = "postPanel">
                            <Post profile = {profile1} name = "Fred Dalger" text = {text1}/>
                            <Post profile = {profile2} name = "D. Dames" text = {text2}/>
                            <div>
                                <Post profile = {profile3} name = "Complex" text = {text3}/>
                                <Post profile = {profile4} name = "J Cole" text = {text4}/>
                            </div>
                        </div>
                        <hr/>
                        <div className = "trendingPanel">
                            <div className = "trendingSongs">
                                <h2>Trending Songs</h2>
                                <div className = "songs">
                                    <MusicElem art = "https://i.scdn.co/image/ab67616d0000b273e9111b8b529532aa62b14bdc" songname = "Snow On Tha Bluff" artist = "J. Cole"/>
                                    <MusicElem art = "https://i.scdn.co/image/ab67616d0000b27393b62d78fac956d842942c8e" songname = "Song 33" artist = "Noname"/>
                                    <MusicElem art = "https://i.scdn.co/image/ab67616d0000b2733504664c17b7b99a3cb7d116" songname = "This Is America" artist = "Childish Gambino"/>
                                    <MusicElem art = "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1" songname = "Alright" artist = "Kendrick Lamar"/>
                                </div>
                            </div>
                            <div className = "trendingPlaylists">
                                <h2>Trending Playlists</h2>
                                <div className = "songs">
                                    <MusicElem art = "https://i.scdn.co/image/ab67706f0000000305a363dc5d9a8469031f6cad" songname = "ALL Black Lives Matter! Songs of empowerment and pride. 779, 409 Followers"/>
                                    <MusicElem art = "https://i.scdn.co/image/ab67706f00000003fd92285a960405af07919690" songname = "Cole world. The very best of Jermaine. 458, 697 Followers"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TrendingSidebar/>
                </div>
            </div>
            
        
    );
}

export default TrendingBody;