import React, { useState } from 'react'

export default function Builder({  
    // top of the body,
    top,
    onTopChange,
    // middle of the body,
    middle,
    onMiddleChange,
    // bottom of body,
    bottom,
    onBottomChange,
    newCatchphrase,
    setCatchphrase,
    handleClick,
    // handleSubmit,
    handleCatchphrase
})

{  
    

    const parts = ['Alphinaud', 'Graha', 'Yshtola', 'Alisaie'];
    

 

    return (
        <div>
            <form onSubmit={handleCatchphrase}>
            <label>
                Head
                <select name='head' value={top} onChange={handleClick}>{parts.map((pic)=>(
                    <option key={pic}>{pic}</option>
                ))}</select>
            </label>

            <label>
                Middle
                <select name='torso' value={middle} onChange={handleClick}>{parts.map((pic)=>(
                    <option key={pic}>{pic}</option>
                    
                ))}</select>
            </label>

            <label>
                Pants
                <select name='legs' value={bottom} onChange={handleClick}>{parts.map((pic)=>(
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

            <button>
                Submit
            </button>
            </form>

        </div>
    )
}