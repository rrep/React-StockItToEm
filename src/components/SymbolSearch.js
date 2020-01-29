import React, { useState } from 'react'

function SymbolSearch(props) {
    const [searchString, setSearchString] = useState('');

    const onChange = (e) => {
        setSearchString(e.target.value);
        console.log(searchString);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.searchClick(searchString);
        setSearchString('');
    }

    return (
        <div>
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
                />
            </form>
        </div>
    )
}

export default SymbolSearch;

