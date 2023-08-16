import React from 'react';
import './App.css';

const AdminDashboard = ({
  handleLogout,
  appointments,
  handleConfirmAppointment,
  handleCancelAppointment,
}) => {
  const handleLogoutClick = () => {
    handleLogout();
  };

  const handleConfirmClick = (id) => {
    handleConfirmAppointment(id);
  };

  const handleCancelClick = (id) => {
    handleCancelAppointment(id);
  };

  return (
    <div className="App">
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogoutClick}>Logout</button>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>Name: {appointment.name}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Phone: {appointment.phone}</p>
            <p>Address: {appointment.address}</p>
            {appointment.department && (
              <p>Department: {appointment.department}</p>
            )}
            <p>Status: {appointment.status}</p>
            {appointment.status === 'Pending' && (
              <div>
                <button onClick={() => handleConfirmClick(appointment.id)}>
                  Confirm
                </button>
                <button onClick={() => handleCancelClick(appointment.id)}>
                  Cancel
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
