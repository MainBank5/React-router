import { useNavigate } from "react-router-dom";

const Contact = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h2>This is the contact page</h2>
            <button onClick={() => {
                navigate("/about")}}>Take me About</button>
        </div>
    );
};

export default Contact;