import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Style.css"
function Signup() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    console.log(username)
    const move = useNavigate()
    function allow() {
        if (!username.trim()) {
            alert("Username can't be emty")
        }
        else if (username.length < 5) {
            alert("Username length should be atleast 5 characters")
        }
        else if (username.length > 15) {
            alert("Username length should be atmost 15 characters")
        }
        else if (!email.trim()) {
            alert("Email can't be empty")
        }
        else if (!email.includes("a" && ".")) {
            alert("Email is invalid")
        }
        else if (!password.trim()) {
            alert("Password can't be empty")
        }
        else if (!confirmPassword.trim()) {
            alert("Confirm password can't be empty")
        }
        else if (password !== confirmPassword) {
            alert("Confirm password not matched with password")
        }
        else {
            move("/dashboard")
        }
    }
    return (
        <div id="page">
            <h1>SignUp Page</h1>
            <div>
                <form>
                    <label>Username<span>*</span></label>
                    <br />
                    <input type="text" onChange={(e) => {

                        setUserName(e.target.value)
                    }} />
                    <br />
                    <br />
                    <label>E-mail<span>*</span></label>
                    <br />
                    <input type="email" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <br />
                    <br />
                    <label>Password<span>*</span></label>
                    <br />
                    <input type="password" onChange={(e) => {
                        setpassword(e.target.value)
                    }} />
                    <br />
                    <br />
                    <label>Verify-password<span>*</span></label>
                    <br />
                    <input type="password" onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }} />
                    <br />
                    <br />
                    <label>Technologies<span>*</span></label>
                    <br />
                    <select id="option">
                        <option>Javascript</option>
                        <option>Java</option>
                        <option>Python</option>
                        <option>Scala</option>
                        <option>Spark</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={() => {
                        allow()
                    }}>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
export default Signup;