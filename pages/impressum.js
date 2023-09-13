import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { darkBlue, lightBlue, normalText } from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 50px;
  height: 100vh;
  color: white;
  background-color: ${darkBlue};

  @media (max-width: 540px) {
    position: relative;
    margin-top: 120px;
  }
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  padding: 10px;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;

  a:hover {
    cursor: pointer;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  a:visited {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  a:active {
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }

  a:link {
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
`;

export default function Impressum() {
  return (
    <Layout>
      <div css={pageContainer}>
        <div css={textContainer}>
          <b>Für den Inhalt verantwortlich, Copyright:</b>
          <br />
          Mag. Marlies Brunner, MTD | Michael-Walz-Gasse 37 | 5020 Salzburg |
          Österreich | UID Nummer: ATU46105806 <br />
          <br />
          Alle Rechte vorbehalten. Irrtümer und Änderungen vorbehalten.
          <br />
          <br />
          <br />
          <b>Konzeption, Webdesign & Programmierung:</b>
          <br />
          Anja VojtA | 1090 Wien | Österreich |
          <Link href="https://www.linkedin.com/in/anja-vojta-2b7141144/">
            <a>LinkedIn</a>
          </Link>
          <br />
          <b>Bildrechte:</b>
          <br />
          <Link href="https://www.pexels.com">
            <a>Pexels</a>
          </Link>
          <Link href="https://unsplash.com/">
            <a>Unsplash</a>
          </Link>
          <Link href="https://www.flaticon.com/free-icon/linkedin_174857">
            <a>Flaticon</a>
          </Link>
          <Link href="https://www.reneedelmissier.com/">
            <a>Renée Del Missier</a>
          </Link>
          <br />
          <b>Haftungsausschluss:</b>
          <br />
          Ich weise darauf hin, dass die verlinkten Seiten nicht von mir
          stammen. Soweit diese einen illegalen oder unrichtigen Inhalt haben,
          distanziere ich mich davon. Ich will nur legale und fehlerfreie
          Sachverhalte und Informationen wiedergeben und habe keinen Einfluss
          auf die Gestaltung und den Inhalt der gelinkten Seiten. Diese stellen
          auch keine Erweiterung oder Ergänzung der meiner eigenen Informationen
          dar. Ich bin nicht in der Lage, alle Veränderungen auf den verlinkten
          Seiten regelmäßig zu verfolgen. Aus diesem Grunde wird jegliche
          Verantwortung und Haftung für die Inhalte alle dieser verlinkten
          Informationen abgelehnt. Für illegale, fehlerhafte oder unvollständige
          Inhalte und insbesondere für Schäden, die aus der Nutzung solcher Art
          dargebotener Informationen entstehen, haftet ausschließlich der
          jeweilige Anbieter jener Seite, auf welche verwiesen wird.
        </div>
      </div>
    </Layout>
  );
}
