import React from 'react';
import {
  AiFillStar,
  AiOutlinePlus,
  AiOutlineStar,
  AiOutlineWindows,
} from 'react-icons/ai';
import { BiBookContent, BiExit, BiStats } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <section className='sidebar d-none d-lg-flex pt-5 mt-4'>
      <header className='p-4 mb-5'>
        <div className='d-flex align-items-center mb-3'>
          <button
            type='button'
            className='btn btn-two rounded-pill d-flex align-items-center justify-content-center p-3 mr-3'
          >
            <AiOutlinePlus size={20} />
          </button>
          <button
            type='button'
            className='btn btn-two rounded-pill d-flex align-items-center justify-content-center py-0 px-2 bg-white'
          >
            <AiFillStar color='#FF8252' />
            <span className='text-black-50'>4.8</span>
          </button>
        </div>
        <div className='font-weight-bold h5'>John Smith</div>
      </header>
      <main className='pl-4'>
        <NavLink
          to='/'
          className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
        >
          <span className='mr-3'>
            <AiOutlineWindows size={24} />
          </span>
          <span className='btn-sidebar__text'>Dashboard</span>
        </NavLink>

        <NavLink
          to='/help'
          className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
        >
          <span className='mr-3'>
            <BiStats size={24} />
          </span>
          <span className='btn-sidebar__text'>Stats</span>
        </NavLink>

        <NavLink
          to='/help'
          className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
        >
          <span className='mr-3'>
            <AiOutlineStar size={24} />
          </span>
          <span className='btn-sidebar__text'>Ratings</span>
        </NavLink>

        <NavLink
          to='/help'
          className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
        >
          <span className='mr-3'>
            <BiBookContent size={24} />
          </span>
          <span className='btn-sidebar__text'>Matches</span>
        </NavLink>
      </main>

      <footer className='pl-4 mt-auto'>
        <NavLink
          to='/sign-out'
          className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
        >
          <span className='mr-3'>
            <BiExit size={24} />
          </span>
          <span className='btn-sidebar__text'>Logout</span>
        </NavLink>
      </footer>
    </section>
  );
};
