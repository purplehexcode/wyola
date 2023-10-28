import Navbar from "./Navbar"
import Article from "./Article"

const Content = ({navOpen}) =>{
    return (
        <div className="content-area">
            {
                navOpen &&  <Navbar/>
            }
            <Article/>
        </div>
    )
}

export default Content