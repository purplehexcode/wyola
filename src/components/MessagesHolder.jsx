const EmptyMessages = () => {
    return (
        <>
            <h1>Get started by saying <span className="hello-message">"Hello"</span></h1>
        </>
    )
}

const MessagesAdapter = ({messages}) => {
    return (
        <ul className="messages-adapter">
            {
                messages.map(message=><li>{message}</li>)
            }
        </ul>
    )
}
const MessagesHolder = ({messages}) => {
    
    return (
        <div className="messages-container">
            {
                messages.length===0?<EmptyMessages/>:<MessagesAdapter messages={messages}/>
            }
        </div>
    )
}

export default MessagesHolder