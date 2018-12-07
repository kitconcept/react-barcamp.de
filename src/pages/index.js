import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import BarcampSession from '../images/BarcampSession-min.jpg'
// import Programmer from '../images/programmer-min.jpg'
import Reacticon from '../images/react-icon-sm-blue-greyed-min.png'
import Twitericon from '../images/twitter-bird-white-min.png'
import Facebookicon from '../images/facebook-logo-white-min.png'
import Mailicon from '../images/mail-white-min.png'
import Cyrusicon from '../images/sp-cyrus-min.png'
import Mitpicon from '../images/mitp-logo.png'
import Railsloveicon from '../images/railslove_logo.png'
import BonnJSicon from '../images/BonnJS_Logo-min.png'
import Kitconcepticon from '../images/kitconcept-logo.png'
import ReactCologneicon from '../images/ReactCologneLogo.png'

const IndexPage = props => (
  <Layout>
    <div className="above-the-fold">
      <Img
        className="full-width-image-container"
        fluid={props.data.imageCologne.childImageSharp.fluid}
      />
      <div className="container">
        <h1>React Barcamp 2019</h1>
        <h3>
          26th and 27th January 2019 in <a href="#map">Cologne</a>
        </h3>
        <a
          href="https://barcamptools.eu/react-barcamp-cologne-2019/"
          className="btn btn-lg btn-outline-secondary button"
          role="button"
          aria-pressed="true"
        >
          Register now
        </a>
        <p className="btn-comment">Barcamp is free of charge</p>
      </div>
    </div>
    <div className="container about">
      <div className="row">
        <div className="col col-12 col-md-6">
          <div className="info-text">
            <h3>What is a Barcamp?</h3>
            <p>
              A BarCamp is an event shaped by your contribution. Rather than
              having scheduled speakers, you will have the opportunity to talk
              about what is important to you. Anyone with something to
              contribute in the context of user experience is welcome to join.
              The goal is to share what you know, to learn from others, to
              ignite discussion, and to connect in an open environment.
            </p>
            <a href="https://en.wikipedia.org/wiki/BarCamp">Read more...</a>
          </div>
        </div>
        <div className="col col-6 d-none d-md-block">
          <div className="image ">
            <Img
              className="info-picture"
              fluid={props.data.imageBarcampSession.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-6 d-none d-md-block">
          <div className="image">
            <Img
              className="info-picture"
              fluid={props.data.imageProgrammer.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="col col-12 col-md-6">
          <div className="info-text">
            <h3>What is React?</h3>
            <p>
              React is a JavaScript library that makes it incredible easy to
              build fast user Interfaces for websites and mobile. Data on React
              sites can easily be changed without reloading the page, improving
              the overall user expierence. <br />
              It also allows you to create reusable components to reduce
              repetitive programing and the overall amount of code. This makes
              not only writing but also reading the code much easier.
            </p>
            <a href="https://reactjs.org/">Read more...</a>
          </div>
        </div>
      </div>
    </div>
    <div className="container schedule">
      <h1>Schedule</h1>
      <div className="row ">
        <div className="col col-12 col-sm-6">
          <div className="card table">
            <ul className="list-group list-group-flush">
              <div className="card-header">
                <a
                  className="heading"
                  href="https://barcamptools.eu/react-barcamp-cologne-2019/events/307d07d7-5709-4445-b7c8-93001034eebe#sessions"
                >
                  Saturday 26.01.
                </a>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">09:00 - Arrival</li>
                <li className="list-group-item">
                  09:30 - Welcome and Session Planning
                </li>
                <li className="list-group-item">13:00 - Lunch</li>
                <li className="list-group-item">14:00 - Lightning Talks</li>
                <li className="list-group-item">18:00 - Final Session</li>
                <li className="list-group-item">19:00 - End</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="col col-12 col-sm-6">
          <div className="card table">
            <div className="card-header">
              <a
                className="heading"
                href="https://barcamptools.eu/react-barcamp-cologne-2019/events/5796ecb0-7428-4525-bf9d-f4e4e21713b8#location"
              >
                Sunday 27.01.
              </a>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">09:00 - Arrival</li>
              <li className="list-group-item">10:00 - Session Planning</li>
              <li className="list-group-item">12:45 - Lunch</li>
              <li className="list-group-item">14:30 - Lightning Talks</li>
              <li className="list-group-item">15:30 - Final Session</li>
              <li className="list-group-item">16:00 - End</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="infos">
        Further infos:{' '}
        <a
          className="link"
          href="https://barcamptools.eu/react-barcamp-cologne-2019/events"
        >
          Barcamptools Schedule
        </a>
      </p>
    </div>
    <div className="container sponsors">
      <h1>Sponsors</h1>
      <div className="container button sponsor-btn">
        <a
          href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019"
          className="btn btn-lg btn-outline-secondary "
          role="button"
          aria-pressed="true"
        >
          Become a Sponsor
        </a>
      </div>
      {/*<div className="sp-diamond">
        <h2>Diamond Sponsor</h2>
        <div className="row">
          <div className="col col-0 col-sm-2 col-md-3" />
          <div className="col col-12 col-sm-8 col-md-6">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
</div>*/}
      <div className="sp-gold">
        {/*<h2>Sponsors</h2>*/}
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src={Railsloveicon}
                alt="Sponsor Logo"
              />
              <div className="card-body">
                <a href="https://www.railslove.com/">Railslove GmbH</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src={Kitconcepticon}
                alt="Sponsor Logo"
              />
              <div className="card-body">
                <a href="https://kitconcept.com/">kitconcept GmbH</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-4">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sp-silver">
        <h2>Media Sponsors</h2>
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-3">
            <div className="card">
              <img className="card-img-top" src={Mitpicon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="https://www.mitp.de/">mitp Verlags GmbH</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-3">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="sp-bronze">
        <h2>Bronze Sponsors</h2>
        <div className="row">
          <div className="col col-12 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="#">Become a Sponsor</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="#">Become a Sponsor</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="#">Become a Sponsor</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="#">Become a Sponsor</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="#">Become a Sponsor</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="#">Become a Sponsor</a>
              </div>
            </div>
          </div>
        </div>
</div>*/}
      <div className="sp-bronze">
        <h2>Community Sponsors</h2>
        <div className="row">
          <div className="col col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={BonnJSicon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="https://www.meetup.com/BonnJS/">BonnJS</a>
              </div>
            </div>
          </div>
          <div className="col col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img
                className="card-img-top"
                src={ReactCologneicon}
                alt="Sponsor Logo"
              />
              <div className="card-body">
                <a href="https://www.meetup.com/React-Cologne/">
                  React Cologne
                </a>
              </div>
            </div>
          </div>
          <div className="col col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
          <div className="col col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
          <div className="col col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
          <div className="col col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="card">
              <img className="card-img-top" src={Reacticon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="mailto:info@kitconcept.com?subject=Become a Sponsor for React Barcamp 2019">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sp-diamond">
        <h2>Location Sponsor</h2>
        <div className="row">
          <div className="col col-0 col-sm-2 col-md-3" />
          <div className="col col-12 col-sm-8 col-md-6">
            <div className="card">
              <img className="card-img-top" src={Cyrusicon} alt="Sponsor Logo" />
              <div className="card-body">
                <a href="https://www.gfu.net/?network=g&gclid=EAIaIQobChMI4Z-h0IP63gIVBkQYCh29oQoVEAAYASAAEgLg9fD_BwE">
                  GFU Cyrus AG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fuid button reg-now">
      <a
        href="https://barcamptools.eu/react-barcamp-cologne-2019/"
        className="btn btn-lg btn-outline-secondary"
        role="button"
        aria-pressed="true"
      >
        Register now
      </a>
    </div>
    <div className="container-fluid location">
      <div className="map" id="map">
        <iframe
          title="Barcamp location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.9170204473367!2d6.990856315748642!3d50.92525197954363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf242a777a51df%3A0x721311869833f03f!2sGFU+Cyrus+AG!5e0!3m2!1sde!2sde!4v1543320356673"
          width="100%"
          height="100%"
          frameBorder="0"
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
              <a href="http://berlincodeofconduct.org/">Code of conduct</a>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-3">
            <div className="footer-text orga-by">
              <p>
                Organized by <a href="https://kitconcept.com/">kitconcept</a>{' '}
                and friends.
              </p>
            </div>
          </div>
          <div className="col-0 col-sm-2 col-md-4" />
          <div className="col-12 col-sm-3 col-md-2">
            <div className="footer-text soc-media">
              <a href="https://www.facebook.com/React-Barcamp-738517023197582/">
                <img src={Facebookicon} />
              </a>
              <a href="https://twitter.com/ReactBarcamp?ref_src=twsrc%5Etfw">
                <img src={Twitericon} />
              </a>
              <a href="mailto:info@kitconcept.com?">
                <img className="mail" src={Mailicon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

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
`
