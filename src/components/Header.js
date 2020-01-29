import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Stock it To 'Em</h1>
        </header>
    )     
}

const headerStyle = {
    color:'#ffffff',
    textAlign:'right'
}

export default Header;