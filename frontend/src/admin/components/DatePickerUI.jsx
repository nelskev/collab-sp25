import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerUI({ selectedDateTime, setSelectedDateTime }) {

  // DAY OF WEEK
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const today = new Date();

  return (
    <div className="datepicker-wrapper d-flex flex-column align-items-center gap-2 pt-2 pb-3 mx-auto">
      <label className="datepicker-label fw-semibold">Select appt date & time:</label>
      <div className="custom-datepicker-input">
        <img src={'./calendar.png'} alt="" />
        <DatePicker className='datepicker bg-transparent fw-semibold'
            // showIcon
            selected={selectedDateTime}
            onChange={(date) => setSelectedDateTime(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm"
            //timeFormat="HH:mm"
            timeIntervals={60}
            minTime={new Date(0, 0, 0, 8)}  // 8 AM
            maxTime={new Date(0, 0, 0, 17)} // 5 PM
            filterDate={isWeekday}
            minDate={today} 
            //filterTime={filterPassedTime}
            />
      </div>
    </div>
  );
}

export default DatePickerUI;



/*

https://github.com/Hacker0x01/react-datepicker/blob/main/docs/datepicker.md


isWeekday(date):   https://reactdatepicker.com/#example-filter-dates
----------------
This function takes a Date object as input.
It checks the day of the week using date.getDay().
It returns true if the day is Monday (1) through Friday (5), and false otherwise.
This function is then passed to the filterDate prop.

filterDate={isWeekday}:
----------------------
This prop disables the selection of dates for which isWeekday returns false.

==========================================================================================================

filterTime(time):  https://reactdatepicker.com/#example-filter-times
-----------------
This function takes a Date object representing a time as input.
It gets the hour using time.getHours().
It returns true if the hour is between 8 and 16 (inclusive), and false otherwise.
This function is passed to the filterTime prop.

filterTime={filterTime}:
-----------------------
This prop disables the selection of times for which filterTime returns false.

With these changes, the DatePicker will only allow users to select dates from Monday to Friday and times from 8:00 AM to 4:59 PM.
*/