import React from 'react';

export default function Feed(props)
{
    return(
        <div className="feed">
            <ul className='feed-list'>
            {
                props.data.map((item)=>(
                    <li className='listItem' key={item.id}>
                        <p>{item.item}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
} 