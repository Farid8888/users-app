import classes from './UserInput.module.css'
import {useRef,useState} from 'react'



const UserList =(props)=>{
const enteredName = useRef()
const enteredAge = useRef()
const [name,setName]= useState('')
const [age,setAge] =useState('')


    const onSubmitHandler=(event)=>{
     event.preventDefault()
     const data ={
         name:enteredName.current.value,
         age:enteredAge.current.value,
         id:Math.random()
     }
     props.addUser(data)
     setName('')
     setAge('')
    }
    return(
       <form className={classes.userForm} onSubmit={onSubmitHandler}>
           <div className={classes.main}>
           <div className={classes.inputList}>
               <label>Username</label>
               <input type="text"  ref={enteredName}/>
           </div>
           <div className={classes.inputList}>
               <label>Age (Years)</label>
               <input type="number"  ref={enteredAge}/>
           </div>
           <div className={classes.btn}>
               <button type="submit">Add User</button>
           </div>
           </div>
       </form>
    )
}

export default UserList