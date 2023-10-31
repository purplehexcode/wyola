
const Input = ({query,setQuery,setMessages,messages}) => {

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

    const updateMessages = () => {
        const newQuery = {
            ...query,
            new:true,
        }
        
        setMessages(messages.concat(newQuery))
        setQuery({
            text:'',
            files:[]
        })
        
    }
    return (
        <div  className="input-container">
            <div className="query-container">
                <div>
                    <label htmlFor="file">
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
                    <span className="material-symbols-outlined send-button" onClick={updateMessages}>
                        send
                    </span>
                </div>
                
            </div>
            
        </div>  
    )
} 

export default Input