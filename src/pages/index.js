import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

// import BarcampSession from '../images/BarcampSession-min.jpg'
// import Programmer from '../images/programmer-min.jpg'
import ReacticonMini from '../images/react-icon-mini.png';
//import Reacticon from '../images/react-icon-sm-blue-greyed-min.png';
import Twitericon from '../images/twitter-bird-white-min.png';
import Facebookicon from '../images/facebook-logo-white-min.png';
import Mailicon from '../images/mail-white-min.png';
import RTLIcon from '../images/mediengruppeRTL.jpg';
import Mitpicon from '../images/mitp-logo.png';
import Manningicon from '../images/Manning_logo.png';
import Oreilyicon from '../images/ORM_logo.png';
import Bwiicon from '../images/bwi_logo.png';
import Railsloveicon from '../images/railslove_logo.png';
import MaTeaIcon from '../images/Ma-Tea-Logo-new.png';
import Ambienticon from '../images/Ai-Logo-full_400px.png';
import GFULogo from '../images/GFU-Logo-NEU.png';
import Codeviseicon from '../images/codevise_logo_512px.png';
import Brickmakersicon from '../images/Brickmakers_Logo.png';
import BonnJSicon from '../images/BonnJS_Logo-min.png';
import FrontEndMuensterIcon from '../images/frontend-freunde-muenster-logo.png';
import ReactJsDus from '../images/ReactJSDusseldorf.png';
import ReactJsDe from '../images/React_DE.png';
import ReactDayBerlinLogo from '../images/react-day-berlin.svg';
import ReactBonnLogo from '../images/react-bonn-meetup.png';
import ReactSummitAmsterdam2Logo from '../images/react-summit-amsterdam-2.svg';
import AwesomeSoftwareLogo from '../images/awesome-software.png';
import AmbientInnovationLogo from '../images/ai-logo-signet-inverse-half.png';
import ThinkAboutLogo from '../images/Think_About_Logo_Web_File.svg';
import TidewaysLogo from '../images/TidewaysLogo.jpg';
import Kitconcepticon from '../images/kitconcept-logo.png';
import ReactCologneicon from '../images/ReactCologneLogo.png';
import Headroom from 'react-headroom';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };
  render() {
    return (
      <Layout>
        <div class={this.state.isOpen ? 'mobile-nav open' : 'mobile-nav'}>
          <button className="navbar-toggler" onClick={this.toggleMenu}>
            <span class="navbar-toggler-icon" />
          </button>

          <div>
            <ul>
              <li />
              <li>
                <a href="#about" className="nav-link" onClick={this.toggleMenu}>
                  About
                </a>
              </li>
              {/* <li>
                <a
                  href="#schedule"
                  className="nav-link"
                  onClick={this.toggleMenu}
                >
                  Schedule
                </a>
              </li> */}
              <li>
                <a
                  href="#sponsors"
                  className="nav-link"
                  onClick={this.toggleMenu}
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="nav-link"
                  onClick={this.toggleMenu}
                >
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Headroom className="navbar" disableInlineStyles>
          <button className="navbar-toggler" onClick={this.toggleMenu}>
            <span class="navbar-toggler-icon" />
          </button>
          <div className="container">
            <div className="desktop-nav">
              <a href="#top" className="nav-image">
                <img
                  alt="Link to top of the page"
                  src={ReacticonMini}
                  className="nav-image"
                />
              </a>

              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#schedule" className="nav-link">
                Schedule
              </a>
              <a href="#sponsors" className="nav-link">
                Sponsors
              </a>
              <a href="#location" className="nav-link">
                Location
              </a>
            </div>
          </div>
        </Headroom>
        <div className="above-the-fold" id="top">
          <Img
            className="full-width-image-container"
            fluid={this.props.data.imageCologne.childImageSharp.fluid}
          />

          <div className="container header">
            <h1>React Barcamp 2020</h1>
            <h3 className="headerdescription">
              1st and 2nd February 2020 at RTL Media Group in Cologne
            </h3>
            <a
              href="https://barcamptools.eu/react-barcamp-cologne-2020/"
              className="btn btn-lg btn-outline-secondary button"
            >
              Register now
            </a>
            <p className="btn-comment">Barcamp is free of charge</p>
          </div>
        </div>
        <div className="container about" id="about">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="info-text">
                <h3>What is a Barcamp?</h3>
                <p>
                  A Barcamp is an event shaped by your contribution. Rather than
                  having scheduled speakers, you will have the opportunity to
                  talk about what is important to you. Anyone with something to
                  contribute in the context of user experience is welcome to
                  join. The goal is to share what you know, to learn from
                  others, to ignite discussion, and to connect in an open
                  environment.
                  <br />
                  <br />
                  <a href="https://en.wikipedia.org/wiki/BarCamp">
                    Read more...
                  </a>
                </p>
                {/* <a href="https://en.wikipedia.org/wiki/BarCamp">Read more...</a> */}
              </div>
            </div>
            <div className="col col-6 d-none d-md-block">
              <div className="image ">
                <Img
                  className="info-picture"
                  fluid={
                    this.props.data.imageBarcampSession.childImageSharp.fluid
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-6 d-none d-md-block">
              <div className="image">
                <Img
                  className="info-picture"
                  fluid={this.props.data.imageProgrammer.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="info-text">
                <h3>What is React?</h3>
                <p>
                  React is a JavaScript library that makes it incredible easy to
                  build fast user Interfaces for websites and mobile. Data on
                  React sites can easily be changed without reloading the page,
                  improving the overall user expierence. <br />
                  It also allows you to create reusable components to reduce
                  repetitive programing and the overall amount of code. This
                  makes not only writing but also reading the code much easier.
                  <br />
                  <br />
                  <a href="https://reactjs.org/">Read more...</a>
                </p>
                {/* <a href="https://reactjs.org/">Read more...</a> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="info-text">
                <h3>React Barcamp 2019 Recap</h3>
                <p>
                  Last year the first React Barcamp in Cologne took place at the
                  GfU Cyrus AG. People gathered to share their passion and
                  knowledge about React, to discuss about various topics or just
                  to meet people sharing the same interests. Combining fun with
                  learning new things about React is what the Barcamp is all
                  about. We had a blast and we managed to capture some moments
                  and put them together in a short video.
                </p>
              </div>
            </div>
            <div className="col col-6 d-none d-md-block">
              <div style={{ marginTop: '32px' }} className="video">
                <iframe
                  src="https://www.youtube.com/embed/PC-OAA_fE_g"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container diversity">
          <h1>Diversity at the event</h1>
          <div className="row">
            <div className="col-0 col-md-2" />
            <div className="col col-12 col-md-8">
              <div className="info-text diversity-text">
                <p>
                  As we try to promote more diversity in the open source
                  community, all people belonging to a group that is currently
                  underrepresented in tech are most welcome at the event. We
                  reserved some seats especially for these people. If you are
                  part of such a group and want to attend the barcamp please
                  contact us and we will give you a seat even when the event is
                  booked out.
                  <br />
                  <br />
                  <a href="mailto:barcamp@kitconcept.com">Send Mail</a>
                </p>
                {/* <a href="mailto:barcamp@kitconcept.com">Send Mail</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container schedule" id="schedule">
          <h1>Schedule</h1>
          <div className="row ">
            <div className="col col-12 col-sm-6">
              <div className="card table">
                <ul className="list-group list-group-flush">
                  <div className="card-header">
                    <a
                      className="heading"
                      href="https://barcamptools.eu/react-barcamp-cologne-2020/events/0c3911ce-831d-4bef-aa0f-d964413e10b2#sessions"
                    >
                      Saturday 01.02.
                    </a>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      09:00 - Arrival and Breakfast
                    </li>
                    <li className="list-group-item">
                      10:00 - Welcome and Session Planning
                    </li>
                    <li className="list-group-item">11:00 - Sessions</li>
                    <li className="list-group-item">13:00 - Lunch</li>
                    <li className="list-group-item">14:00 - Lightning Talks</li>
                    <li className="list-group-item">15:00 - Sessions</li>
                    <li className="list-group-item">17:00 - End</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col col-12 col-sm-6">
              <div className="card table">
                <div className="card-header">
                  <a
                    className="heading"
                    href="https://barcamptools.eu/react-barcamp-cologne-2020/events/fcc5430b-3ea2-4d7b-8651-01073febb5e4#sessions"
                  >
                    Sunday 02.02.
                  </a>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    09:30 - Arrival and Breakfast
                  </li>
                  <li className="list-group-item">
                    10:00 - Session Planning and Workshops
                  </li>
                  <li className="list-group-item">
                    10:15 - Sessions and Workshops
                  </li>
                  <li className="list-group-item">13:00 - Lunch</li>
                  <li className="list-group-item">14:00 - Session Planning</li>
                  <li className="list-group-item">14:30 - Sessions</li>
                  <li className="list-group-item">
                    16:00 - Closing and Feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="infos">
            Further infos:{' '}
            <a
              className="link"
              href="https://barcamptools.eu/react-barcamp-cologne-2020/events"
            >
              Barcamptools Schedule
            </a>
          </p>
        </div>
        <div className="container sponsors" id="sponsors">
          <h1>Sponsors</h1>
          <div className="sp-gold">
            <div className="row justify-content-center">
              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a href="https://kitconcept.com/">
                    <img
                      className="card-img-top white-preview"
                      src={Kitconcepticon}
                      alt="Logo Kitconcept GmbH"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://kitconcept.com/">kitconcept GmbH</a>
                  </div>
                </div>
                {/* <div className="card">
                  <a href="https://www.bwi.de/">
                    <img
                      className="card-img-top"
                      src={Bwiicon}
                      alt="BWI Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.bwi.de/">BWI</a>
                  </div>
                </div> */}
              </div>
              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a href="https://www.railslove.com/">
                    <img
                      className="card-img-top white-preview"
                      src={Railsloveicon}
                      alt="Railslove GmbH Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.railslove.com/">Railslove GmbH</a>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a
                    style={{ height: '150px' }}
                    href="https://www.mediengruppe-rtl.de/"
                  >
                    <img
                      style={{
                        marginTop: '30px',
                        minHeight: '100px',
                        maxHeight: '100px',
                      }}
                      className="card-img-top"
                      src={RTLIcon}
                      alt="RTL Media Group Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a
                      style={{ height: '150px' }}
                      href="https://www.mediengruppe-rtl.de/"
                    >
                      Mediengruppe RTL Deutschland
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a
                    href="https://ambient-innovation.com/"
                    style={{ height: 150 }}
                  >
                    <img
                      className="card-img-top"
                      src={AmbientInnovationLogo}
                      alt="Ambient Innovation Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://ambient-innovation.com/">
                      Ambient Innovation
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card white">
                  <a href="https://think-about.io/">
                    <img
                      className="card-img-top white-preview"
                      src={ThinkAboutLogo}
                      alt="Think About Conference Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://think-about.io/">Think About Conference</a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card white">
                  <a href="https://tideways.com/">
                    <img
                      className="card-img-top"
                      src={TidewaysLogo}
                      alt="Tideways Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://tideways.com/">Tideways</a>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a style={{ height: '150px' }} href="https://www.gfu.net/">
                    <img
                      style={{ marginTop: '25px' }}
                      className="card-img-top white-preview"
                      src={GFULogo}
                      alt="GFU Cyrus AG Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.gfu.net/">GFU Cyrus AG</a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a href="https://www.awesome-software.de/">
                    <img
                      className="card-img-top"
                      src={AwesomeSoftwareLogo}
                      alt="AWESOME! Software Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.awesome-software.de/">
                      AWESOME! Software
                    </a>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-md-hide">
                {/* <div className="card">
                  <a href="https://www.brickmakers.de/">
                    <img
                      className="card-img-top"
                      src={Brickmakersicon}
                      alt="Brickmakers Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.brickmakers.de/">Brickmakers</a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-4 col-md-show">
                {/* <div className="card">
                  <a href="https://www.brickmakers.de/">
                    <img
                      className="card-img-top"
                      src={Brickmakersicon}
                      alt="Brickmakers Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.brickmakers.de/">Brickmakers</a>
                  </div>
                </div> */}
              </div>
              <div className="col col-0 col-sm-6 col-md-4">
                {/* <div className="card">
                  <a href="https://codevise.de/de/">
                    <img
                      className="card-img-top"
                      src={Codeviseicon}
                      alt="Logo of Codevise"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://codevise.de/de/">Codevise Solutions</a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col col-12">
              {/* <div className="card">
                <a href="https://www.ma-tea.de/">
                  <img
                    className="card-img-top"
                    src={MaTeaIcon}
                    alt="Ma Tea Logo"
                  />
                </a>
                <div className="card-body">
                  <a href="https://www.ma-tea.de/">Ma-Tea</a>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="sp-diamond">
            <h2>Location Sponsor</h2>
            <div className="row">
              <div className="col col-0 col-sm-2 col-md-3" />
              <div className="col col-12 col-sm-8 col-md-6">
                <div className="card">
                  <a href="https://www.mediengruppe-rtl.de/">
                    <img
                      className="card-img-top"
                      style={{ width: '240px', height: 'auto' }}
                      src={RTLIcon}
                      alt="Sponsor Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.mediengruppe-rtl.de/">
                      Mediengruppe RTL Deutschland
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="sp-silver">
            {/* <h2>Workshop Sponsor</h2>
            <div className="row justify-content-center">
              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://www.awesome-software.de/">
                    <img
                      className="card-img-top"
                      src={AwesomeSoftwareLogo}
                      alt="AWESOME! Software Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.awesome-software.de/">
                      AWESOME! Software
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="sp-silver">
            <h2>Media Sponsor</h2>
            <div className="row justify-content-center">
              {/* <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a href="https://www.mitp.de/">
                    <img
                      className="card-img-top"
                      src={Mitpicon}
                      alt="Sponsor Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.mitp.de/">mitp Verlags GmbH</a>
                  </div>
                </div>
              </div> */}
              <div className="col col-12 col-sm-6 col-md-4">
                <div className="card">
                  <a href="https://www.manning.com/">
                    <img
                      className="card-img-top"
                      src={Manningicon}
                      alt="Manning Publications Logo"
                      style={{ padding: 8, backgroundColor: 'white' }}
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.manning.com/">
                      Manning Publications Co.
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col col-12 col-md-4">
                <div className="card">
                  <a href="https://www.oreilly.de/">
                    <img
                      className="card-img-top"
                      src={Oreilyicon}
                      alt="Logo of O reiley"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.oreilly.de/">O’Reilly Media</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="sp-bronze">
            <h2>Community Sponsors</h2>
            <div className="row justify-content-center">
              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://www.meetup.com/BonnJS/">
                    <img
                      className="card-img-top"
                      src={BonnJSicon}
                      alt="Sponsor Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.meetup.com/BonnJS/">BonnJS</a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://www.meetup.com/React-Cologne/">
                    <img
                      className="card-img-top"
                      src={ReactCologneicon}
                      alt="Sponsor Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.meetup.com/React-Cologne/">
                      React Cologne
                    </a>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://reactday.berlin/">
                    <img
                      className="card-img-top"
                      src={ReactDayBerlinLogo}
                      alt="Sponsor Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://reactday.berlin/">React Day Berlin</a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://www.reactsummit.com/">
                    <img
                      className="card-img-top"
                      src={ReactSummitAmsterdam2Logo}
                      alt="React Summit Amsterdam 2 Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.reactsummit.com/">
                      React Summit Amsterdam
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://www.meetup.com/React-JS-React-Native-Bonn-Meetup/">
                    <img
                      className="card-img-top"
                      src={ReactBonnLogo}
                      alt="React JS & React Native Bonn Meetup Logo"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.meetup.com/React-JS-React-Native-Bonn-Meetup/">
                      React JS & React Native Bonn Meetup
                    </a>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://reactjs.de/">
                    <img
                      className="card-img-top"
                      src={ReactJsDe}
                      alt="Logo of React JS Deutschland"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://reactjs.de/">ReactJS.DE</a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <a href="https://www.meetup.com/frontend-freunde/">
                    <img
                      className="card-img-top"
                      src={FrontEndMuensterIcon}
                      alt="Logo of Frontend-Freunde Münster"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.meetup.com/frontend-freunde/">
                      Frontend-Freunde Muenster
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col col-12 col-sm-6 col-lg-2">
                <div className="card">
                  <a href="https://www.meetup.com/ReactJS-Meetup-Dusseldorf/">
                    <img
                      className="card-img-top"
                      src={ReactJsDus}
                      alt="Logo of React JS Dusseldorf"
                    />
                  </a>
                  <div className="card-body">
                    <a href="https://www.meetup.com/ReactJS-Meetup-Dusseldorf/">
                      ReactJS Duesseldorf
                    </a>
                  </div>
                </div>
              </div>} */}
            </div>
          </div>
        </div>

        <div className="container-fluid location" id="location">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1056.964418985287!2d6.970210998116978!3d50.944076906923435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf3ae22710d4ff%3A0xe2ebb0d9c2799651!2sMediengruppe%20RTL%20Deutschland!5e0!3m2!1sde!2sde!4v1574354390597!5m2!1sde!2sde"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="container-fluid footer">
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-2 col-md-1">
                <div className="footer-text">
                  <Link to="/imprint/">Imprint</Link>
                </div>
              </div>
              <div className="col-12 col-sm-3 col-md-2">
                <div className="footer-text coc-link">
                  <Link to="/coc/">Code of conduct</Link>
                </div>
              </div>
              <div className="col-12 col-sm-2 col-md-2">
                <div className="footer-text coc-link">
                  <Link to="/privacy-policy/">Privacy Policy</Link>
                </div>
              </div>
              <div className="col-12 col-sm-2 col-md-4">
                <div className="footer-text">
                  <p>
                    Organized by{' '}
                    <a href="https://kitconcept.com/">kitconcept</a> and
                    friends.
                  </p>
                </div>
              </div>
              <div className="col-0 col-sm-0 col-md-1" />
              <div className="col-12 col-sm-3 col-md-2">
                <div className="footer-text soc-media">
                  <a href="https://www.facebook.com/React-Barcamp-738517023197582/">
                    <img src={Facebookicon} alt="Facebook" />
                  </a>
                  <a href="https://twitter.com/ReactBarcamp?ref_src=twsrc%5Etfw">
                    <img src={Twitericon} alt="Twitter" />
                  </a>
                  <a href="mailto:barcamp@kitconcept.com">
                    <img className="mail" alt="Mail" src={Mailicon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageCologne: file(relativePath: { eq: "DomCologne3-mini.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageBarcampSession: file(relativePath: { eq: "BarcampSession-mini.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageProgrammer: file(relativePath: { eq: "programmer-mini.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    imageReactIcon: file(
      relativePath: { eq: "react-icon-sm-blue-greyed-min.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
