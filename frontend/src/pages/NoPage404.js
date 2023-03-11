import React from 'react';
import { Link } from 'react-router-dom';

export default function NoPage404() {
    return (
        <div>
            <h1>This is the 404 page</h1>
            <Link to="/">Go Back to The Home Page</Link>
        </div>
    )
}