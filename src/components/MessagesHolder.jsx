import { useEffect } from "react"
import axios from "axios"

const EmptyMessages = () => {
    return (
        <>
            <h1>Get started by saying <span className="hello-message">"Hello"</span></h1>
        </>
    )
}

const getAnswer = () =>{
    const request = axios.get('/chatgpt')
    return request.then(response=>{
        console.log(response.data)
        return response.data.text
    })
}

const MessagesAdapter = ({messages,setMessages}) => {
    useEffect(()=>{
        console.log('before',messages)
        const getSolution = async()=>{
            var questions = [...messages]
            var lastQuestion = questions[messages.length-1]
            if(lastQuestion.new){
                var answer = await getAnswer(lastQuestion)
                if(answer){
                    lastQuestion.answer = answer
                    lastQuestion.new=false
                    setMessages(questions)
                    console.log('after',questions)
                }
            }
            
        }
        getSolution()
        
    },[messages])

    return (
        <div className="messages-adapter">
            {
                messages.map((message,index)=>{
                return (
                    <div className="message" key={index}>
                        <div className="question">{message.text}</div>
                        <div className="answer">{message.answer}</div>
                    </div>
                
                )
            })
            }
        </div>
    )
}


const MessagesHolder = ({messages,setMessages}) => {
    
    return (
        <div className="messages-container">
            {
                messages.length===0?<EmptyMessages/>:<MessagesAdapter messages={messages} setMessages={setMessages}/>
            }
        </div>
    )
}

export default MessagesHolder