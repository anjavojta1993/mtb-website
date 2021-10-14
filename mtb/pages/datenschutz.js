import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { darkBlue, lightGrey, normalText } from '../styles/sharedStyles';

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 50px;
  height: 100%;
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

export default function Datenschutz() {
  return (
    <Layout>
      <div css={pageContainer}>
        <div css={textContainer}>
          Ich, Berufscoach, Mag. Marlies Brunner, MTD, Anton-Adlgasser-Weg 32,
          5020 Salzburg, bearbeite Ihre personenbezogenen Daten ausschließlich
          im Fall Ihrer Einwilligung bzw. zur Ausführung des von Ihnen erteilten
          Auftrages zu den mit Ihnen vereinbarten Zwecken im Sinn der
          Datenschutz-Grundverordnung (DSGVO). Es werden nur solche
          personenbezogenen Daten erhoben, die für die Durchführung und
          Abwicklung meiner beauftragten Aufgaben und Leistungen erforderlich
          sind oder die Sie mir freiwillig zur Verfügung gestellt haben.
          <br />
          <br />
          <b>Ihr Recht auf Auskunft und Löschung (Betroffenenrechte)</b>
          <br />
          Sie haben das Recht auf Auskunft über ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung sowie ein Recht auf Berichtigung, Widerspruch,
          Datenübertragung, Einschränkung der Bearbeitung sowie Sperrung oder
          Löschung unrichtiger/unzulässiger verarbeiteter Daten. <br />
          <br />
          Sie haben auch das Recht, eine allenfalls erteilte Einwilligung zur
          Nutzung Ihrer personenbezogenen Daten jederzeit zu widerrufen. Zur
          Geltendmachung der Ihnen zustehenden Betroffenenrechte (Auskunft,
          Löschung, Berichtigung, Widerspruch und/oder – sofern dadurch nicht
          ein unverhältnismäßiger Aufwand verursacht wird – Datenübertragung)
          wenden Sie sich bitte direkt an Frau Mag. Marlies Brunner, MTD. <br />
          <br />
          Sofern Sie der Auffassung sind, dass die Verarbeitung Ihrer
          personenbezogenen Daten durch mich gegen das geltende Datenschutzrecht
          verstößt oder Ihre datenschutzrechtlichen Ansprüche in einer anderen
          Weise verletzt worden sind, besteht die Möglichkeit, dass Sie sich bei
          der zuständigen Aufsichtsbehörde beschweren. Dies ist in Österreich
          die Datenschutzbehörde.
          <br />
          <br />
          <b>Verwendung von Daten — Sicherheit</b>
          <br />
          <br />
          Die mir zur Verfügung gestellten Daten werden nicht für andere Zwecke
          als für die durch den Coaching-Vertrag oder durch Ihre Einwilligung
          oder sonst durch eine Bestimmung im Einklang mit der
          Datenschutz-Grundverordnung gesteckten Zwecke verarbeitet. <br />
          <br />
          Ich habe dem Stand der Technik entsprechende organisatorische und
          technische Vorkehrungen getroffen, um den Schutz Ihrer
          personenbezogenen Daten zu gewährleisten (Schutz gegen missbräuchliche
          Verwendung sowohl von Innen als auch von Außen (etwa durch Firewalls,
          Verschlüsselungen, Zugriffsberechtigungen, etc.). Es kann jedoch nicht
          ausgeschlossen werden, dass durch von mir nicht verursachte Fehler bei
          der Datenübertragung oder auch aufgrund unautorisierten Zugriffes
          durch Dritte (Hacker, etc.) Informationen von anderen Personen
          eingesehen oder genutzt werden. Dafür übernehme ich keine Haftung,
          sofern diese missbräuchliche Verwendung nicht von mir schuldhaft
          verursacht wurde.
          <br />
          <br />
          <b>Weitergabe von Daten an Dritte (Übermittlung)</b>
          <br />
          Grundsätzlich stelle ich Ihre personenbezogenen Daten nicht anderen
          zur Verfügung. Allerdings ist es gelegentlich zur Erfüllung Ihres
          Auftrages erforderlich, Ihre Daten an Dritte weiterzuleiten. In diesem
          Fall erfolgt die Weitergabe Ihrer Daten ausschließlich auf Grundlage
          der DSGVO (aufgrund der von Ihnen erteilten Einwilligung, Erfüllung
          eines Auftrages, etc.).
          <br />
          <br />
          <b>Speichern/Löschen von Daten</b>
          <br />
          Ich bewahre Ihre personenbezogenen Daten nicht länger auf als es für
          die Zwecke, für die sie verarbeitet werden, erforderlich ist.
          <br />
          <br />
          <b>Kontaktformular</b>
          <br />
          Auf meiner Website besteht die Möglichkeit, direkt mit mir in Kontakt
          zu treten. Nach Absenden Ihrer Kontaktaufnahme erfolgt eine
          Verarbeitung der von ihnen eingegebenen personenbezogenen Daten zum
          Zweck der Bearbeitung Ihrer Anfrage auf Grundlage der von ihnen durch
          das Absenden des Formulars erteilten Einwilligung gem. Art. 6 Abs. 1
          lit. a DSGVO bis auf Widerruf. <br />
          <br />
          Es besteht keine gesetzliche oder vertragliche Verpflichtung zur
          Bereitstellung der personenbezogenen Daten. Die Nichtbereitstellung
          hat lediglich zur Folge, dass Sie Ihr Anliegen nicht übermitteln und
          ich dieses nicht bearbeiten kann.
          <br />
          <br />
          <b>Widerrufsrecht</b>
          <br />
          Sie haben das Recht, eine bereits erteilte Einwilligung jederzeit zu
          widerrufen, indem Sie die Datenschutzeinstellungen ändern. Die
          Rechtmäßigkeit der bis zum Widerruf verarbeiteten Daten wird durch den
          Widerruf nicht berührt.
        </div>
      </div>
    </Layout>
  );
}
