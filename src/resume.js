import React, { useEffect, useRef } from 'react';
import './styles.css'; // Assume your CSS is adapted and imported here


function Resume() {
  return (
    <div className="App">
      <div id="intro">
        <p>intro</p>
      </div>
      <div className="container">
        {/* Other sections */}
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flex: 1 }}>
          <div className="slide-in">
            {/* Languages section with progress bars */}
            <h2>LANGUAGES</h2>
            <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
              <div>
                {/* Example language with progress bar */}
                <img src="img/icons/france.png" alt="French" style={{ width: 40, height: 40 }} />
                
                <p>NATIVE</p>
              </div>
              {/* More languages */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;