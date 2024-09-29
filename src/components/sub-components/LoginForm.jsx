import React from 'react';
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

const LoginForm = () => {
    return (
        <MDBContainer className='my-5'>
          <MDBCard>
    
            <MDBRow className='g-0 d-flex align-items-center'>
    
              <MDBCol md='4'>
                <MDBCardImage src='https://img.freepik.com/free-photo/delicious-pizza-studio_23-2151846554.jpg?t=st=1727571803~exp=1727575403~hmac=35d3b09252b99462fb2d782bbdc679134e1e71d1db627935810ea72fb4d78c17&w=360' alt='pizza' className='rounded-t-10 rounded-tr-md-0' fluid />
              </MDBCol>
    
              <MDBCol md='8'>
    
                <MDBCardBody>
    
                  <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
    
                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>
    
                  <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
    
                </MDBCardBody>
    
              </MDBCol>
    
            </MDBRow>
    
          </MDBCard>
        </MDBContainer>
      );
    }

export default LoginForm
