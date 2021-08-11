import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header className="nav_bar">
            <NavLink to="/" activeClassName="nav_active_link" className="nav_link">
                Blog
            </NavLink>
        </header>
    )
}

export default Header