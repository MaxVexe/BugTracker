import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/v1/example') // Proxied to http://localhost:8080/api/v1/example
            .then(res => res.text()) // use .text() since the response is a plain string
            .then(setMessage)
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Message from Backend:</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;

