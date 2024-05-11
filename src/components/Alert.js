import React from 'react'

function Alert(props) {
    return (
        <div style={{height:'38px'}}>
           { props.alert && 
            <div className={`alert alert-${props.alert.type}` } style={{height:'35px',display:'flex',alignItems:'center'}} role="alert">
                 {props.alert.msg}
            </div>
            }
        </div>
       

    )
}

export default Alert
