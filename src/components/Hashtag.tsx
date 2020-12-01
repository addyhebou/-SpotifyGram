import React from 'react';
import '../css/Hashtag.css';


function Hashtag({tag} : {tag: string | null}) {
    return (
        <div className = "hashtag">
            <h3>#{tag}</h3>
        </div>
    )
}

export default Hashtag
