const Title = ({navOpen,setNavOpen}) => {
    const handleNavOpen = () =>{
        if(navOpen){
            setNavOpen(false)
        }
        else{
            setNavOpen(true)
        }
    }
    return (
        <div className="title-area">
            <div className="title-container">
                <span className="material-symbols-outlined hamburger" onClick={handleNavOpen}>menu</span>
                <h1 className="app-name">Wyola</h1>
            </div>
            
        </div>
    )
}

export default Title