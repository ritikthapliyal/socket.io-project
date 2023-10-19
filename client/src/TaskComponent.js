import React, { useState } from 'react';

const TaskComponent = ({ task }) => {

    const [taken, setTaken] = useState(false)

    const handleCheckboxChange = () => {
        setTaken(!taken)
    }

    return (
        <div className='task'>
        <label>
            <input type="checkbox" checked={taken} onChange={handleCheckboxChange} />
            {task}
        </label>
        <p>{taken ? "Taken" : "Not taken"}</p>
        </div>
    )
};

export default TaskComponent;
