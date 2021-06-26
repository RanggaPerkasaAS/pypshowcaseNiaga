import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Bingung dengan bisnis #mulaidenganNiaga
        </p>
        <p className='footer-subscription-text'>
          Daftarkan UMKM anda 
        </p>
        <div className='input-areas'>
          <form>
            <span style={{fontSize: 20}}>Nama  </span>
          <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Nama Anda'
            /> <br></br>
            <span style={{fontSize: 20}}>Email  </span>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email Anda'
            />
            <br></br>
            <span style={{fontSize: 20}}>Pesan  </span>
            <input
              className='footer-input'
              name='Pesan Anda'
              type='email'
              placeholder='Pesan Anda'
            /><br></br>
            <Button buttonStyle='btn--outline'>Kirim</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <a href="https://www.instagram.com/ranggapas_/">Rangga</a>
            <a href="https://www.instagram.com/_______________rama/">Rama</a>
            <a href="https://www.instagram.com/shafrilrh/">Shafril</a>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <a href="https://www.instagram.com/shafrilrh/">Contact Person</a>
            <Link to='/hubingi'>Contact Us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <a href="https://youtu.be/BkZUpL00dfQ">Our Video</a>
            <a href="https://youtu.be/BkZUpL00dfQ">Video Proposals</a>
            <a href="https://youtu.be/BkZUpL00dfQ">Video Presentation</a>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="logo.png" alt="logo niaga"></img>
            </Link>
          </div>
          <small className='website-rights'>NIAGA © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//youtu.be/BkZUpL00dfQ'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;