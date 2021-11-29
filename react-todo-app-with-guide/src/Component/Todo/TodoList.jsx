import React from 'react'

function TodoList({data, handleDelete,handleToggle}) {
    console.log("hii",{data});
    
    return (
        <>
        <h3>Todo List</h3>
            {
               data.map((item) =>(
                   <>
                        <span>{item.title} </span>
                        <span> - {item.status ? "DONE" : "PENDING"} - </span>
                        <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                        <button onClick={()=>handleToggle(item.id)}>TOGGLE</button>
                        <br/><br/>
                   </>
                   )
                )
            }         
        </>
    )
}

export default TodoList
