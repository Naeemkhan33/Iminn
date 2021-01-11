import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { AiFillHeart, AiOutlinePlus } from 'react-icons/ai';
import { BiBookOpen, BiTimeFive } from 'react-icons/bi';
import { GiGamepadCross } from 'react-icons/gi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';

import imageOne from '../assets/images/image-1.svg';
import { Link } from 'react-router-dom';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

const popover1 = (
  <Popover id='key-1' className='rounded-xl  shadow-sm border-0'>
    <div className='p-3'>
      <div className='font-weight-bold'>
        <span className='im-text-primary mr-1'>1.</span>
        <span>Let’s Setting Up Your Profile</span>
      </div>
      <p className='text-black-50 mt-4 small'>
        Let’s setting up your profile by uploading a profile picture, and then
        you are ready to go!
      </p>
    </div>
  </Popover>
);

const popover3 = (
  <Popover id='key-3' className='rounded-xl  shadow-sm border-0'>
    <div className='p-3'>
      <div className='font-weight-bold'>
        <span className='im-text-primary mr-1'>3.</span>
        <span>Create a Public Game!</span>
      </div>
      <p className='text-black-50 mt-4 small'>
        Yes, you can create and publish a public game. Share it to your friends
        and make it awesome!
      </p>
    </div>
  </Popover>
);

const popover4 = (
  <Popover id='key-4' className='rounded-xl  shadow-sm border-0'>
    <div className='p-3'>
      <div className='font-weight-bold'>
        <span className='im-text-primary mr-1'>4.</span>
        <span>Easy Access Notification</span>
      </div>
      <p className='text-black-50 mt-4 small'>
        The notification tab is easy access and you can see all the new
        notifications easily here.
      </p>
    </div>
  </Popover>
);

