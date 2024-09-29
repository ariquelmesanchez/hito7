import React, { useContext } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { UserContext } from '../context/UserProvider';

export const Profile = () => {
  const { email, logout } = useContext(UserContext); // Acceder al email y la función logout del contexto

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage
                    src="https://img.freepik.com/free-vector/pizza-boy-cartoon_23-2147498558.jpg?t=st=1727581567~exp=1727585167~hmac=247062540ed31dc89d0ee1c15f1b164671a20056976351c358a8a934c183b303&w=740"
                    alt="Avatar"
                    className="my-5 rounded-circle"
                    style={{ width: '80px' }}
                    fluid
                  />
                  <MDBTypography tag="h5">User Profile</MDBTypography>
                  <MDBCardText>{email ? email : 'No Email Available'}</MDBCardText> {/* Mostrar el email */}
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{email ? email : 'info@example.com'}</MDBCardText> {/* Mostrar el email */}
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>

                    
                    <MDBBtn className="mt-4" color="danger" onClick={logout}>Logout</MDBBtn>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}