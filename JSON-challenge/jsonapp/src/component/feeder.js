import React from 'react';

export default function Feed(props)
{
    return (
        <div className="content">
            <ul className='dataList'>
            {props.data.map((item)=>(
                <li className='listItem' key={item.id}>
                    <p style={{fontSize: '20px'}}>{item.id} : {item.title}</p>
                    <p>{JSON.stringify(item)}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}