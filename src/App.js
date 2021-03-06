
import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Christopher Baker',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Projects', path: '/projects'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'CB Portfolio',
        subTitle: 'projects',
        text: 'Checkout my projects below'
      },
      projects: {
        title: 'Check out my projects',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'message me',
      }
    }
  }

  render() {


    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Chris Baker</Navbar.Brand> 

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>

              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
          <Route path='/Projects' render={() => <ProjectsPage title={this.state.projects.title} /> } />
          <Route path='/About' render={() => <AboutPage title={this.state.about.title}/> } />
          <Route path='/Contact' render={() => <ContactPage title={this.state.contact.title} /> } />

          <Footer />
        </Container>


      </Router>
    );
  }

}
export default App;
