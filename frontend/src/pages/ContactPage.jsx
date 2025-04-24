import React from 'react'
import ContactForm from '../components/ContactForm'
import { useEffect, useState } from 'react'
import ConfirmationModal from "../components/ConfirmationModal";

function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [details, setDetails] = useState('')
    const [contacts, setContacts] = useState([])
    const [showModal, setShowModal] = useState(false)

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/contacts')
            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            setContacts(data)
            console.log('Server response:', data)
        }   catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleContactCreated = () => {
        fetchData()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
          const response = await fetch('http://localhost:8000/contacts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              details,
            }),
          })
    
          const result = await response.json()
          console.log('Server response:', result)
    
          if (response.ok) {
            console.log('Contact created successfully')
            handleContactCreated()   // call method to add new contact if successful
            setShowModal(true)  // Show confirmation modal
            // Clear all fields/inputs if successful 
            setName('')
            setEmail('')
            setPhone('')
            setDetails('')
    
          } else {
            console.error('Failed to create contact')
          }
        } catch (error) {
          console.error('Error:', error)
        }
    }

    return (
      <>
        <div className="side-by-side-desktop d-flex flex-column flex-xl-row align-items-xl-start justify-content-lg-center mx-auto gap-3">
          
          <div class="d-flex flex-column gap-3 col-4 col-md-3 col-lg-2 col-xl-2 mx-auto">
            <h1 className="text-center fs-3 m-0 mt-1">Contact Details</h1>
            <img src={'/owner_scott.png'} class="img-fluid rounded-start" alt="Scott's Picture" />
            <div>
              <p>Scott Didriksen</p>
              <p><a href="tel:+2087414097"><i class="fa-solid fa-phone me-2"></i>208-562-3174</a></p>
              <p><a href="mailto:vladkolmorgan@my.cwi.edu"><i class="fa-solid fa-envelope me-2"></i>scottdidriksen@cwi.edu</a></p>
            </div>
          </div>
          
          {/* ContactForm gets called and uses our empty state variables we already initialized, and fills them with values*/}
          <ContactForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            details={details}
            setDetails={setDetails}
            handleSubmit={handleSubmit}
          />
          {/*  Modal confirmation */}
          <ConfirmationModal
            show={showModal}
            onClose={() => setShowModal(false)}
            message="Your contact has been sent successfully!"
          />
        </div>
      </>
    )
}

export default ContactPage