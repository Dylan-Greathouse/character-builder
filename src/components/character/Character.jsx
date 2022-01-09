import React from 'react';


export default function Character({ top, middle, bottom }) {
    return (
        <section 
        style={{
            display: 'flex', 
            flexDirection: 'column', 
            width: '300px', 
            height: '100vh', 
            textAlign: 'center', 
            alignContent: 'center',
            marginLeft: 'auto', 
            marginRight: 'auto'
           }}>
            <article 
            aria-label='Head'
            className='head'
            style={{
            
                backgroundImage: `url('assets/heads/${top}_head.png')`,
                width: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            >Head</article>

            <article 
            aria-label='Torso'
            className='torso'
            style={{
                backgroundImage: `url('assets/torsos/${middle}_torso.png')`,
                width: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            >middle</article>

            <article 
            aria-label='Legs'
            className='legs'
            style={{
                backgroundImage: `url('assets/legs/${bottom}_legs.png')`,
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            >pants</article>
        </section>
    )
}