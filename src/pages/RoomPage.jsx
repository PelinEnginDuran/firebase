const RoomPage=({setRoom, setIsAuth})=>{
    const handleSubmit =(e)=>{
        e.preventDefault()
        const room =e.target[0].value
        setRoom(room.toUpperCase())

    }
    return (
        <form onSubmit={handleSubmit}
         className="roompage">
            <h1>Chat Room</h1>
            <p className="text-p">Hangi odaya gireceksiniz?</p>
            <input placeholder="ör: haftasonu" type="text" />
            <button className="submit">Odaya Gir</button>
            <button
            onClick={()=>{setIsAuth(false)
            localStorage.removeItem("TOKEN")}}
             className="button">Çıkış Yap</button>
        </form>
    )
}
export default RoomPage