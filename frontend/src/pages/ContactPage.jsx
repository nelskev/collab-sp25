import React from 'react'
import ContactForm from '../components/ContactForm'
import { useEffect, useState } from 'react'

function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [details, setDetails] = useState('')
    const [contacts, setContacts] = useState([])

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
        <div className="container d-flex flex-column bg-light border border-1 rounded-4 gap-0 gap-lg-2 py-2 p-lg-3 my-2 my-lg-4">
          <h1 className="text-center fs-3 m-0 mt-1">Contact page 2</h1>
          <div>
            <img src={'./scott.jpg'} class="img-fluid rounded-start" alt="Scott's Picture" />
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
        </div>
        </>
    )
}

export default ContactPage