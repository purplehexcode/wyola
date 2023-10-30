import Input from "../components/Input"
import MessagesHolder from "../components/MessagesHolder"
import { useState } from "react"

const Article = ()=>{
    const [query,setQuery] = useState({
        'text': '',
        'files': [],
    })
    const [messages,setMessages] = useState([])

    return (
        <div className="article-area">
            <MessagesHolder messages={messages}/>
            <Input query={query} setQuery={setQuery} setMessages={setMessages} messages={messages}/>
        </div>
        
    )
}

export default Article