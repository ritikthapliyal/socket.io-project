import React, { useState } from 'react'
import TaskComponent from './TaskComponent'

const Tasks = ({ task }) => {

    const tasks = ['Task-1','Task-2','Task-3','Task-4']

    return (
        <div className='tasks'>
            {
                tasks.map((task,index)=>{
                    return <TaskComponent key={task} task={task} />
                })
            }
        </div>
    )
}

export default Tasks
