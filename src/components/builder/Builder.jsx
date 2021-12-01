import React, { useState } from 'react'

export default function Builder({  
    // top of the body,
    onTopChange,
    // middle of the body,
    onMiddleChange,
    // bottom of body,
    onBottomChange,
    newCatchphrase,
    setCatchphrase,
    handleClick,
})

{  
    const [top, setTop] = useState('');
    const [middle, setMiddle] = useState('fancy');
    const [bottom, setBottom] = useState('');

    const heads = ['Alphinaud', 'Graha tia', 'Yshtola', 'Aliasie'];
    const torsos =['blue-academic', 'crystal', 'aether', 'red-academic'];
    const pants =['blue-pants', 'crystal pants', 'red-pants'];

    return (
        <div>
            <label>
                Head
                <select value={top} onChange={(e) => onTopChange(e.target.value)}>{heads.map((pic)=>(
                    <option key={pic}>{pic}</option>
                ))}</select>
            </label>

            <label>
                Middle
                <select value={middle} onChange={(e) => onMiddleChange(e.target.value)}>{torsos.map((pic)=>(
                    <option key={pic}>{pic}</option>
                ))}</select>
            </label>

            <label>
                Pants
                <select value={bottom} onChange={(e) => onBottomChange(e.target.value)}>{pants.map((pic)=>(
                    <option key={pic}>{pic}</option>
                ))}</select>
            </label>
            
            <label>
                New Catchphrase:
                <input
                type='text'
                value={newCatchphrase}
                onChange={(e) => setCatchphrase(e.target.value)}
                />
            </label>

            <button type='button' onClick={handleClick}>
                Submit
            </button>

        </div>
    )
}