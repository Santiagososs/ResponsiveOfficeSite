import React from 'react';
import {Button} from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                   Join to us team
                </p>
                <p className="footer-subscription-text">
                     You can do a test and leave any moment
               </p>
                 <div className="input-areas">
                     <form >
                        <input type="email" name="email"  placeholder="Your Email "  className="footer-input"/>
                        <Button buttonStyle="btn--outline" > Subscribe </Button>
                     </form>
                 </div>
            </section>
               <div className="footer-links">
                <div className="footer-link-wrapper">
                   <div className="footer-link-items">
                     <h2>About Us</h2>
                     <Link to="/sign-up"> How it works </Link>
                     <Link to="/"> Our Team</Link>
                     <Link to="/"> Our Clients</Link>
                     <Link to="/"> Where find us </Link>
                     <Link to="/"> Famous cases</Link>
                   </div>
                   <div className="footer-link-items">
                     <h2>Videos</h2>
                     <Link to="/sign-up"> How it works </Link>
                     <Link to="/"> Our Team</Link>
                     <Link to="/"> Our Clients</Link>
                     <Link to="/"> Where find us </Link>
                     <Link to="/"> Famous cases</Link>
                   </div>                  
                </div>
                <div className="footer-link-wrapper">
                   <div className="footer-link-items">
                     <h2>Social media</h2>
                     <Link to="/sign-up"> How it works </Link>
                     <Link to="/"> Our Team</Link>
                     <Link to="/"> Our Clients</Link>
                     <Link to="/"> Where find us </Link>
                     <Link to="/"> Famous cases</Link>
                   </div>
                   <div className="footer-link-items">
                     <h2>Team pictures</h2>
                     <Link to="/sign-up"> How it works </Link>
                     <Link to="/"> Our Team</Link>
                     <Link to="/"> Our Clients</Link>
                     <Link to="/"> Where find us </Link>
                     <Link to="/"> Famous cases</Link>
                   </div>                  
                </div>
               </div>
               <section className="social-media">
                   <div className="social-media-wrap">
                        <div className="footer-logo">
                           <Link to="/"  className="social-logo"> 
                             KLADV <i className="fas fa-balance-scale"/> 
                           </Link>
                        </div>
                        <small className="website-rights"> KLADV ?? 2021 </small>
                         <div className="social-icons"> 
                            <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook" > 
                            <i className="fab fa-facebook-f"> </i>
                            </Link>
                            <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram" > 
                            <i className="fab fa-instagram"> </i>
                            </Link>
                            <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube" > 
                            <i className="fab fa-youtube"> </i>
                            </Link>
                            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter" > 
                            <i className="fab fa-twitter"> </i>
                            </Link>
                            <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="Linkedin" > 
                            <i className="fab fa-linkedin"> </i>
                            </Link>
                        </div>
                   </div>

               </section>
        </div>
    )
}

export default Footer
