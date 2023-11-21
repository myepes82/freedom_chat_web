import "./Sidenav.css"
function Sidenav() {
    return (
        <nav className="w-1/5 shadow-xs">
            <div className="user-navbar">
                <p>User Name</p>
                <img src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png" alt="profile" className="user-image" />
            </div>
            <div className="user-search-box">
                <i className="search-icon fas fa-search"></i>
                <input className="user-search" placeholder="Type username" type="text" name="user_name" id="user_name" />
            </div>
            <ol>
                <li>mensja</li>
                <li>mensja</li>
                <li>mensja</li>
                <li>mensja</li>
            </ol>
        </nav>
    )
}


export default Sidenav
