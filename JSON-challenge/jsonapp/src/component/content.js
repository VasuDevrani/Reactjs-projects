import React from 'react';
import Feed from './feeder';

export default function Content(props)
{
    return (
        <div className="content">
            {
                props.data.length?(
                    <Feed data={props.data}/>
                    )
                    :(
                        <p style={{marginTop: '100px', fontSize: '40px', textAlign: 'center'}}>
                            No data to display
                        </p>
                    )
            }
        </div>
    )
}