
const Input = ({query,setQuery}) => {

    const updateFiles = (e) => {
        const newQuery = {...query}
        const files = e.target.files
        newQuery.files = newQuery.files.concat(files)
        setQuery(newQuery)
    }

    const updateText = (e) => {
        setQuery({
            ...query,
            text: e.target.value,
        })
    }
    return (
        <div  className="input-container">
            <div className="query-container">
                <div>
                    <label for="file">
                    <span className="material-symbols-outlined">image</span>
                    </label>
                    <input type="file"
                        id="file"
                        onChange={updateFiles}
                        file={query.files}
                        className="query-file" multiple={true}/>
                </div>
                
                <div className="input-holder">
                    <input 
                    placeholder="Enter your prompt here"
                    className="query-text" 
                    type="text" 
                    onChange={updateText} value={query.text}/>
                    <span class="material-symbols-outlined send-button">
                        send
                    </span>
                </div>
                
            </div>
            
        </div>  
    )
} 

export default Input