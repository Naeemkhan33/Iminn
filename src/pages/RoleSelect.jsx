import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export const RoleSelect = () => {
  return (
    <section className='text-center'>
      <div className='mb-5'>
        <img src={require('../assets/images/logo.svg').default} alt='Logo' />
      </div>
      <div>
        <div className='im-text-primary font-weight-bold mb-3'>
          Personalize Your Profile
        </div>
        <h4 className='font-weight-bold mb-2'>
          Select a Role that’s Fit with you!
        </h4>
        <Row className='row-cols-1 row-cols-md-2 row-cols-xl-4 mx-0'>
          <Col className='d-flex justify-content-center'>
            <div style={{ width: 250 }}>
              <Button
                variant='btn-link'
                className='rounded-xl w-100 d-flex justify-content-center'
              >
                <img
                  src={require('../assets/images/role-select1.svg').default}
                  alt='pic'
                />
              </Button>
            </div>
          </Col>

          <Col className='d-flex justify-content-center'>
            <div style={{ width: 250 }}>
              <Button
                variant='btn-link'
                className='rounded-xl w-100 d-flex justify-content-center'
              >
                <img
                  src={require('../assets/images/role-select2.svg').default}
                  alt='pic'
                />
              </Button>
            </div>
          </Col>

          <Col className='d-flex justify-content-center'>
            <div style={{ width: 250 }}>
              <Button
                variant='btn-link'
                className='rounded-xl w-100 d-flex justify-content-center'
              >
                <img
                  src={require('../assets/images/role-select3.svg').default}
                  alt='pic'
                />
              </Button>
            </div>
          </Col>

          <Col className='d-flex justify-content-center'>
            <div style={{ width: 250 }}>
              <Button
                variant='btn-link'
                className='rounded-xl w-100 d-flex justify-content-center'
              >
                <img
                  src={require('../assets/images/role-select4.svg').default}
                  alt='pic'
                />
              </Button>
            </div>
          </Col>
        </Row>
        <div className='text-center col-12 col-md-6 col-xl-2 mx-auto mt-2'>
          <Button variant='three' block className='rounded-pill py-3'>
            Apply
          </Button>
        </div>
      </div>
    </section>
  );
};
