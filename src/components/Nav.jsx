function Nav  () {


    return(
        <>
            <div>
                <nav>
                    <div className="logo">
                        <img src="/images/brand_logo.png" alt="logo"/>
                    </div>

                    <ul className="nav-links">
                        <li href="#">Menu</li>
                        <li href="#">About</li>
                        <li href="#">Contact</li>
                        <li href="#">Location</li>
                    </ul>

                    <button className="login-button">login</button>
                </nav>
            </div>
        
        </>


    )
}

export default Nav;