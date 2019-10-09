import React, { useState, useEffect }  from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Header } from 'semantic-ui-react';   

const API_URL = 'http://138.195.142.10';

// Gets the list of boards
const getBoardList = async () => {

}

const BoardsList = () => {
    // Initialize the list of boards

    return (
        <div>
        </div>
    );
}

export default withRouter(BoardsList);
