import React, { useContext, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { UserContext } from '../context/UserProvider';

  const LoginForm = () => {
    const { login } = useContext(UserContext); // Obtener la función login del contexto
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleLogin = async () => {
      const { email, password } = formData;
  
      // Llamar a la función login del UserContext
      await login(email, password);
    };

    return (
        <MDBContainer className='my-5'>
          <MDBCard>
            <MDBRow className='g-0 d-flex align-items-center'>
              <MDBCol md='4'>
                <MDBCardImage 
                  src='https://img.freepik.com/free-photo/delicious-pizza-studio_23-2151846554.jpg?t=st=1727571803~exp=1727575403~hmac=35d3b09252b99462fb2d782bbdc679134e1e71d1db627935810ea72fb4d78c17&w=360' 
                  alt='pizza' 
                  className='rounded-t-10 rounded-tr-md-0' 
                  fluid 
                />
              </MDBCol>
    
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBInput 
                    wrapperClass='mb-4' 
                    label='Email address' 
                    id='email' 
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                  />
    
                  <MDBInput 
                    wrapperClass='mb-4' 
                    label='Password' 
                    id='password' 
                    type='password'
                    value={formData.password}
                    onChange={handleInputChange}
                  />
    
                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>
    
                  <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      );
    };
    
    export default LoginForm;