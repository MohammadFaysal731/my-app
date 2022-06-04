import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handelSingOut = () => {
        signOut(auth);
    }


    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-success">
            <div className="container-fluid">
                <h1 className="navbar-brand">My App</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        <Link className="nav-link" to='/blogs'>Blogs</Link>
                        <Link className="nav-link " to='/about'>About</Link>
                        {user && <Link className="nav-link " to='/dashboard'>Dashboard</Link>}
                        {
                            user ? <button onClick={handelSingOut} className='btn btn-link nav-link '> Sing out </button> : <Link className="nav-link" to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;