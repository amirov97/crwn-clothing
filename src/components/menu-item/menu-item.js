import React from "react";
import './menu-item.style.scss'
import {withRouter} from 'react-router'


const MenuItem = ({title, imageUrl,linkUrl, size,history,location,match}) => {

    return (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)