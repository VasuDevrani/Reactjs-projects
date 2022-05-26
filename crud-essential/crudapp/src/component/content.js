import React from 'react';
import Feed from './feed.js'

export default function Content(props)
{
    return(
        <div className="content">
            <form className='addForm' onSubmit={props.handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={props.newItem}
                onChange={(e) => props.setNewItem(e.target.value)}
            />
        </form>
            <h1 style={{margin: '50px', textAlign: 'center'}}>Below content</h1>
            {props.datas.length ? (
                <Feed data={props.datas}/>
            ):(
                <p style={{textAlign: 'center', fontSize: '40px', color: 'crimson'}}>Nothing to display</p>
            )
            }
        </div>
    )
} 