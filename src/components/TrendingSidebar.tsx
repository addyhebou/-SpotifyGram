import React from 'react';
import "../css/TrendingSidebar.css";
import Hashtag from './Hashtag';
import 'semantic-ui-css/semantic.min.css';

function TrendingSidebar() {
    return (
        <div className = "t_sidebar">
            <h1>Trending Tags</h1>
            <Hashtag tag = "jcole"/>
            <Hashtag tag = "snowonthabluff"/>
            <Hashtag tag = "blm"/>
            <Hashtag tag = "noname"/>
            <Hashtag tag = "J. Cole"/>
            <Hashtag tag = "kendrick"/>
            <Hashtag tag = "thisisamerica"/>
        </div>
        
    );
}

export default TrendingSidebar;
