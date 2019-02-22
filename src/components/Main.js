import React from 'react';
import PropTypes from 'prop-types';

import about from '../images/about.jpg';
import current from '../images/current.jpg';
import recent from '../images/recent.jpg';
import contact from '../images/contact.jpg';

class Main extends React.Component {
    render() {

        let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>;

        return (
            <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

              <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2>About the Barnard-Columbia Ancient Drama Group</h2>
                <span className="image main"><img src={about} alt="" /></span>
                <p>
                  Since 1977, a community scholars, students, and
						      enthusiasts of Greco-Roman drama have produced an
						      ancient play in the original Greek or Latin through an
						      endowed fund at Barnard College, Columbia
						      University. While the organization is formally a
						      collaboration between the Classics departments of
						      Columbia and Barnard, several other institutions in
						      New York City are often represented each year, drawing
						      audiences from throughout the tri-state area. With
						      annual programming in the original ancient tongue for
						      over four decades, our performing arts group is the
						      only one of its kind in the United States. Browse our
						      recent productions and check out our YouTube postings
						      for freely available videos of past productions. Stay
						      tuned for news on the current season:casting calls often occur
                  in the fall semester, with performances in early April.
                </p>

                <h2>About the Matthew Alan Kramer Fund</h2>
                <p>
                  Barnard Columbia Ancient Drama was founded in 1977 as
                  a memorial to the life of Matthew Alan Kramer. Matthew
                  was an engineering major and lover of Greek drama who
                  died during his time at Columbia. Each year, we
                  celebrate Matthew’s passion for the broad appeal of
                  ancient Greek drama with the support of an endowed
                  fund in his name.
                </p>
              </article>

              <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Current</h2>
                <span className="image main"><img src={current} alt="" /></span>

                <h3>Euripides' <em>Herakles</em></h3>
                <p><em>Performed in ancient Greek with English projections.</em></p>

                <p>
                  Featuring live reconstructed ancient Greek music through special support from the <a href="https://delmas.org">Gladys Krieble Delmas Foundation</a>, the <a href="https://onassisusa.org/">Onassis Foundation USA</a>, the Matthew Alan Kramer Fund, Alumna Marietta Voeglis (Barnard ’54), and other institutional sources.
                </p>
                <p>
                  Join us for a powerful drama of the ruin and rehabilitation of Greece’s greatest hero presented in its native language and soundscape for the contemporary theatregoer.
                </p>
                <p>
                  BCAD presents the first modern staging of a Greek tragedy with a fully reconstructed score on the historic double-pipes or aulos. Euripides’ Herakles premiered in Athens around 416 BCE during a time of innovation in the aulos music of theater especially. In this play in particular, the sound of the aulos breaks into the dramatic action to control Herakles, the most embodied of ancient heroes, as it choreographs his ruin.
                </p>

                <p>
                  Tickets are available on our <a href="https://www.eventbrite.com/o/barnard-columbia-ancient-drama-9867917254">Eventbrite page</a>.
                </p>

                <h2>About the Music</h2>

                <p>
                  Our production this year draws on current developments in scholarship on ancient Greek musical culture. This <a href="https://www.youtube.com/watch?v=4hOK7bU0S1Y&list=PLqGXHvLJjl-DObUFo6Tgo7ccsiSfJnYbV&index=1">video</a> provides an introduction to some of the more technical aspects especially. Ancient Greek is a tonal language whose cadence of rising and falling pitches were closely linked with the rise and fall of the melody in traditional sung performances. By the time of our play in late fifth-century Athens, Euripides and others were experimenting with a more emphatic, imitative style in music and probably dance as well: music and movement become particularly prominent in late-fifth century performance. In the Herakles, Euripides evokes a more traditional type of play like Aeschylus’ Agamemnon and then dramatically unravels its traditional musical and ethical framework with an avant-garde musical performance by Madness personified (Lyssa in the Greek). Director Caleb Simone in his research on aulos performance culture is especially interested in how the live aulos music would have broken into this play’s dramatic action, something that does happen to the same degree in other surviving tragedies. Euripides’ Herakles showcases the powerful ways the aulos was felt to affect the body of its hearer in Greek culture, which is why this play is particularly suited to being staged within the sonic framework of this unique instrument.
                </p>
                <p>
                  Composer Anna Conser, drawing on her doctoral research on the melodic structure of Greek tragic song, has reconstructed the more traditional odes in the play, where the “turn” and “return” (<em>strophe</em> and <em>anti-strophe</em>) movements share the same basic melody. These melodies are composed in the traditional “keys” or “modes” of ancient Greek music culture. Piper (or “Aulete”) Callum Armstrong has composed accompaniment for Anna’s songs on the aulos, following current working hypotheses among scholars of Greek music. His aulos is itself something of an innovation:  developed by music historian and reed expert Robin Howell of Toronto, Callum’s aulos is an adaptation from various surviving archaeological remains of double-pipes, especially a set called the “Elgin” currently in London in the British Museum. Much like the professional aulos-players of Euripides’ day would typically have their own custom set of pipes, Robin has designed this instrument for Callum to accommodate the musical feats planned for the performance.
                </p>
                <p>
                  While the production’s musical design is marked with a high degree of reconstruction, our vision is not fully reconstructionist. To help twenty-first century audiences engage the ancient language and soundscape of Greek tragedy, we use modern theatrical conventions and a more naturalistic style of acting. To that end, a team of movement, lighting, sound, and costume designers have collaborated to help today’s theatergoer connect with the aural form of ancient Greek tragedy.
                </p>

                <h2>The Creative Team Behind <em>Herakles</em></h2>

                <h3>
                  Faculty Advisor:{' '}
                  <a href="https://classics.columbia.edu/helene-foley" style={{ textDecoration: 'underline' }}>
                    Helene Foley
                  </a>
                </h3>
                <p>
                  Helene Foley is Professor of Classics at Barnard College, Columbia University,
                  where she has taught for forty years and supervised
                  Barnard Columbia Ancient Drama. As an internationally
                  recognized authority on Greek drama especially, Helene has
                  published several books on the reception of Greek
                  tragedy. She is the author of Reimagining Greek Tragedy on
                  the American Stage (2012, UC Press), Female Acts in Greek
                  Tragedy (2001, Princeton), and Ritual Irony: Poetry and
                  Sacrifice in Euripides (1985, Cornell), among several
                  other books and articles. She is co-editor of Antigone on
                  the Contemporary World Stage (2011, Oxford) and
                  Visualizing the Tragic (2007, Oxford). Her current
                  research examines the aspect of choral dance in
                  particular.
                </p>

                <h3>
                  Director:{' '}
                  <a href="http://classics.columbia.edu/caleb-simone" style={{ textDecoration: 'underline' }}>
                    Caleb Simone
                  </a>
                </h3>
                <p>
                  A PhD Candidate in Classics at Columbia University, Caleb is currently writing his dissertation
                  on the aulos or double pipes in ancient Greek culture. He has published on sound and musical
                  performance in Greek lyric and tragedy. Caleb holds a certificate in Ancient Greek Music from
                  the University of Trento in Italy (2015) offered through the <a href="https://www.moisasociety.org/">MOISA Society for Greek and Roman
  Music</a>. He has been involved in Barnard Columbia Ancient Drama since 2013 and played a lead role
                  in the 2015 production of Euripides’ Ion. In July 2017, Caleb participated in a <a href="https://www.youtube.com/watch?v=4hOK7bU0S1Y&t=628s">concert in the
               Ashmolean Museum</a> in Oxford featuring a fragment of the musical annotation from Euripides’ Orestes.
                  In 2017, Caleb worked with Matt Rocker (below) to record a dramatic performance of spoken Latin
                  for <a href="https://www.bloomberg.com/company/announcements/london-mithraeum-bloomberg-space-bring-roman-temple-mithras-life-new-cultural-experience-capital/">Bloomberg’s London Mithraeum project</a>. Caleb has also worked with the Paideia Institute for
                  Humanistic Study as the program developer for a volunteer-based public-school program in ancient
                  Greek language and myth.
                </p>

                <h3>
                  Composer:{' '}
                  Anna Conser
                </h3>

                <p>
                  Anna Conser is a PhD candidate in Classics at Columbia University writing her dissertation on the musical structure of Greek tragic song under the supervision of Prof. Helene Foley. Using ancient evidence on the role of pitch accent in melody, Anna’s research reconstructs the melodic shape of tragic lyrics, allowing her to analyze odes in light of their musical structure. This new methodology is practically applied in her vocal score for Herakles, which consistently expresses the rhythms and pitch accents of Euripides’ lyrics, using the Damonian scales from Plato’s Republic. Anna has been involved in five recent BCAD productions, including directing Sophocles’ <a href="https://www.didaskalia.net/issues/13/3/">Trachiniae (2016)</a> and co-directing Aeschylus’ <a href="https://www.youtube.com/watch?v=i05l02aNtnA">Choephoroi (2014)</a>.  Since 2014, she has also been an instructor at the Paideia Institute’s Living Greek in Greece program.
                </p>
                <h3>
                  Musician:{' '}
                  <a href="https://callumarmstrong.co.uk" style={{ textDecoration: 'underline' }}>
                    Callum Armstrong
                  </a>
                </h3>
                <p>
                  Callum is a professional musician based in London who specializes in woodwind instruments. Having studied the recorder at London’s Trinity Laban Conservatory, Callum has a broad background in historical wind playing. For three consecutive years Callum won the Beryl Maggs Award for recorder and in his final year was awarded the Silver Medal for Early Music.  In recent years, Callum has collaborated with the <a href="https://www.moisasociety.org">MOISA Society for Greek and Roman Music</a> to perform on reconstructed models of the ancient Greek aulos in chiefly scholarly settings. In November 2017, Callum played the aulos to accompany a creative retelling of <a href="https://www.independent.co.uk/arts-entertainment/theatre-dance/the-suppliant-women-reivew-a8060196.html">Aeschylus’ Suppliant Women at London’s Young Vic</a>.
                </p>

                <h3>
                  Choreographer: Jon Froehlich
                </h3>
                <p>
                  Jon is artistic director of <a href="http://www.cloudoffools.com/">Cloud of Fools Theater Company</a>, which emphasizes the actor’s body ihn ensemble as the root of theatrical creation. Jon acts, teaches, writes, directs, and choreographs with various companies, venues, and institutions around the city. He is a regular collaborator with Caborca, Stolen Chair, and Mettawee River. Besides his regular work in NYC, he has performed in Germany, Italy, and Puerto Rico, as well as regionally in the United States. He teaches Movement in Pace University’s International Performance Ensemble program, and obtained his MFA in acting from Columbia University, where he has also taught acting.
                </p>

                <h3>
                  Lighting Designer: 22 Lighting Studio
                </h3>
                <p>
                  Marién of 22 Lighting Studio is from Puerto Rico and has a background in stage lighting in Argentina, New York City and Puerto Rico. Marién is currently finishing a Masters in Fine Arts in Lighting Design at Parsons School of Design. She has participated in events produced by the Hemispheric Institute of Performance and Politics (NYU) in Brazil and Canada. She has collaborated with groups like Madres de la Plaza de Mayo, Sylvia Bofill, Sleep No More, The Public Theater, Kairiana Núñez, Viveca Vázquez, Karen Languevin, Mima, and other artists and collectives. She has published for the magazine of the Colegio de Arquitectos de Puerto Rico.
                </p>

                <h3>
                  Sound Designer: Matt Rocker
                </h3>

                <p>
                  Matt Rocker is the Supervising Sound Editor and Mixer at Underground Audio in NYC. He holds a BA in music composition and theory from the University of Minnesota, and an MA in Music from New York University with a concentration in music technology. His film credits range from blockbusters such as the “Lord of the Rings” films, to indie hits like “Winter’s Bone.” His television work spans the streaming, broadcast, and cable platforms for NBC, VH1, Discovery, A&amp;E, and more, including work on “30 Rock”, and HBO’s recent Bruce Springsteen documentary “The ties that bind.” Matt has created sound design for museums and art installations such as the 9/11 Memorial Museum, Matthew Barney’s seminal “Cremaster Cycle” at the Guggenheim, and the immersive archaeological site of the London Mithraeum, where he first collaborated with BCAD 2019 director Caleb Simone.
                </p>
                {close}

                {close}
              </article>

              <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Recent</h2>
                <span className="image main"><img src={recent} alt="" /></span>                {close}
              </article>

              <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Contact</h2>
                <span className="image main"><img src={contact} alt="" /></span>
                <ul className="icons">
                  <li><a href="https://twitter.com/AncientDrama" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="https://facebook.com/BarnardColumbiaAncientDrama" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="https://instagram.com/bcancientdrama" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="mailto:producer.bcadg@gmail.com" className="icon fa-envelope"><span className="label">producer.bcadg@gmail.com</span></a></li>
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
