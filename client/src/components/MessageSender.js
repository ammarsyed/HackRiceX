import React from 'react'
import './MessageSender.css';


function MessageSender() {

const[input,setInput] = useState('')
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        

        setInput("");
        setImageUrl("");
}

    return (
        <div className = "messageSender">
            <div className="messageSender_top">
                <Avatar/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender_input" placeholder={"What's on your mind"} />
                    <input value={imageUrl} onChange = {e=>setImageUrl(e.target.value)} placeholder="image URL(Optional)" />
                    
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>   
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>            
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender;
