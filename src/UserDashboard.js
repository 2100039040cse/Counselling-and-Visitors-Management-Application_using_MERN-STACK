import React, { useState } from 'react';
import './App.css';

const UserDashboard = ({ handleLogout, appointments, setAppointments }) => {
  const [page, setPage] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleAppointmentClick = () => {
    setPage('appointment');
  };

  const handleVisitingClick = () => {
    setPage('visiting');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleFixAppointment = () => {
    const newAppointment = {
      id: new Date().getTime(),
      name: name,
      date: date,
      time: time,
      phone: phone,
      address: address,
      department: selectedDepartment,
      status: 'Pending',
    };
    setAppointments([...appointments, newAppointment]);
    setName('');
    setDate('');
    setTime('');
    setPhone('');
    setAddress('');
    setSelectedDepartment('');
  };

  const handleFixVisiting = () => {
    const newAppointment = {
      id: new Date().getTime(),
      name: name,
      date: date,
      time: time,
      phone: phone,
      address: address,
      department: selectedDepartment,
      status: 'Pending',
    };
    setAppointments([...appointments, newAppointment]);
    setName('');
    setDate('');
    setTime('');
    setPhone('');
    setAddress('');
    setSelectedDepartment('');
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div className="App">
      <h1>User Dashboard</h1>
      {page === 'appointment' && (
        <div>
          <h2>Fix Appointment</h2>
          <div>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              placeholder="Date"
            />
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              placeholder="Time"
            />
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
            />
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Address"
            />
            <select value={selectedDepartment} onChange={handleDepartmentChange}>
              <option value="">Select Department</option>
              <option value="Principal">Principal</option>
              <option value="Academics Dean">Academics Dean</option>
              <option value="CSE HOD">CSE HOD</option>
              <option value="Mech HOD">Mech HOD</option>
              <option value="Civil HOD">Civil HOD</option>
              <option value="EEE HOD">EEE HOD</option>
              <option value="ECE HOD">ECE HOD</option>
              <option value="AM HOD">AM HOD</option>
            </select>
            <button onClick={handleFixAppointment}>Fix Appointment</button>
          </div>
        </div>
      )}
      {page === 'visiting' && (
        <div>
          <h2>Fix Visiting</h2>
          <div>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              placeholder="Date"
            />
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              placeholder="Time"
            />
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
            />
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Address"
            />
            <select value={selectedDepartment} onChange={handleDepartmentChange}>
              <option value="">Select Department</option>
              <option value="Vijayawada Campus">Vijayawada Campus</option>
              <option value="Hyderabad Campus">Hyderabad Campus</option>
            </select>
            <button onClick={handleFixVisiting}>Fix Visiting</button>
          </div>
        </div>
      )}
      <div className="button-container">
        <button onClick={handleAppointmentClick}>Appointment</button>
        <button onClick={handleVisitingClick}>Visiting</button>
      </div>
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
          </li>
        ))}
      </ul>
      <button className="logout-button" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
