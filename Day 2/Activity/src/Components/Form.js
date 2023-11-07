import { User } from 'lucide-react';
import '../Assets/CSS/App.css';
const Form = ()=>{
    return(
        <div className='box' align = "center">
            <form className='form'>
                <br/>
                <h1><User/>ENROLLMENT FORM</h1>
                <input className="inp" type = "text" placeholder="NAME" required></input>
                <input className="inp" type = "number" placeholder='PHONE' required></input>
                <input className="inp" type = "email" placeholder='EMAIL' required></input>
                <input className="inp" type = "text" placeholder='USERNAME' required></input>
                <input className="inp" type = "password" placeholder='PASSWORD' required></input>
                <br/>
                <input type = "submit" className = "bttn" value="ENROLL"></input><br/>
            </form>
        </div>
    )
}
export default Form;