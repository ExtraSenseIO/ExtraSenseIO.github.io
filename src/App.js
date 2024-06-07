import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ExtraSense</h1>
        <p>Your gateway to accessibility technology.</p>
      </header>
      <section className="App-intro">
        <h2>About Us</h2>
        <p>ExtraSense is focused on delivering accessibility technology that helps people with disabilities interact with the world and gain autonomy.</p>
      </section>
      <section className="App-features">
        <h2>Features</h2>
        <ul>
          <li>3D Home Scanning and Mapping!</li>
          <li>Live Captioning</li>
          <li>Person Recognition</li>
          <li>Medication Reminders</li>
        </ul>
      </section>
      <section className="App-cta">
        <h2>Get Started</h2>
        <p>Join us on our journey to create a more accessible world.</p>
        <button onClick={() => window.location.href = 'https://mailchimp.com/signup'}>Sign Up for Updates</button>
      </section>
    </div>
  );
}

export default App;