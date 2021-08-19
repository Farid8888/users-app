import classes from './ErrorModal.module.css'



const ErrorModal =(props)=>{
    return(
        <div className={classes.backDrop} onClick={props.close}>
            <div className={classes.main}>
       <div className={classes.ErrorModal}>
        <div className={classes.error}>
           <h2>Invalid Input</h2>
           <p>Please enter a valid name and age (non-empty values).</p>
        </div>
        <div className={classes.btn}>
            <button type="button" onClick={props.close}>
              Okay
            </button>
        </div>
       </div>
       </div>
       </div>
    )
}

export default ErrorModal