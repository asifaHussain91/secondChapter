import './ChatInput.css'
function ChatInput(){

    return(
        <div className='header'>
        <input type="text"  placeholder='Send a message to Chatbot' className='chatInputField' />
        <button className='sendButton'> Send </button>
        </div>
    )

}


export default ChatInput;