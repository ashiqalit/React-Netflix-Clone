import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className='button' type="button">Play</button>
                    <button className='button' type="button">My list</button>
                </div>
                <h1 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat earum soluta molestiae laudantium odio ipsum nihil obcaecati cumque modi hic, sequi, maxime autem. Odit consectetur optio laudantium necessitatibus at.</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
