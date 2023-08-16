import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import './App.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleUserLogin = () => {
    if (!username || !password) {
      alert('Please enter the credentials.');
      return;
    }

    if (username === 'user1' && password === 'user1') {
      setLoggedInUser('user');
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handleAdminLogin = () => {
    if (!username || !password) {
      alert('Please enter the credentials.');
      return;
    }

    if (username === 'admin' && password === 'admin') {
      setLoggedInUser('admin');
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setUsername('');
    setPassword('');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setShowErrorMessage(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowErrorMessage(false);
  };

  const handleConfirmAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) => {
        if (appointment.id === id) {
          return { ...appointment, status: 'Confirmed' };
        }
        return appointment;
      })
    );
  };

  const handleCancelAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) => {
        if (appointment.id === id) {
          return { ...appointment, status: 'Canceled' };
        }
        return appointment;
      })
    );
  };

  return (
    <div className="container">
      {!loggedInUser && (
        <div className="login-container">
          <h1 className="center">Welcome to the Appointment Management System</h1>
          <div className="center">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </div>
          {showErrorMessage && <p className="error">Invalid credentials. Please try again.</p>}
          <div className="center">
            <button onClick={handleUserLogin}>User Login</button>
            <button onClick={handleAdminLogin}>Admin Login</button>
          </div>
        </div>
      )}
      {loggedInUser === 'admin' && (
        <AdminDashboard
          handleLogout={handleLogout}
          appointments={appointments}
          handleConfirmAppointment={handleConfirmAppointment}
          handleCancelAppointment={handleCancelAppointment}
        />
      )}
      {loggedInUser === 'user' && (
        <UserDashboard
          handleLogout={handleLogout}
          appointments={appointments}
          setAppointments={setAppointments}
        />
      )}
    </div>
  );
};

export default App;
