import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Stock it To 'Em</h1>
        </header>
    )     
}

const headerStyle = {
    background: '#3e3e3e',
    color:'#ffffff',
    textAlign:'right'
}

export default Header;