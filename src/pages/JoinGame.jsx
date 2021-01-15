import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

// Icons
import ArrowBack from '../assets/images/arrow-back.svg';
import { BiBookOpen, BiCalendar, BiDollar, BiMap } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import { BsChat } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const gameDetails = [
  {
    icon: <BiMap color='#ff8252' size={24} className='mr-2' />,
    text: 'Shady Smile Sport Centre, London',
  },
  {
    icon: <BiCalendar color='#ff8252' size={24} className='mr-2' />,
    text: '2nd of December, 04:15 PM',
  },
  {
    icon: <BiDollar color='#ff8252' size={24} className='mr-2' />,
    text: '$150.00',
  },
];

const roleDetails = [
  {
    number: 2,
    name: 'Keeper',
    className: 'mb-3',
  },
  {
    number: 4,
    name: 'Midfielders',
    className: 'mb-3',
  },
  {
    number: 4,
    name: 'Defenders',
  },
  {
    number: 4,
    name: 'Strikers',
  },
];

const player = [
  {
    titleName: 'Phillip Dokidis',
    titleRole: 'Keeper',
    className: 'text-black-50',
    icon: '$',
  },
  {
    titleName: 'Phillip Dokidis',
    titleRole: 'Defenders',
    className: 'im-text-success',
    icon: '$',
  },
  {
    freeSlot: 'Free slot',
    titleRole: 'Defenders',
  },
  {
    freeSlot: 'Free slot',
    titleRole: 'Midfielders',
  },
  {
    titleName: 'Cristofer Culhane',
    titleRole: 'Midfielders',
    className: 'text-black-50',
    icon: '$',
  },
  {
    freeSlot: 'Free slot',
    titleRole: 'Strikers',
  },
  {
    freeSlot: 'Free slot',
    titleRole: 'Strikers',
  },
];

const joinRoleArr = [
  { name: 'Keeper', className: 'border-bottom' },
  { name: 'Defender', className: 'border-bottom' },
  { name: 'Midfielder', className: 'border-bottom' },
  { name: 'Striker' },
];

