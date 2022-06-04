import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
const Dashboard = () => {
    return (
        <div>
            <div className="d-flex justify-content-end m-3">
                <button className="btn btn-outline-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><MdDashboard></MdDashboard></button>

            </div>

            <Outlet />
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header ">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Dashboard<MdDashboard></MdDashboard></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>


                <div className="offcanvas-body">
                    <button className="btn btn-link text-decoration-none text-dark fs-4 border w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Dashboard<MdDashboard></MdDashboard>
                    </button>

                    <div className="collapse  " id="collapseExample">
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <Link className='nav-link' to='/dashboard/myprofile'>My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/dashboard/myorder'>My Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/dashboard/makeadmin'>Make Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/dashboard/addproduct'>Add Product</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;