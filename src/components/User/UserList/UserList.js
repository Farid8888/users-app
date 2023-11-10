import UserItem from './UserItem'
import classes from './UserList.module.css'


const UserList =(props)=>{
    return(
       <div className={classes.List}>
         {props.users.map(user=>{
             return <UserItem key={user.id} id={user.id}
                               name={user.name} age={user.age}/>
         })}
       </div>
    )
}


export default UserList