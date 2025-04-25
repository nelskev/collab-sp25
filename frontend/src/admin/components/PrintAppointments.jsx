import React from 'react';

//Receives props from AdminAppointmentPage when the button is clicked and opens print window
function PrintAppointments({ appointments = [], selectedDate }) {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) 
        return;
    
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
                  th>Email</th>
                  <th>Phone</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                ${appointments.map(appt => `
                  <tr>
                    <td>${appt.time}</td>
                    <td>${appt.name}</td>
                    <td>${appt.phone}</td>
                    <td>${appt.email}</td>
                    <td>${appt.details}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
        ` : ''}
        </body>
      </html>
    `;

    printWindow.document.open();
    Document.write(htmlContent);
    printWindow.document.close();
    
    // Sets Timeout 200 is probably excessive but old stuff is out there
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 200);
    };
  };

  // validation just in case
  const ValidDate = selectedDate instanceof Date && !isNaN(selectedDate);

  return (
    <button
        className="btn btn-secondary"
        onClick={handlePrint}
        disabled={!ValidDate}
    >
      Print {ValidDate ? selectedDate.toDateString() : ''}
    </button>
  );
}

export default PrintAppointments;