import React, { useEffect, useState } from "react";
import ContactForm from '../components/ContactForm'
import ConfirmationModal from "../components/ConfirmationModal";
import userFrontendSchema from "../admin/validation/contactValidaton";

const ContactPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [details, setDetails] = useState('')
    const [contacts, setContacts] = useState([])
    const [showModal, setShowModal] = useState(false)

    //JOI
    const [errorMessage, setErrorMessage] = useState('')
    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [phoneError, setPhoneError] = useState(null)
    const [detailsError, setDetailsError] = useState(null)
    const [allErrors, setAllErrors] = useState([])

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
        document.title = 'Contact'
        fetchData()
    }, [])

    const handleContactCreated = () => {
        fetchData()
    }

    //Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault()
        //JOI Errors
        setErrorMessage('') 
        // Clear Joi
        setNameError('')
        setEmailError('')
        setPhoneError('')
        setDetailsError('')
        setAllErrors([])
        // Use Joi to validate the data
        const validationResult = userFrontendSchema.validate({ name: name, email: email, phone: phone, details: details },
          { abortEarly: false })

        if (validationResult.error) {
          const errors = validationResult.error.details
          errors.forEach(error=>{
            switch(error.context.key){
                case 'name':
                    setNameError(error.message)
                    break;
                case 'email':
                    setEmailError(error.message)
                    break;
                case 'phone':
                    setPhoneError(error.message)
                    break;
                case 'details':
                    setDetailsError(error.message)
                    break;
                default:
                    break;
            }
        })
        const messages = errors.map(error => error.message)
        setAllErrors(messages)

        return
        }
        //Post Data
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
          <div class="d-flex flex-column gap-3 col-6 col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
            <h1 className="text-center fs-3 m-0 mt-1">Contact Details</h1>
            <img src={'/owner_scott.png'} class="img-fluid rounded-start mx-auto" alt="Scott's Picture" width="250" height="auto" />
            <div>
              <p>Scott Didriksen</p>
              <p><a href="tel:+2085623174"><i class="fa-solid fa-phone me-2"></i>208-562-3174</a></p>
              <p><a href="mailto:scottdidriksen@cwi.edu"><i class="fa-solid fa-envelope me-2"></i>scottdidriksen@cwi.edu</a></p>
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

            allErrors={allErrors}             // JOI all errors
            nameError={nameError}
            emailError={emailError}
            phoneError={phoneError}
            detailsError={detailsError}       // JOI
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