import React,{useState} from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import Pagination from './Pagination';

function TodoInput() {
    const [task, setTask] = useState([]);
    const [payload, setPayload] = useState({});
    const [showCompleted, setShowCompleted] = useState(false);
    const [showPending, setShowPending] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 5;
    var totalPage = Math.ceil(task.length/perPage);

    const handleChange = (e) => {
        setPayload({title : e.target.value, id: uuid(), status: false});
    };

    const handleAdd = () => {
        setTask([...task,payload]);
        // console.log(task);
    }

    const handleDelete = (id)=>{
        setTask(task.filter((item) => item.id !== id))
    }

    const handleToggle = (id) =>{
        setTask(task.map((item) => item.id === id ? {...item,status: !item.status}:item));
    }

    const handleCompletedTask = () =>{
       setShowCompleted(!showCompleted);     
    }
    const handlePendingTask = () =>{
        setShowPending(!showPending);
    }

    const changePageTo=(page)=>{
       if(page<=1){
            setPage(1);
            return;
       }
       setPage(page);
    }

    const name = () =>{
        return <h1>Jaswant Chaudhary</h1>
    }

    const pageContent = task.filter((_, i)=>{
        return ( i>=(page-1)*perPage && i < page*perPage);
    })

    return <>
        <div>

            <input type="text" placeholder="title" className="input-btn" onChange={handleChange}/>
            
            <button className="add-btn" onClick={handleAdd}> + </button><br /><br />
            <div>
                {name()}
            </div>
           
            <TodoList data={pageContent} handleToggle={handleToggle} handleDelete={handleDelete}/>
         
            <button onClick={()=>handleCompletedTask()}>show completed task</button>
            {
                showCompleted && (task.filter((item)=> item.status)).map((item)=> <h3>{item.title}</h3>)
            }
          
            <button onClick={()=>handlePendingTask()}>show pending task</button>
            {
                showPending && (task.filter((item)=> !item.status).map((item)=> <h3>{item.title}</h3>))
            }
            <br/><br/>
           
            {/* {
                pages.map((page,i)=> <button onClick={()=>showPageContent(i)}>{i+1}</button>)
            } */}
         
            <div>
                <Pagination currentPage={page} total={totalPage} onClickCallback={(page)=>changePageTo(page)}/>
            </div>
        </div>  
    </>
}

export default TodoInput;
