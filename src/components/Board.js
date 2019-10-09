import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Container, Message, TextArea, Button, Grid, Divider } from 'semantic-ui-react';

const API_URL = 'http://138.195.142.10';

// Gets the list of messages from a board
const getMessagesList = async (boardId) => {
    // The parameters of the request
    const request_options = {
        method: 'GET',
        url: `${API_URL}/messages`,
        params: {
            board: boardId
        }
    };
    // Returning a Promise for the data of the request
    return axios.request(request_options).then(resp => resp.data);
}

// Gets the list of users
const getUserList = async () => {

}

// Gets the data from a board
const getBoard = async (boardId) => {

}

// Posts a message on a board
const postMessage = (message, boardId) => {

}


// The Board Component
const Board = (props) => {
    // Define states for the id of the board (default 1) and the board's data


    // Initialize the board's data state with useEffect


    // Build the visuals of the Board using the MessageList and MessageWriter components
    return (
        <div>
        </div>
    );
}


const MessageList = (props) => {
    // Setup states for the messages and users lists


    // Initialize those states inside a useEffect


    // Fetch messages every 1 second inside a useEffect


    // Build the visuals of the MessageList using the MessageDisplay component
    return (
        <div>
        </div>
    );
}


const MessageDisplay = (props) => {
    return(
        <div>
        </div>
    );
}


const MessageWriter = (props) => {
    // Setup a state for the message being written

    return (
    <div>
    </div>
    );
}

export default withRouter(Board);
