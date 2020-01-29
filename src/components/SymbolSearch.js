import React, {useState} from 'react'

function SymbolSearch(){
    const [searchString, setSearchString] = useState('');
    
    const onChange = (e) => {        
        setSearchString(e.target.value);
        console.log(searchString);
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder = {'Search Ticker Symbol'}
                    onChange = {onChange}
                    value = {searchString}
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

