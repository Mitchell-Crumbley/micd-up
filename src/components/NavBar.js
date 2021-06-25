import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signOutUser, signInUser } from '../helpers/auth';
import { signInGitHubUser } from '../helpers/authGitHub';
import GitHubLogo from '../assets/GitHubLogo.png';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
            <NavItem>
              <Link className="nav-link" to="/showcases">All Shows</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/venues">Venues</Link>
           </NavItem>
           <NavItem>
              <Link className="nav-link" to="/activity">Activity</Link>
           </NavItem>
           <NavItem>
              <Link className="nav-link" to="/add-venue">Add Venue</Link>
           </NavItem>
           <NavItem>
              <Link className="nav-link" to="/add-showcase">Add Showcase</Link>
           </NavItem>
           <NavItem>
              <Link className="nav-link" to="/add-activity">Add Activity</Link>
           </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
      <Link className="navbar-brand" to="/">Profile</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          { user && authenticated()}
            {
              user !== null
              && <NavItem>
                {
                  user
                    ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
                    : <>
                      <Button color='danger' onClick={signInUser}>Sign In</Button>
                      <img className="redCard" onClick={signInGitHubUser} src={GitHubLogo}/>
                      </>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
