import "./Sidenav.css"
function Sidenav() {
    return (
        <nav className="w-1/5">
            <div className="user-navbar">
                <p>User Name</p>
                <img src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png" alt="profile" className="user-image" />
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
