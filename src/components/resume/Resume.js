import myResume from './RyanCarr-Resume.pdf';
import './Resume.css';
export default function Resume() {
  return (
    <div className="resume-container">
      <iframe className="iframe" src={myResume} title="Ryan Carr Resume"></iframe>
    </div>
  );
}
