import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState("")
    const [listData, setlistData] = useState([])
    function addActivity(){
       // setlistData((...listData,activity)=>{
       // console.log(listdata)
       setlistData((listData)=>{
         const updatedList=[...listData,activity]
        console.log(updatedList)
        setActivity('');
        return updatedList;
        })

    }
        function removeActivity(i){
             const UpdatedListData = listData.filter((elem,id)=>{

             })
         setlistData(UpdatedListData);
        }
    return (
     <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity'  value={activity} onChange={(e)=>setActivity(e.target.value)}/>
         <button style={{backgroundColor:'green'}} onClick={addActivity}>Add</button>
        <p className='List-heading' style={{color:'white'}}> 'Here is your list':{")"}</p>
            {listData!==[]&& listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div style={{width:'70%'}} className='listData'>{data}</div>
                    <div className='btn-position'><button style={{backgroundColor:'red'}} onClick={()=>removeActivity(i)}>remove(-)</button></div>
                     
                </p>
                </>
            )
        })}
           <button style={{backgroundColor:'red'}}>Remove All</button>
     </div>
    </> 
 )
}

export default TodoList
