import { BrowserRouter, Route, Routes } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <h2>Login</h2>

        </div>
        </>
    )
}