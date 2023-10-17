import React, { useState } from 'react';
import "./Task5.css";
function Task5() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthdateArray = birthdate.split('-');
    const birthYear = parseInt(birthdateArray[0]);
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div className='age_calculator'>
      <h1>Age Calculator</h1>
      <b><p>Enter your date of birth</p></b>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <div>
      <button onClick={calculateAge}>Calculate Age</button>
      </div>
      <div>
      <h3>{age && <p>Your are {age} years old</p> }</h3></div>
    </div>
  );
}

export default Task5;