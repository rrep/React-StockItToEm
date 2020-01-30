import React, { useState } from 'react'

function SymbolSearch(props) {
    const [searchString, setSearchString] = useState('');

    const onChange = (e) => {
        setSearchString(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.searchClick(searchString);
        setSearchString('');
    }

    return (
        <div className="search">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="search"
                    placeholder={'Search Ticker Symbol'}
                    onChange={onChange}
                    value={searchString}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </form>
        </div>
    )
}

export default SymbolSearch;

