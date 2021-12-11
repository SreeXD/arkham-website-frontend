import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';

import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import ArkhamIcon from '../../assets/media/Arkham icon.gif';
import ArtIcon from '../../assets/media/art.svg';
import PicturesIcon from '../../assets/media/pictures.svg';
import DropDownIcon from '../../assets/media/down-filled-triangular-arrow.png';
import ArtDisplay from '../../assets/media/arts.png';
import PicDisplay from '../../assets/media/pictures.png';


const Navbar = () => {
    const onClickCS = (e) => {
        const ele = document.querySelector('#coolstuffs');
        ele.classList.toggle('active');  
    };

    const onClickNav = (e) => {
        const ele = document.querySelector('#navbar');
        const ele2 = document.querySelector('#navbar-toggler');
        ele.classList.toggle('toggled');
        ele2.classList.toggle('active');
    };

    return (
        <nav>
            <img src={ArkhamIcon} id='arkham-icon' />

            <ul id='navbar'>
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? 'nav-active nav__item' : 'nav__item'}>Home</NavLink>
                </li>

                <li id='coolstuffs' onClick={onClickCS}>
                    <div id='coolstuffs__button'>
                        <span id='coolstuffs__text'>
                            Cool stuffs                        
                        </span>

                        <img src={DropDownIcon} id='coolstuffs__down-arrow' width='10' height='10' />
                    </div>

                    <ul id='coolstuffs__dropdown'>
                        <NavLink to='/arts' className={({isActive}) => isActive ? 'nav-active' : ''}>
                            <li id='arts' className='dropdown__item'>
                                <div className='item__title'>
                                    <span id='arts__text'>
                                        Arts                    
                                    </span>

                                    <img src={ArtIcon} id='arts__icon' className='icon' width='24' height='24'/>
                                </div>

                                <div className='item__description'>
                                    some of the arts done by our members
                                </div>

                                <div className='item__image-container'>
                                    <img className='item__image img1' src={ArtDisplay} />
                                </div>
                            </li>
                        </NavLink> 

                        <NavLink to='/pictures' className={({isActive}) => isActive ? 'nav-active' : ''}>
                            <li id='pictures' className='dropdown__item'>
                                <div className='item__title'>
                                    <span id='pictures__text'>
                                        Pictures               
                                    </span>

                                    <img src={PicturesIcon} id='pictures__icon' className='icon' width='24' height='24'/>
                                </div>

                                <div className='item__description'>
                                    cool pictures taken by our members
                                </div>

                                <div className='item__image-container'>
                                    <img className='item__image img2' src={PicDisplay} />
                                </div>
                            </li>
                        </NavLink>
                    </ul>
                </li>

                <li>
                    <a href={window.env.INVITE} target='_blank'>
                        <button id='join-us'>
                            Join us
                        </button>
                    </a>
                </li>
            </ul>

            <button id='navbar-toggler' onClick={onClickNav}>
                <span />
                <span />
            </button>
        </nav>
    );
};

export default Navbar;