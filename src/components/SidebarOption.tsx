import React from 'react';
import "../css/SidebarOption.css";

function SidebarOption({ title, Icon } : {title:string, Icon:any}) {
    return (
        <div className = "sidebarOption">
            {Icon && <Icon className = "sidebarOption_icon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOption;
