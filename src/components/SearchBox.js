function SearchBox({searchChange}){
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-light-green" 
            type="search" 
            placeholder="Search Robots!"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;