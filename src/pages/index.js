import React from 'react'
import Layout from '../components/layout'
import BarcampSession from '../images/BarcampSession.jpg'
import Programmer from '../images/programmer.jpg'
import Reacticon from '../images/react-icon-sm.png'
const IndexPage = () => (
  <Layout>
    <div class="above-the-fold">
      <div class="container">
        <h1>React Barcamp 2019</h1>
        <h3>26th and 27th January 2019 in Cologne</h3>
        <a
          href="https://barcamptools.eu/react-barcamp-cologne-2019/"
          class="btn btn-lg btn-outline-secondary"
          role="button"
          aria-pressed="true"
        >
          Join Now
        </a>
      </div>
    </div>
    <div class="container about">
      <div class="row">
        <div class="col col-12 col-sm-6">
          <div class="info-text">
            <h3>What is a Barcamp?</h3>
            <p>
              A BarCamp is an event shaped by your contribution. Rather than
              having scheduled speakers, you will have the opportunity to talk
              about what is important to you. Anyone with something to
              contribute in the context of user experience is welcome to join.
              The goal is to share what you know, to learn from others, to
              ignite discussion, and to connect in an open environment.
            </p>
          </div>
        </div>
        <div class="col col-6 d-none d-sm-block">
          <div class="image">
            <img class="info-picture" src={BarcampSession} alt="placeholder" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-6 d-none d-sm-block">
          <div class="image">
            <img class="info-picture" src={Programmer} alt="placeholder" />
          </div>
        </div>
        <div class="col col-12 col-sm-6">
          <div class="info-text">
            <h3>What is React?</h3>
            <p>
              React is a Javascript library that makes it incredible easy to
              build fast user Interfaces for Websites and mobile. It allows you
              to create reusable components to reduce repetitive programing and
              the overall amount of code. This makes not only writing but also
              reading the code much easier.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container schedule">
      <h1>Schedule</h1>
      <div class="row ">
        <div class="col col-12 col-sm-6">
          <div class="card table">
            <ul class="list-group list-group-flush">
              <div class="card-header">
                <h3 class="schedule-heading">Saturday</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">09:00 - Arrival</li>
                <li class="list-group-item">
                  09:30 - Welcome and Session Planning
                </li>
                <li class="list-group-item">13:00 - Lunch</li>
                <li class="list-group-item">14:00 - Lightning Talks</li>
                <li class="list-group-item">18:00 - Final Session</li>
                <li class="list-group-item">19:00 - End</li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="col col-12 col-sm-6">
          <div class="card table">
            <div class="card-header">
              <h3 class="schedule-heading">Sunday</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">09:00 - Arrival</li>
              <li class="list-group-item">10:00 - Session Planning</li>
              <li class="list-group-item">12:45 - Lunch</li>
              <li class="list-group-item">14:30 - Lightning Talks</li>
              <li class="list-group-item">15:30 - Final Session</li>
              <li class="list-group-item">16:00 - End</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        Further planning here:{' '}
        <a
          class="link"
          href="https://barcamptools.eu/react-barcamp-cologne-2019/events"
        >
          Barcamptools Schedule
        </a>
        <br />{' '}
      </p>
    </div>
    <div class="container sponsors">
      <h1>Sponsors</h1>
      <div class="row">
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-3">
          <div class="card">
            <img class="card-img-top" src={Reacticon} alt="Sponsor Logo" />
            <div class="card-body">
              <a href="#">Sponsor Name</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid location">
      <h1>Location</h1>
      <div class="map" />
    </div>
    <div class="container-fluid footer">
      <div class="container">
        <h1>Footer</h1>
        <div class="row">
          <div class="col col-12 col-sm-6 col-md-3">
            <div class="footer-text">
              <p>test</p>
            </div>
          </div>
          <div class="col col-12 col-sm-6 col-md-3">
            <div class="footer-text">
              <p>test</p>
            </div>
          </div>
          <div class="col col-12 col-sm-6 col-md-3">
            <div class="footer-text">
              <p>test</p>
            </div>
          </div>
          <div class="col col-12 col-sm-6 col-md-3">
            <div class="footer-text">
              <p>test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
