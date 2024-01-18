import {collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, where} from "firebase/firestore"
import { auth, db } from "../firebase/config"
import { useEffect } from "react"
import { useState } from "react"
import Messages from "../components/messages"

const ChatPage =({room, setRoom})=>{
    
    const [messages, setMessages]=useState([])



    const handleSubmit=async(e)=>{
        e.preventDefault()
        const messagesCol = collection(db, "messages")

        const q = query(messagesCol, where("room","==", room),orderBy("createdAt", "asc"))


        
        await addDoc(messagesCol,{
            text: e.target[0].value,
            author:{
                id:auth.currentUser?.uid,
                name: auth.currentUser?.displayName,
                photo:auth.currentUser?.photoURL,
            },
            createdAt: serverTimestamp(),
            room
        })
        e.target.reset()
    }


    //mesajları anlık getir, değişimleri izler(onsnapshot)
    useEffect(()=>{
        const messagesCol = collection(db, "messages")
        const q = query(messagesCol, where("room","==", room),orderBy("createdAt", "asc"))


        onSnapshot(q,(snapShot)=>{
            
            const tempMsg = []
            snapShot.docs.forEach((doc)=>{
                tempMsg.push(doc.data())
            })
            setMessages(tempMsg)
        })

    },[])
    return (
        
        <div className="chatpage">
            <header> 
                <p>{auth.currentUser?.displayName}</p>
                <p>{room}</p>
                <button onClick={()=>setRoom(null)}>Farklı Oda</button>
            </header>
                <main>
                    {messages.map((data, i)=>(
                    <Messages data={data}/>
                ))}</main>
                <form onSubmit={handleSubmit}>
                    <input
                    required
                     type="text"
                     placeholder="mesajınızı yazınız..." />
                     <button>gönder</button>
                </form>
           
        </div>
    )
}
export default ChatPage