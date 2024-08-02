// src/components/Home.js
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token'); // Remove token from local storage
        navigate('/');
    };

    return (
        <div>
            <h2>Home</h2>
            
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
