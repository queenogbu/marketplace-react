import React, { useEffect } from 'react';
import AuthSidebar from '../components/AuthSidebar';

const Register = () => {
    useEffect(() => {
        document.title = 'eMarket - Create Account';
    }, []);

    return (
        <div>
        <nav style={{'--bs-breadcrumb-divider': "'>'"}} aria-label="breadcrumb" className="py-3">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">
                        <i className="fa fa-home"></i>
                    </a>
                </li>
                <li className="breadcrumb-item">
                    <a href="#">Account</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Register</li>
            </ol>
        </nav>

        <div className="row gx-1">
            <div className="col-9">
                <form className="register-form">
                    <fieldset className="mb-4">
                        <h4>Your Personal Details</h4>
                        <hr />
                        <div className="row mb-3">
                            <label for="firstname" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="firstname" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="lastname" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lastname" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="phone" className="col-sm-2 col-form-label">Telephone</label>
                            <div className="col-sm-10">
                                <input type="tel" className="form-control" id="phone" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <h4>Your Password</h4>
                        <hr />

                        <div className="row mb-3">
                            <label for="password" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="password2" className="col-sm-2 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password2" />
                            </div>
                        </div>
                    </fieldset>

                    <div className="text-end">
                        <button type="submit" className="btn btn-dark">Create Account</button>
                    </div>
                </form>
            </div>

            <AuthSidebar />
        </div>
        </div>
    );
};

export default Register;
