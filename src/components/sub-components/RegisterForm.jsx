import React, { useContext, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { UserContext } from '../context/UserProvider';


const RegisterForm = () => {
    const {register} = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleRegister = async () => {
        const { email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert ('¡Las contraseñas deben coincidir!');
            return;
        }
        await register(email, password);
    }

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?t=st=1727571246~exp=1727574846~hmac=3b279f6fa10d08ab067dcb69215dabfa936e0ea01c094863b24a15525ffe4f3e&w=740'}}>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{maxWidth: '600px'}}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
    
              <MDBInput 
                wrapperClass='mb-4' 
                label='Your Name' 
                size='lg' 
                id='name' 
                type='text'
                value={formData.name}
                onChange={handleInputChange}
              />
    
              <MDBInput 
                wrapperClass='mb-4' 
                label='Your Email' 
                size='lg' 
                id='email' 
                type='email'
                value={formData.email}
                onChange={handleInputChange}
              />
    
              <MDBInput 
                wrapperClass='mb-4' 
                label='Password' 
                size='lg' 
                id='password' 
                type='password'
                value={formData.password}
                onChange={handleInputChange}
              />
    
              <MDBInput 
                wrapperClass='mb-4' 
                label='Repeat your password' 
                size='lg' 
                id='confirmPassword' 
                type='password'
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
    
              <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
              </div>
    
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleRegister}>Register</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
    };
    
    export default RegisterForm;