import React, { useState } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Form, Image } from 'semantic-ui-react';

const API_URL = 'http://138.195.142.10';

// Attempts to login and if successful stores the userId in localStorage and redirects to the boards list
const handleLogin = async (username, password) => {

}

// Attempts to register and if successful stores the userId in localStorage and redirects to the boards list
const handleRegister = async (username, password) => {

}

const Login = () => {
    // Initializes username and password in the state

    return (
        <div>
        </div>
    );
}

export default withRouter(Login);
