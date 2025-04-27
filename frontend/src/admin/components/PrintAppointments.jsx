import React from 'react';
import formatTimeAmPm from '../../../helpers/timeConversion';

//Receives props from AdminAppointmentPage when the button is clicked and opens print window
function PrintAppointments({ appointments = [], selectedDate }) {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) 
        return;

    //Sorts by time
    const sortedAppointments = [...appointments].sort((a, b) => {
        const [hA, mA] = a.time.split(':').map(Number);
        const [hB, mB] = b.time.split(':').map(Number);
        return hA - hB || mA - mB;
      });
    
    //Sets up the table, formatting needs to be applied here from what I can figure out   
    const htmlContent = `
      <html>
        <head>
          <title>Appointments for ${selectedDate.toDateString()}</title>
          <style>
            body {
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
              margin: 20px;
              color: #333;
            }
            h1 {
              font-size: 1.8rem;
              color: #052c65;
              margin-bottom: 1rem;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 1rem;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <h1>Scheduled Appointments for: ${selectedDate.toDateString()}</h1>
          ${appointments.length > 0 ? `
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
            ${sortedAppointments.map(appt => {
                const formattedTime = formatTimeAmPm(appt.time);
                return `
            <tr>
                <td>${formattedTime}</td>
                <td>${appt.name}</td>
                <td>${appt.phone}</td>
                <td>${appt.email}</td>
                <td>${appt.details}</td>
                </tr>
            `;
            }).join('')}
            </tbody>
            </table>
            `: ''}
            </body>
        </html>
        `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Sets Timeout 200 is probably excessive but old stuff is out there
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 200);
    };
  };

  // validation just in case
  const ValidDate = selectedDate instanceof Date && !isNaN(selectedDate);

  return (
    <button
        className="btn btn-primary"
        onClick={handlePrint}
        disabled={!ValidDate}
    >
      Print {ValidDate ? selectedDate.toDateString() : ''}
    </button>
  );
}

export default PrintAppointments;