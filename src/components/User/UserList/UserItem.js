import classes from './UserItem.module.css'




const UserItem =(props)=>{
    return(
        <div className={classes.main}>
       <div className={classes.text}>
           <div className={classes.input}>
           {props.name} {props.age}
           </div>
           </div>
       </div>
    )
}

export default UserItem