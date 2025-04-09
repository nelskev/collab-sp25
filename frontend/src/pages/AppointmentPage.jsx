import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Container, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [details, setDetails] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const dateStr = selectedDate.toISOString().split('T')[0]; // Format date to 'YYYY-MM-DD'
        const response = await fetch(`/appointments/available-slots/${dateStr}`);
        const data = await response.json();

        if (response.ok) {
          setAvailableSlots(data);
        } else {
          setError(data.message || 'Failed to fetch available slots');
        }
      } catch (err) {
        setError('Failed to fetch available slots');
        console.error(err);
      }
    };

    // Fetch available slots when the date changes
    fetchAvailableSlots();
  }, [selectedDate]); // Re-fetch every time the date changes

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    
        if (!selectedTime) {
          setError('Please select a time slot.');
          return;
        }
    
        if (!formData.name || !formData.phone || !formData.email) {
          setError('All contact fields are required.');
          return;
        }
    
        try {
          const contactRes = await fetch('/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          const contactData = await contactRes.json();
    
          if (!contactRes.ok) {
            throw new Error(contactData.message || 'Error creating contact');
          }
    
          const appointmentRes = await fetch('/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              date: selectedDate,
              time: selectedTime,
              details: details,
              contact: contactData._id,
            }),
          });
    
          if (!appointmentRes.ok) {
            throw new Error('Error creating appointment');
          }
    
          setFormSubmitted(true);
          setFormData({ name: '', phone: '', email: '' });
          setSelectedTime(null);
          setDetails('');
        setAvailableSlots([]);
        setSelectedDate(new Date());
        } catch (err) {
          console.error(err);
          setError(err.message);
        }
      };
    

      return (
        <Container className="my-5">
          <h2 className="mb-4">Book an Appointment</h2>
    
          {error && <Alert variant="danger">{error}</Alert>}
          {formSubmitted ? (
            <Alert variant="success">
               Your appointment has been booked successfully!
            </Alert>
          ) : (
            <>
              <Row className="mb-4">
                <Col md={6}>
                  <h5>Select a Date:</h5>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    className="form-control"
                  />
                </Col>
              </Row>
    
              <Row className="mb-4">
                <Col>
                  <h5>Select a Time Slot:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {availableSlots.length === 0 ? (
                      <p>No available slots for this date.</p>
                    ) : (
                      availableSlots.map((slot, idx) => (
                        <Button
                          key={idx}
                          variant={selectedTime === slot ? 'primary' : 'outline-primary'}
                          onClick={() => handleTimeSelect(slot)}
                        >
                          {slot}
                        </Button>
                      ))
                    )}
                  </div>
                </Col>
              </Row>
                    
              {selectedTime && (
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <h5>Selected Appointment</h5>
                        <p><strong>Date:</strong> {selectedDate.toDateString()}</p>
                        <p><strong>Time:</strong> {selectedTime}</p>                      

                      </Card.Body>
                    </Card>
                    <Form.Group className="mt-3">
                          <Form.Label>Details about your appointment:</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Describe your appointment needs..."
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                          />
                        </Form.Group>
                  </Col>
                </Row>
              )}
              
              <Row className="mb-4">
                <Col md={6}>
                  <h5>Contact Information:</h5>
                  <ContactForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </Col>
              </Row>
    
              
            </>
          )}
        </Container>
      );
};

export default AppointmentPage;