export const Dashboard = () => {
  const [state, setState] = useState(true);
  return (
    <main className='container mb-5 pb-5'>
      <div className='px-3'>
        <h4 className='font-weight-bold text-black-50 mb-4'>Games</h4>
        <Row>
          <Col>
            <section className='rounded-xl bg-white p-4 mb-4'>
              <div className='row mx-0 justify-content-center align-items-center'>
                <span
                  className='mr-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm'
                  style={{
                    width: 110,
                    height: 100,
                    backgroundColor: '#FFF3EE',
                  }}
                >
                  <img width='70%' height='70%' src={imageOne} alt='' />
                </span>
                <span>
                  <h6 className='font-weight-bold mb-2 mt-2 mt-sm-0'>
                    <span className='text-uppercase'>FCL</span>
                    <span className='mx-1'>vs</span>
                    <span className='text-uppercase'>FCV</span>
                  </h6>
                  <div className='small text-black-50'>5:00 pm, London</div>

                  <div className='d-flex mt-3'>
                    <span>
                      <img
                        className='rounded-circle object-cover'
                        width={30}
                        height={30}
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                  </div>
                </span>
                <span className='mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3'>
                  <Button
                    block
                    variant='three'
                    className='rounded-pill py-3 d-flex justify-content-center align-items-center'
                  >
                    Join Now
                  </Button>
                </span>
              </div>
            </section>

            <section className='rounded-xl bg-white p-4 mb-4'>
              <div className='row mx-0 justify-content-center align-items-center'>
                <span
                  className='mr-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm'
                  style={{
                    width: 110,
                    height: 100,
                    backgroundColor: '#FFF3EE',
                  }}
                >
                  <img width='70%' height='70%' src={imageOne} alt='' />
                </span>
                <span>
                  <h6 className='font-weight-bold mb-2 mt-2 mt-sm-0'>
                    <span className='text-uppercase'>FCL</span>
                    <span className='mx-1'>vs</span>
                    <span className='text-uppercase'>FCV</span>
                  </h6>
                  <div className='small text-black-50'>5:00 pm, London</div>

                  <div className='d-flex mt-3'>
                    <span>
                      <img
                        className='rounded-circle object-cover'
                        width={30}
                        height={30}
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src='https://source.unsplash.com/random'
                        alt=''
                      />
                    </span>
                  </div>
                </span>
                <span className='mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3'>
                  <Button
                    block
                    variant='light'
                    className='rounded-pill py-3 d-flex justify-content-center align-items-center'
                  >
                    <span className='text-muted '>Full</span>
                  </Button>
                </span>
              </div>
            </section>

            <main>
              <div className='mb-4'>
                <BiBookOpen color='#ff8252' size={20} className='mr-2' />
                <span className='font-weight-bold text-capitalize'>
                  Games Nearby
                </span>
              </div>
              <section className='rounded-xl bg-white p-4 mb-4 position-relative'>
                <div className='text-right'>
                  <Button variant='link' className='p-0'>
                    <AiFillHeart color='#ff8252' size={26} />
                  </Button>
                </div>
                <div className='row mx-0 justify-content-center align-items-center'>
                  <span
                    className='mr-md-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm'
                    style={{
                      width: 220,
                      height: 180,
                      backgroundColor: '#FFF3EE',
                    }}
                  >
                    <img
                      className='rounded-xl object-cover'
                      width='100%'
                      height='100%'
                      src='https://source.unsplash.com/random'
                      alt=''
                    />
                  </span>
                  <div className='text-center mt-3 mt-md-0'>
                    <h5 className='font-weight-bold mb-2'>
                      <span className='text-uppercase'>FCL</span>
                      <span className='mx-1'>vs</span>
                      <span className='text-uppercase'>FCV</span>
                    </h5>
                    <div className='small text-black-50 mb-2'>
                      Location: London
                    </div>
                    <div className='small text-black-50 mb-2'>
                      Ground: Middlesex
                    </div>
                    <div className='d-flex mt-3'>
                      <span className='mr-4 d-flex align-items-center'>
                        <BiTimeFive color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>4:00 pm</span>
                      </span>

                      <span className='d-flex align-items-center'>
                        <FiUsers color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>5 Players</span>
                      </span>
                    </div>
                  </div>
                  <span className='mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3'>
                    <Button
                      block
                      variant='three'
                      className='rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize'
                    >
                      More info
                    </Button>
                  </span>
                </div>
              </section>

              <section className='rounded-xl bg-white p-4 mb-4 position-relative'>
                <div className='text-right'>
                  <Button variant='link' className='p-0'>
                    <AiFillHeart color='#ff8252' size={26} />
                  </Button>
                </div>
                <div className='row mx-0 justify-content-center align-items-center'>
                  <span
                    className='mr-md-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm'
                    style={{
                      width: 220,
                      height: 180,
                      backgroundColor: '#FFF3EE',
                    }}
                  >
                    <img
                      className='rounded-xl object-cover'
                      width='100%'
                      height='100%'
                      src='https://source.unsplash.com/random'
                      alt=''
                    />
                  </span>
                  <div className='text-center mt-3 mt-md-0'>
                    <h5 className='font-weight-bold mb-2'>
                      <span className='text-uppercase'>FCL</span>
                      <span className='mx-1'>vs</span>
                      <span className='text-uppercase'>FCV</span>
                    </h5>
                    <div className='small text-black-50 mb-2'>
                      Location: London
                    </div>
                    <div className='small text-black-50 mb-2'>
                      Ground: Middlesex
                    </div>
                    <div className='d-flex mt-3'>
                      <span className='mr-4 d-flex align-items-center'>
                        <BiTimeFive color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>4:00 pm</span>
                      </span>

                      <span className='d-flex align-items-center'>
                        <FiUsers color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>5 Players</span>
                      </span>
                    </div>
                  </div>
                  <span className='mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3'>
                    <Button
                      block
                      variant='three'
                      className='rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize'
                    >
                      More info
                    </Button>
                  </span>
                </div>
              </section>
            </main>
          </Col>
          <Col lg={4}>
            <div className='rounded-xl bg-white p-4 mb-4'>
              <div className='mb-4 d-flex align-items-center'>
                <GiGamepadCross color='#ff8252' size={20} className='mr-2' />
                <span className='font-weight-bold text-capitalize'>
                  Create Game
                </span>
              </div>
              <p className='text-black-50 mb-4 small'>
                Create new game so you can invite all of your friends to the
                game and make it awesome!
              </p>

              <div>
                <OverlayTrigger
                  trigger='click'
                  placement='auto'
                  overlay={popover3}
                >
                  <Button
                    block
                    variant='three'
                    className='rounded-pill py-3 d-flex justify-content-center align-items-end text-capitalize'
                  >
                    <AiOutlinePlus size={20} className='mr-2' />
                    <span>Create New Game</span>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>

            <div className='rounded-xl bg-white p-4 mb-4'>
              <div className='mb-4 d-flex align-items-center'>
                <IoIosNotificationsOutline
                  color='#ff8252'
                  size={20}
                  className='mr-2'
                />
                <span className='font-weight-bold text-capitalize'>
                  Notifications
                </span>
              </div>

              <OverlayTrigger
                trigger='click'
                placement='auto'
                overlay={popover4}
              >
                <div
                  className='small d-flex align-items-baseline'
                  style={{ cursor: 'pointer' }}
                  onClick={() => setState(!state)}
                >
                  <span
                    className='rounded-circle mr-2'
                    style={{
                      padding: 3,
                      backgroundColor: '#ff8252',
                    }}
                  ></span>
                  <div>
                    <span>
                      Welcome to Immin, start exploring some matches now!
                    </span>
                    <Link className='im-text-primary ml-1'>Explore Match</Link>
                  </div>
                </div>
              </OverlayTrigger>

              {state ? (
                <div>
                  <p className='text-black-50 mt-4 pt-4 border-top small'>
                    Jeremy has been rated you with 5 stars!{' '}
                    <Link className='im-text-primary ml-1'>
                      Let’s rate another player.
                    </Link>
                  </p>

                  <p className='text-black-50 mt-4 pt-4 border-top small'>
                    BVG vs HGC match has been reopened! Join now
                    <Link className='im-text-primary ml-1'>Join Now</Link>
                  </p>
                </div>
              ) : null}

              <p className='text-black-50 mt-4 pt-4 border-top small'>
                Here is the notification center, all of your notification will
                appear here.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* === */}
      <OverlayTrigger trigger='click' placement='auto' overlay={popover1}>
        <button
          type='button'
          className='btn btn-two rounded-pill d-flex align-items-center justify-content-center p-3 fixed-bottom d-lg-none'
          style={{ bottom: 100, left: 'unset', right: 20 }}
        >
          <AiOutlinePlus size={20} />
        </button>
      </OverlayTrigger>
    </main>
  );
};
