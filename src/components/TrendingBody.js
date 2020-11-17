import React from 'react';
import Header from './Header'
import Post from './Post.tsx'
import '../TrendingBody.css';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "../components/SongRow";



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
    A lot of activist need to really listen to the lyrics of this new J. Cole song

    Unfortunately a lot of you "woke" niggas have superiority complex
    
    #SnowOnThaBluff
    `
    let profile2 = "https://pbs.twimg.com/profile_images/1244423745860784128/GuH12aEt_400x400.jpg"
    let text3 = ` @noname drops #Song33 a response to @JCole #SnowOnThaBluff`
    let profile3 = "https://pbs.twimg.com/profile_images/1244423745860784128/GuH12aEt_400x400.jpg"
    let text4 = `Morning.  I stand behind every word of the song that dropped last night #SnowOnThaBluff`
    let profile4 = "https://pbs.twimg.com/profile_images/1244423745860784128/GuH12aEt_400x400.jpg"

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className = "body_info">
                <div className = "body_infoText">
                    <h2>Trending</h2>
                    <p><strong>J. Cole </strong>Snow On Tha Bluff</p>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className = "postPanel">
                <Post profile = {profile1} name = "Fred Dalger" text = {text1}/>
                <Post profile = {profile2} name = "D. Dames" text = {text2}/>
                <Post profile = {profile3} name = "Complex" text = {text3}/>
                <Post profile = {profile4} name = "J Cole" text = {text4}/>
            </div>
            
        </div>
    );
}

export default TrendingBody;
