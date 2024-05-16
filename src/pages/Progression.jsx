import React from 'react';
import { useState } from 'react';
// Assuming progressList is obtained from the mapping in the previous code

const Progression = () => {
    // Your achievement list array
    const achievementList = [
        { key: 1, information: { title: "object 1", progresses: 1 }, completed: false },
        { key: 2, information: { title: "object 2", progresses: 2 }, completed: false },
        { key: 3, information: { title: "object 3", progresses: 3 }, completed: false }
    ];

    // State variable to hold the filter value
    const [filter, setFilter] = useState('');

    // Transforming your achievementList into progressList with key and information
    let progressList = achievementList.map((obj) => {
        // Extracting key and information directly from each object in achievementList
        const { key, information, completed } = obj;
        // Returning an object containing both key and information
        return { key, ...information, completed };
    });

    // Filter progressList based on user input
    if (filter) {
        progressList = progressList.filter(item =>
            item.title.toLowerCase().includes(filter.toLowerCase())
        );
    }

    return (
        <>
        <a href ="/"> Home </a>
        <div>
            <h1>Progress List</h1>
            {/* Input field for user input */}
            <input 
                type="text" 
                placeholder="Search..." 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
            />
            <ul>
                {/* Mapping over filtered progressList and rendering list items */}
                {progressList.map(item => (
                    <li key={item.key}>
                        {/* Rendering title and progresses for each item */}
                        {item.title} - Progress: {item.progresses} - Completion Status: {item.completed? "Completed!" : "Uncompleted!"}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default Progression;