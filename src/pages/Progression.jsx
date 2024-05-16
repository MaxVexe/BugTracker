import React from 'react';
import { useState } from 'react';
// Assuming progressList is obtained from the mapping in the previous code

const Progression = () => {
    // Your achievement list array
    const achievementList = [
        { key: 1, information: { title: "object 1", progresses: 1 } },
        { key: 2, information: { title: "object 2", progresses: 2 } },
        { key: 3, information: { title: "object 3", progresses: 1 } }
    ];

    // Transforming your achievementList into progressList with key and information
    let progressList = achievementList.map((obj) => {
        // Extracting key and information directly from each object in achievementList
        const { key, information } = obj;
        // Returning an object containing both key and information
        return { key, ...information };
    });

    const [search,setSearch] = useState("")
    
    function filterSearching(event){
        setSearch(event.target.value);
    }

    return (
        <>
        <div>
            <h1>Progress List</h1>
            <input value={search} onChange={filterSearching}></input>
                
            
            <ul>      

                {/* Mapping over progressList and rendering list items */}
                
                {progressList.map(item => (
                    <li key={item.key}>
                        {/* Rendering title and progresses for each item */}
                        {item.title} - Progress: {item.progresses}
                    </li>
                ))}
            </ul>


        </div>
        
        </>
    );
};

export default Progression;
