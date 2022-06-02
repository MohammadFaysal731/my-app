import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-success">
            <div className="container-fluid">
                <h1 className="navbar-brand">My App</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        <Link className="nav-link" to='/blogs'>Blogs</Link>
                        <Link className="nav-link " to='/about'>About</Link>
                        <Link className="nav-link" to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;