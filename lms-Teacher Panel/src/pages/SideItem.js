import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function SideItem({iconClass, nameeClass, namee, toolTipClass, toolTip, path}) {
    return (
        <li>
            <Link to={path}>
                <i className={iconClass}></i>
                <span className={nameeClass}>{namee}</span>
            </Link>
            <span className={toolTipClass}>{toolTip}</span>
        </li>
    )
}

export default SideItem
