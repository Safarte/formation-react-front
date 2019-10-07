import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Container, Message, TextArea, Button, Grid, Divider } from 'semantic-ui-react';

const API_URL = 'http://138.195.142.10';

// Posts a message on a board
const postMessage = (message, board) => {

};

// Gets the list of messages from a board
const getMessagesList = async (board) => {

};

// Gets the list of users
const getUserList = async () => {

};

// Gets the data from a board
const getBoard = async (id) => {

};

const Board = (props) => {
    // Get the board's id and data

    return (
        <div>
        </div>
    );
};

const MessageList = (props) => {
    // Get the list of users and initialize the message list

    // Fetch messages every 1 second

    return (
        <div>
        </div>
    );
};

const MessageDisplay = (props) => {
    return(
        <div>
        </div>
    );
};

const MessageWriter = (props) => {
    // Initialize a message in the state

    return (
    <div>
    </div>
    );
};

export default withRouter(Board);
