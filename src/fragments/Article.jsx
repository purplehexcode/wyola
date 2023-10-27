import Input from "../components/Input"
import { useState } from "react"

const Article = ()=>{
    const [query,setQuery] = useState({
        'text': '',
        'files': [],
    })

    return (
        <div className="article-area">
            <Input query={query} setQuery={setQuery}/>
        </div>
        
    )
}

export default Article