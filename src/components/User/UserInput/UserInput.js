import classes from './UserInput.module.css'
import {useRef,useState} from 'react'



const UserList =(props)=>{
const enteredName = useRef()
const enteredAge = useRef()
const [name,setName]= useState('')
const [age,setAge] =useState('')
const nameHandler =()=>{
    setName(enteredName.current.value)
}

const ageHandler=()=>{
    setAge(enteredAge.current.value)
}

    const onSubmitHandler=(event)=>{
     event.preventDefault()
     const data ={
         name:name,
         age:age,
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
               <input type="text"  ref={enteredName} value={name} onChange={nameHandler}/>
           </div>
           <div className={classes.inputList}>
               <label>Age (Years)</label>
               <input type="number"  ref={enteredAge} value={age} onChange={ageHandler}/>
           </div>
           <div className={classes.btn}>
               <button type="submit">Add User</button>
           </div>
           </div>
       </form>
    )
}

export default UserList