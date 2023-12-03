import '../style/Alert.css'

const Alert = ({alert}) => {
    let alertClasses = 'alert-box';
  /* estilos de css */
    if (alert.error) {
      alertClasses += ' incorrect';
    } else {
      alertClasses += ' correct';
    }
    return (
      <div className={alertClasses}>
        {alert.msg}
      </div>
      
    )
  }
  
  export default Alert