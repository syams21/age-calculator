/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './App.css'
import React, { useState } from 'react';
// import moment from 'moment';
// import $ from 'jquery';

function App() {
    const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [resultYear, setResultYear] = useState('--');
  const [resultMonth, setResultMonth] = useState('--');
  const [resultDay, setResultDay] = useState('--');

  const handleInputChange = (event, setState) => {
    const value = event.target.value;
    setState(value);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      validateDate();
    }
  };

  const ageCalculator = (birthYear, birthMonth, birthDate) => {
    var fullDate = birthYear + "-" + birthMonth + "-" + birthDate;

    let diffYear = moment().diff(fullDate, 'years');
    let diffMonth = moment().subtract(diffYear, 'years').diff(fullDate, 'months');
    let diffDay = moment().subtract(diffYear, 'years').subtract(diffMonth, 'months').diff(fullDate, 'days');

    console.log(diffYear);
    console.log(diffMonth);
    console.log(diffDay);

    setResultYear(diffYear);
    setResultMonth(diffMonth);
    setResultDay(diffDay);
  };

  const validateDate = () => {
    var birthYear = $("#year").val();
    var birthMonth = $("#month").val();
    var birthDate = $("#day").val();
    var fullDate = birthYear + "-" + birthMonth + "-" + birthDate;

    var isValidDate = moment(fullDate, "YYYY-MM-DD", true).isValid();

    if (isValidDate && moment(fullDate).isSameOrBefore(moment(), 'day')) {
      ageCalculator(birthYear, birthMonth, birthDate);
      $(".date-input").removeClass("invalid-date");
    } else {
      $(".date-input").addClass("invalid-date");
    }
  };

  return (
    <>
        <div className="container">
        <div className="date-input">
            <div className="input">
            <label htmlFor="day">DAY</label>
            <input
                type="number"
                id="day"
                name="day"
                min="1"
                max="31"
                value={day}
                onChange={(e) => handleInputChange(e, setDay)}
                onKeyDown={handleEnter}
            />
            <p>Must be a valid day</p>
            </div>
            <div className="input">
            <label htmlFor="month">MONTH</label>
            <input
                type="number"
                id="month"
                name="month"
                min="1"
                max="12"
                value={month}
                onChange={(e) => handleInputChange(e, setMonth)}
                onKeyDown={handleEnter}
            />
            <p>Must be a valid month</p>
            </div>
            <div className="input">
            <label htmlFor="year">YEAR</label>
            <input
                type="number"
                id="year"
                name="year"
                min="0"
                max="9999"
                value={year}
                onChange={(e) => handleInputChange(e, setYear)}
                onKeyDown={handleEnter}
            />
            <p>Must be a valid year</p>
            </div>
        </div>

        <div className="result-design">
            <div className="strip"></div>
            <div className="result-image">
            <button onClick={validateDate}>
                <img src="images/icon-arrow.svg" alt="" />
            </button>
            </div>
        </div>

        <div className="age-result">
            <div className="result">
            <h1 className="result-num" id="resultYear">
                {resultYear}
            </h1>
            <h1>years</h1>
            </div>
            <div className="result">
            <h1 className="result-num" id="resultMonth">
                {resultMonth}
            </h1>
            <h1>months</h1>
            </div>
            <div className="result">
            <h1 className="result-num" id="resultDay">
                {resultDay}
            </h1>
            <h1>days</h1>
            </div>
        </div>
        </div>
    </>
  )
}

export default App;