export const JoinGame = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleChat, setToggleChat] = useState(false);
  return (
    <main className='container-fluid mb-5 pb-5'>
      <form>
        <div className='px-3 px-md-3'>
          <div className='mb-2'>
            <Link to='/' className='p-0'>
              <img height={40} width={40} src={ArrowBack} alt='Back' />
            </Link>
          </div>
          <div className='d-flex'>
            <div className='d-flex align-items-baseline mb-4'>
              <BiBookOpen color='#ff8252' size={20} className='mr-3' />
              <h4 className='font-weight-bold text-dark mb-0'>Join a Game</h4>
            </div>
          </div>
        </div>
        <Row>
          <Col xs={12} xl={3}>
            <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
              <div className='font-weight-bold text-capitalize h5 mb-4'>
                Game Details
              </div>
              {gameDetails.map((value) => (
                <div className='d-flex align-items-center mb-3'>
                  {value.icon}
                  <span className='text-black-50'>{value.text}</span>
                </div>
              ))}
            </section>

            <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
              <div className='font-weight-bold text-capitalize h5 mb-4'>
                Role Details
              </div>
              <div className='mb-4'>
                <span className='text-black-50 text-capitalize mr-2 font-weight-bold'>
                  Available slots
                </span>
                <span className='badge badge-warning rounded-circle p-2 font-weight-bold'>
                  6
                </span>
              </div>

              <div className='row align-items-center mb-3'>
                {roleDetails.map((value) => (
                  <Col xs={6} className={` ${value.className}`}>
                    <div className='font-weight-bold'>
                      <span className='im-text-primary mr-2'>
                        {value.number}
                      </span>
                      <span className='text-black-50 text-capitalize'>
                        {value.name}
                      </span>
                    </div>
                  </Col>
                ))}
              </div>
            </section>
          </Col>
          <Col md={8} xl={6}>
            <section className='rounded-xl bg-white p-4 mb-4 flex-grow-1 d-flex flex-column'>
              <div className='font-weight-bold text-capitalize h5 mb-4'>
                Players
              </div>
              <Row className='text-center flex-column flex-md-row mx-0'>
                <Col>
                  <div>
                    <div className='im-text-primary font-weight-bold text-capitalize'>
                      Side A
                    </div>
                    {player.map((value) => (
                      <div className='d-flex flex-column flex-lg-row  justify-content-center ml-lg-3 mt-4'>
                        <span>
                          <div className='font-weight-bold'>
                            {value.titleName}
                          </div>
                          <div className='text-black-50'>{value.freeSlot}</div>
                          <div className='im-text-primary'>
                            {value.titleRole}
                          </div>
                        </span>
                        <span
                          className={`ml-lg-2 order-first order-lg-last font-weight-bold ${value.className}`}
                        >
                          {value.icon}
                        </span>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col className='my-5 my-md-auto'>
                  <h6 className='mb-0 font-weight-bold text-black-50 text-uppercase'>
                    VS
                  </h6>
                </Col>
                <Col>
                  <div>
                    <div className='im-text-primary font-weight-bold text-capitalize'>
                      Side B
                    </div>
                    {player.map((value) => (
                      <div className='d-flex flex-column flex-lg-row  justify-content-center ml-lg-3 mt-4'>
                        <span>
                          <div className='font-weight-bold'>
                            {value.titleName}
                          </div>
                          <div className='text-black-50'>{value.freeSlot}</div>
                          <div className='im-text-primary'>
                            {value.titleRole}
                          </div>
                        </span>
                        <span
                          className={`ml-lg-2 order-first order-lg-last font-weight-bold ${value.className}`}
                        >
                          {value.icon}
                        </span>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </section>
          </Col>
          <Col>
            <section className='p-2 mb-4 h-100 d-flex flex-column'>
              <div className='d-flex align-items-baseline mb-3'>
                <span
                  className='d-flex bg-primary rounded-circle mr-3'
                  style={{ padding: 3 }}
                ></span>
                <div className='text-black-50 small'>
                  Please check all the information, if you’ve any mistake you
                  can edit it right away. If all done, you can publish the game.
                </div>
              </div>
              <Button
                onClick={() => setToggleOne(!toggleOne)}
                type='button'
                block
                variant='four'
                className='rounded-pill py-3 border-0 active mt-3 d-flex align-items-center'
              >
                <span className='mx-auto font-weight-bold'>Join Game as</span>
                {toggleOne ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </Button>

              {toggleOne ? (
                <div className='rounded-xl bg-white p-4 mt-2 mb-4 d-flex flex-column'>
                  <div className='font-weight-bold h5 mb-2'>Join as</div>
                  {joinRoleArr.map((value) => (
                    <div className={` ${value.className} py-2 mb-2`}>
                      <label class='checkbox-container'>
                        <span className='text-black-50'>{value.name}</span>
                        <input type='radio' name='radio' />
                        <span class='checkmark'></span>
                      </label>
                    </div>
                  ))}
                  <Button
                    type='button'
                    block
                    variant='four'
                    className='rounded-pill py-3 border-0 active d-flex align-items-center'
                  >
                    <span className='mx-auto font-weight-bold text-capitalize'>
                      Join Game now
                    </span>
                  </Button>
                </div>
              ) : null}
            </section>
          </Col>
        </Row>
      </form>

      {/* Chat */}
      <>
        <Button
          onClick={() => setToggleChat(!toggleChat)}
          variant='four'
          className='active rounded-circle d-flex align-items-center justify-content-center p-0 fixed-bottom m-4'
          style={{ height: 50, width: 50, left: 'unset' }}
        >
          {toggleChat ? <IoMdClose size={20} /> : <BsChat size={20} />}
        </Button>
        {toggleChat ? (
          <section
            className='rounded-xl bg-white p-4 m-4 fixed-bottom'
            style={{ width: 300, left: 'unset', right: 60 }}
          >
            <h6 className='font-weight-bold mb-3'>Chats</h6>
            <div
              className='bg-light rounded-xl scroll-box d-flex flex-column'
              style={{ height: 400 }}
            >
              <div className='small p-3 mr-auto'>
                <div className='text-black-50 text-capitalize mb-1'>
                  User Name
                </div>
                <div className='chat-radius-left bg-gray text-secondary p-3'>
                  Lorem, ipsum dolor.
                </div>
              </div>

              <div className='small p-3 mr-auto'>
                <div className='text-black-50 text-capitalize mb-1'>
                  User Name
                </div>
                <div className='chat-radius-left bg-gray text-secondary p-3'>
                  i hope we can play without raining again.
                </div>
              </div>

              <div className='small p-3 text-right ml-auto'>
                <div className='chat-radius-right bg-primary text-white p-3'>
                  Hello guys, i'm John!
                </div>
                <div className='text-black-50 text-capitalize mt-1'>
                  User Name
                </div>
              </div>

              <div className='small p-3 mr-auto'>
                <div className='text-black-50 text-capitalize mb-1'>
                  User Name
                </div>
                <div className='chat-radius-left bg-gray text-secondary p-3'>
                  i hope we can play without raining again.
                </div>
              </div>

              <div className='small p-3 mr-auto'>
                <div className='text-black-50 text-capitalize mb-1'>
                  User Name
                </div>
                <div className='chat-radius-left bg-gray text-secondary p-3'>
                  i hope we can play without raining again.
                </div>
              </div>

              <div className='small p-3 text-right ml-auto'>
                <div className='chat-radius-right bg-primary text-white p-3'>
                  Hello guys, i'm John!
                </div>
                <div className='text-black-50 text-capitalize mt-1'>
                  User Name
                </div>
              </div>
              {/* -- */}
            </div>
            <form className='mt-2 position-relative'>
              <textarea
                className='form-control rounded-lg'
                rows='2'
                placeholder='Type here...'
              />
              <Button
                variant='link'
                className='rounded-circle button-send-icon'
              >
                <span className='im-text-primary'>
                  <FiSend />
                </span>
              </Button>
            </form>
          </section>
        ) : null}
      </>
      {/* Chat End */}
    </main>
  );
};
