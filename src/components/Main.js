import React from 'react'
import PropTypes from 'prop-types'

import about from '../images/about.jpg'
import current from '../images/current.jpg'
import recent from '../images/recent.jpg'
import contact from '../images/contact.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2>About the Barnard-Columbia Ancient Drama Group</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <p>
            Since 1977, a community scholars, students, and enthusiasts of
            Greco-Roman drama have produced an ancient play in the original
            Greek or Latin through an endowed fund at Barnard College, Columbia
            University. While the organization is formally a collaboration
            between the Classics departments of Columbia and Barnard, several
            other institutions in New York City are often represented each year,
            drawing audiences from throughout the tri-state area. With annual
            programming in the original ancient tongue for over four decades,
            our performing arts group is the only one of its kind in the United
            States. Browse our recent productions and check out our YouTube
            postings for freely available videos of past productions. Stay tuned
            for news on the current season:casting calls often occur in the fall
            semester, with performances in early April.
          </p>

          <h2>About the Matthew Alan Kramer Fund</h2>
          <p>
            Barnard Columbia Ancient Drama was founded in 1977 as a memorial to
            the life of Matthew Alan Kramer. Matthew was an engineering major
            and lover of Greek drama who died during his time at Columbia. Each
            year, we celebrate Matthew’s passion for the broad appeal of ancient
            Greek drama with the support of an endowed fund in his name.
          </p>
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Current</h2>
          <figure className="image main">
            <img src={current} alt="" />
          </figure>
          <h3>
            Euripides' <em>Andromache</em>
          </h3>
          <p>
            <em>Performed in ancient Greek with English projections.</em>
          </p>

          <h2>
            The Creative Team Behind <em>Andromache</em>
          </h2>

          <h3>
            Faculty Advisor:{' '}
            <a
              href="https://classics.columbia.edu/helene-foley"
              style={{ textDecoration: 'underline' }}
            >
              Helene Foley
            </a>
          </h3>
          <p>
            Helene Foley is Professor of Classics at Barnard College, Columbia
            University, where she has taught for forty years and supervised
            Barnard Columbia Ancient Drama. As an internationally recognized
            authority on Greek drama especially, Helene has published several
            books on the reception of Greek tragedy. She is the author of
            Reimagining Greek Tragedy on the American Stage (2012, UC Press),
            Female Acts in Greek Tragedy (2001, Princeton), and Ritual Irony:
            Poetry and Sacrifice in Euripides (1985, Cornell), among several
            other books and articles. She is co-editor of Antigone on the
            Contemporary World Stage (2011, Oxford) and Visualizing the Tragic
            (2007, Oxford). Her current research examines the aspect of choral
            dance in particular.
          </p>

          <h3>
            Director:{' '}
            <a
              href="http://classics.columbia.edu/cristina-perez"
              style={{ textDecoration: 'underline' }}
            >
              Cristina Perez
            </a>
          </h3>
          <p></p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Recent</h2>
          <span className="image main">
            <img src={recent} alt="" />
          </span>{' '}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main">
            <img src={contact} alt="" />
          </span>
          <ul className="icons" style={{ textAlign: 'center' }}>
            <li>
              <a
                href="https://twitter.com/AncientDrama"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/BarnardColumbiaAncientDrama"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/bcancientdrama"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:producer.bcadg@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">producer.bcadg@gmail.com</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
