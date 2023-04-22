import './App.css';
import React, { useState } from 'react';
import attach from './attach.png';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="App">
      {/* navbar begin */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Wuri</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li></li>
        </ul>
      </nav>

      {/* container begin*/}
      <div className='container'>
        <div className='container-left'>
          <input type="text" className="textbox" placeholder="Enter your App name here" />

          <div className='text-container'>
            <p className='head-txt'>Upload game files: </p>
          </div>

          <div className='btn-row'>
          <button>
              <label for="file-upload" class="custom-file-upload">
                <input type="file" id="file-upload" onChange={handleFileInputChange} accept="*/*" />
                CSV for Story
              </label>
              <img className='attch-png' src={attach} alt="example image" />
            
            </button>
            <button>
              <label for="file-upload" class="custom-file-upload">
                <input type="file" id="file-upload" onChange={handleFileInputChange} accept="*/*" />
                Game assets
              </label>
              <img className='attch-png' src={attach} alt="example image" />
            
            </button>
            <button>
              <label for="file-upload" class="custom-file-upload">
                <input type="file" id="file-upload" onChange={handleFileInputChange} accept="*/*" />
                App Icon
              </label>
              <img className='attch-png' src={attach} alt="example image" />
            
            </button>

          </div>


          <a className='link-btn' href="https://www.example.com">Click Here to download sample file</a>

          <button className='big-btn'>Click to build the game</button>
          {/* progress bar begin */}
          <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: `${40}%` }} />
          </div>
          <p className='timer'>02:54 minutes remaining</p>
          {/* progress bar end */}
        </div>

        <div className='container-right'>
          <div className='vdo'>
            <video controls width="90%" className='videoo'>
              <source src="my-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* container 2 */}

      <div className='container-2'>

      </div>

    </div>
  );
}

export default App;

