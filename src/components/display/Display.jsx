import React from 'react'

export default function Display ({ catchphrases }) {
    
    return (
        <>
          
            {catchphrases.map((catchphrase) => 
            <p 
            key={catchphrase}>{catchphrase}
            </p>
            )}
            <br></br>
        </>
    );
}