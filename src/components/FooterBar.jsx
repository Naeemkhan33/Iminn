import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineStar, AiOutlineWindows } from 'react-icons/ai';
import { BiBookContent, BiStats } from 'react-icons/bi';
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

export const FooterBar = ({ location }) => {
  let hideSidebar = location.pathname === '/create-game';
  return (
    <>
      {hideSidebar ? (
        ''
      ) : (
        <div className='footer-bar p-3 d-block d-lg-none fixed-bottom mt-4'>
          <main className='small d-flex align-items-baseline'>
            <NavLink
              to='/'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <AiOutlineWindows size={18} />
              </span>
              <span className='small'>Dashboard</span>
            </NavLink>

            <NavLink
              to='/stats'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <BiStats size={18} />
              </span>
              <span className='small'>Stats</span>
            </NavLink>

            <NavLink
              to='/ratings'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <AiOutlineStar size={18} />
              </span>
              <span className='small'>Ratings</span>
            </NavLink>

            <NavLink
              to='/matches'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <BiBookContent size={18} />
              </span>
              <span className='small'>Matches</span>
            </NavLink>

            <OverlayTrigger trigger='click' placement='auto' overlay={popover1}>
              <Link
                type='button'
                className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
              >
                <span
                  className='btn-two rounded-pill d-flex align-items-center justify-content-center'
                  style={{ height: 18, minWidth: 18 }}
                >
                  <AiOutlinePlus size={11} />
                </span>
                <span className='small'>Profile</span>
              </Link>
            </OverlayTrigger>
          </main>
        </div>
      )}
    </>
  );
};
