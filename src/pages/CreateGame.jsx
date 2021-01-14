import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';

// icons
import { Icon1 } from '../assets/images/icon1';
import ArrowBack from '../assets/images/arrow-back.svg';

const LocationArr = [
  { name: 'Hujan angin Sport Centre, London' },
  { name: 'The St. Bonitaria Sport Centre, London' },
  { name: 'Wonderful Happiness Sport Centre, London' },
  { name: 'Makan Ikan Asin Pake Sambel Sport Centre, London' },
  { name: 'Another Boccia Sport Centre, London' },
  { name: 'Wonderful Sentra 2 Sport Centre, London' },
];

export const CreateGame = () => {
  const [value, onChange] = useState(new Date());
  return (
    <main className='container-fluid mb-5 pb-5 px-0 px-md-3'>
      <form>
        <div className='px-3 px-md-3'>
          <div className='mb-2'>
            <Link to='/' className='p-0'>
              <img height={40} width={40} src={ArrowBack} alt='Back' />
            </Link>
          </div>
          <div className='d-flex'>
            <span>
              <Icon1 className='mr-2' />
            </span>
            <h4 className='font-weight-bold text-dark mb-4 '>Create Game</h4>
          </div>
          <Row>
            <Col>
              <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
                <div className='font-weight-bold text-capitalize h5'>
                  Select Location
                </div>
                {LocationArr.map((value) => (
                  <div className='border-bottom py-3 mb-2'>
                    <label class='checkbox-container'>
                      <span className='text-black-50'>{value.name}</span>
                      <input type='radio' name='radio' />
                      <span class='checkmark'></span>
                    </label>
                  </div>
                ))}
                <div className='border-bottom py-3 mb-2'>
                  <label class='checkbox-container'>
                    <span className='text-black-50'>Other:</span>
                    <input type='radio' name='radio' />
                    <span class='checkmark'></span>
                  </label>
                  <Form.Control
                    className='ml-auto p-4'
                    type='text'
                    placeholder='Other'
                    style={{ width: '90%' }}
                  />
                </div>
              </section>
            </Col>
            <Col lg={4} className='d-flex flex-column'>
              <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
                <div className='font-weight-bold text-capitalize h5'>Date</div>
                <div className='calendar-container d-flex justify-content-center align-items-center'>
                  <Calendar onChange={onChange} value={value} />
                </div>
                <div>
                  <div className='font-weight-bold text-capitalize h5 mt-3'>
                    Time
                  </div>
                  <input className='form-control' type='time' />
                </div>
              </section>
            </Col>
            <Col className='d-flex flex-column' lg={3}>
              <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
                <div className='font-weight-bold h5'>Type of Pitch</div>
                <div className='row mx-0 justify-content-around my-auto'>
                  <Button
                    variant='four'
                    className='rounded-pill px-4 border-0 mt-2'
                  >
                    5
                  </Button>
                  <Button
                    variant='four'
                    className='rounded-pill active px-4 border-0 mx-2 mt-2'
                  >
                    7
                  </Button>
                  <Button
                    variant='four'
                    className='rounded-pill px-4 border-0 mt-2'
                  >
                    11
                  </Button>
                </div>
              </section>

              <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
                <div className='font-weight-bold h5'>Player Cost</div>
                <div className='row mx-0 align-items-center justify-content-around my-auto'>
                  <span className='mt-2'>$</span>
                  <input
                    type='number'
                    className='form-control p-4 mx-2 mt-2'
                    placeholder='Cost'
                    style={{ width: 130 }}
                  />
                  <span className='text-black-50 mt-2'>/ Player</span>
                </div>
              </section>

              <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
                <div className='font-weight-bold h5'>Who are You</div>
                <div className='row mx-0 justify-content-around my-auto'>
                  <Button
                    block
                    variant='four'
                    className='rounded-pill py-2 border-0 mb-3'
                  >
                    I will play in this game
                  </Button>
                  <Button
                    block
                    variant='four'
                    className='rounded-pill py-2 border-0 active'
                  >
                    I’m an organizer
                  </Button>
                </div>
              </section>
            </Col>
            <Col xs={12} lg={9}>
              <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
                <div className='font-weight-bold h5'>Set Game as</div>
                <Row className='row-cols-1 row-cols-lg-2 mx-0 mt-3'>
                  <div>
                    <label class='checkbox-container'>
                      <span>
                        <b>Public </b>
                        <p className='small mt-2'>
                          It’s mean that anyone can join the game and see the
                          game in the list of games, so it’s publicly published
                        </p>
                      </span>
                      <input type='radio' name='radio' />
                      <span class='checkmark'></span>
                    </label>
                  </div>

                  <div>
                    <label class='checkbox-container'>
                      <span>
                        <b>Private </b>
                        <p className='small mt-2'>
                          It’s mean that only people that has a generated code
                          given can join the game.
                        </p>
                      </span>
                      <input type='radio' name='radio' />
                      <span class='checkmark'></span>
                    </label>
                  </div>
                </Row>
              </section>
            </Col>
            <Col>
              <section className='p-2 mb-4 h-100 d-flex flex-column justify-content-around'>
                <div className='d-flex align-items-baseline'>
                  <span
                    className='d-flex bg-primary rounded-circle mr-3'
                    style={{ padding: 3 }}
                  ></span>
                  <div className='text-black-50 small'>
                    Please check all the information, if you’ve any mistake you
                    can edit it right away. If all done, you can publish the
                    game.
                  </div>
                </div>
                <Button
                  type='submit'
                  block
                  variant='four'
                  className='rounded-pill py-3 border-0 active mt-3'
                >
                  Submit and Publish
                </Button>
              </section>
            </Col>
          </Row>
        </div>
      </form>
    </main>
  );
};
