import {Link} from 'react-router-dom';

function Navbar()
{
    return(
        <div style={{display:'flex',gap:'20px'}}>
            <Link to='/'>
                Booking
            </Link>
            <Link to='/'>
                Home
            </Link >
            <Link to='/services'>
               Services
            </Link>
            <Link to='/contact'>
                Contact
            </Link>
            <Link to='/login'>
                Login
            </Link>
        </div>
    )
}

export default Navbar;