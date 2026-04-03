import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMonitor, FiZap, FiAirplay, FiWifi, FiTarget, FiCpu, FiCheck, FiMoon, FiSun, FiSettings, FiLayout, FiX, FiShield, FiLock, FiSmartphone } from 'react-icons/fi';

const featuresData = [
  { id: 1, icon: FiMonitor, title: 'Direct PC Control', desc: 'Click, scroll, and type on your PC screen from your mobile device.' },
  { id: 2, icon: FiAirplay, title: 'Phone-to-PC Casting', desc: 'Seamlessly cast your Android screen to your Windows PC.' },
  { id: 3, icon: FiWifi, title: 'PC-to-Phone Stream', desc: 'Low latency streaming ensures a smooth 60fps experience.' },
  { id: 4, icon: FiTarget, title: 'Gaming Controller', desc: 'Transform your smartphone into a functional gamepad.' },
  { id: 5, icon: FiZap, title: 'Integrated UI', desc: 'A clean interface that puts commands right at your fingertips.' },
  { id: 6, icon: FiCpu, title: 'Native Performance', desc: 'Bypasses standard bottlenecks to deliver uncompressed inputs.' }
];

const Navbar = () => (
  <nav>
    <div className="nav-brand">
      <img src="/assets/dragon.svg" alt="xdroid Logo" />
      <span>xdroid Pro</span>
    </div>
    <ul className="nav-links">
      <li><a href="#hero">Overview</a></li>
      <li><a href="#demo">Preview</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#how-it-works">How It Works</a></li>
    </ul>
  </nav>
);

const AppMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewOn, setPreviewOn] = useState(false);

  const screens = [
    { tab: 'pcControls', theme: 'dark' },
    { tab: 'streaming', theme: 'dark' },
    { tab: 'pcControls', theme: 'light' },
    { tab: 'streaming', theme: 'light' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 2500); // 2.5s to match "every 2-3 seconds"
    return () => clearInterval(interval);
  }, [screens.length]);

  const { tab: activeTab, theme: activeTheme } = screens[currentIndex];

  return (
    <div className="mockup-container slide-up stagger-2">
      {/* 3D Depth Elements */}
      <div className="mockup-inner-shadow"></div>
      
      <div className="app-ui" data-theme={activeTheme}>
        {/* Sidebar */}
        <div className="app-sidebar">
          <div className="app-brand">
            <h2>xdroid</h2>
            <p>Landscape control deck</p>
          </div>
          
          <div className="sidebar-label">SECTIONS</div>
          <div 
            className={`nav-item ${activeTab === 'streaming' ? 'active' : ''}`}
            onClick={() => setCurrentIndex(activeTheme === 'dark' ? 1 : 3)}
          >
            STREAMING
          </div>
          <div 
            className={`nav-item ${activeTab === 'pcControls' ? 'active' : ''}`}
            onClick={() => setCurrentIndex(activeTheme === 'dark' ? 0 : 2)}
          >
            PC CONTROLS
          </div>

          <div className="sidebar-label" style={{ marginTop: '20px' }}>THEME</div>
          <div className="theme-toggle">
            <button className={`theme-btn ${activeTheme === 'dark' ? 'active' : ''}`} onClick={() => setCurrentIndex(0)}><FiMoon /></button>
            <button className={`theme-btn ${activeTheme === 'light' ? 'active' : ''}`} onClick={() => setCurrentIndex(2)}><FiSun /></button>
          </div>

          <div className="stream-state">
            <div className="label">STREAM STATE</div>
            <div className="stream-state-text">
              Status: Server Running • Grant Screen Capture For Phone Screen Viewer<br/><br/>
              Server: http://10.198.204.176:1937
            </div>
          </div>
        </div>

        {/* Main Area */}
        <div className="app-main">
          <div className="app-header">
            <div className="header-title">
              <h3>Premium Remote Camera</h3>
              <p>Left-side navigation, right-side controls, built for landscape.</p>
            </div>
            <div className="header-actions">
              <div className="preview-toggle" onClick={() => setPreviewOn(!previewOn)}>
                Preview 
                <div className={`toggle-switch ${previewOn ? 'on' : ''}`}></div>
              </div>
              <button className="circle-btn"><FiLayout size={16}/></button>
              <button className="circle-btn warning"><FiZap size={16}/></button>
            </div>
          </div>

          {/* PC Controls View */}
          <div className={`tab-content ${activeTab === 'pcControls' ? 'active' : ''}`}>
            <div className="content-grid">
              <div className="app-card">
                <div className="card-label">REMOTE TARGET</div>
                <div className="input-box">10.198.204.23</div>
              </div>
              <div className="app-card">
                <div className="card-label">DESKTOP CONTROLS</div>
                <button className="action-btn">RECEIVE PC SCREEN</button>
                <button className="action-btn">ENABLE KEYBOARD</button>
                <button className="action-btn">ENABLE GAMEPAD</button>
              </div>
            </div>
            <div className="stop-server-bar">
              <p>Launch desktop tools after pointing the app to your target PC.</p>
              <button className="stop-btn">STOP SERVER</button>
            </div>
          </div>

          {/* Streaming View */}
          <div className={`tab-content ${activeTab === 'streaming' ? 'active' : ''}`}>
            <div className="content-grid">
              <div className="app-card">
                <div className="card-label">CAMERA PROFILE</div>
                <div className="settings-row">
                  <span>SELECTED RESOLUTION</span>
                  <span className="settings-value" style={activeTheme === 'dark' ? {color: '#fff'} : {color: '#333'}}>1080P</span>
                </div>
                <div className="grid-buttons">
                  <button className="grid-btn">NATIVE</button>
                  <button className="grid-btn">1440P</button>
                  <button className="grid-btn active">1080P</button>
                  <button className="grid-btn">720P</button>
                  <button className="grid-btn">480P</button>
                  <button className="grid-btn">240P</button>
                </div>
                <div className="fps-label">FPS: 30</div>
                <div className="fps-grid">
                  <button className="grid-btn">5</button>
                  <button className="grid-btn">15</button>
                  <button className="grid-btn active">30</button>
                  <button className="grid-btn">45</button>
                  <button className="grid-btn">60</button>
                </div>
              </div>
              
              <div className="app-card">
                <div className="card-label">SCREEN PROFILE</div>
                <div className="settings-row">
                  <span>SELECTED RESOLUTION</span>
                  <span className="settings-value" style={activeTheme === 'dark' ? {color: '#fff'} : {color: '#333'}}>1080P</span>
                </div>
                <div className="grid-buttons">
                  <button className="grid-btn">NATIVE</button>
                  <button className="grid-btn">1440P</button>
                  <button className="grid-btn active">1080P</button>
                  <button className="grid-btn">720P</button>
                  <button className="grid-btn">480P</button>
                  <button className="grid-btn">240P</button>
                </div>
                <div className="fps-label">FPS: 30</div>
                <div className="fps-grid">
                  <button className="grid-btn">5</button>
                  <button className="grid-btn">15</button>
                  <button className="grid-btn active">30</button>
                  <button className="grid-btn">45</button>
                  <button className="grid-btn">60</button>
                </div>
              </div>
            </div>
            <div className="stop-server-bar">
              <p>Keep the local server ready for direct phone camera and phone screen triggers.</p>
              <button className="stop-btn">STOP SERVER</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ProtocolModal = ({ onClose }) => {
  const [selectedProtocol, setSelectedProtocol] = useState('lan');

  return (
    <div className="modal-backdrop fade-in" onClick={onClose}>
      <motion.div 
        className="modal-content glass-panel"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}><FiX /></button>
        <h2>Protocol Setup</h2>
        <p className="modal-subtitle">Configure how your devices connect securely.</p>
        
        <div className="modal-body">
          <label className="modal-label">CONNECTION OPTIONS</label>
          <div className="connection-cards">
            <div 
              className={`conn-card ${selectedProtocol === 'lan' ? 'active' : ''}`}
              onClick={() => setSelectedProtocol('lan')}
            >
              <FiWifi className="conn-icon" />
              <div className="conn-info">
                <strong>LAN <span>(Recommended)</span></strong>
                <p>Fast and stable over same network</p>
              </div>
            </div>

            <div 
              className={`conn-card ${selectedProtocol === 'wifi-direct' ? 'active' : ''}`}
              onClick={() => setSelectedProtocol('wifi-direct')}
            >
              <FiZap className="conn-icon" />
              <div className="conn-info">
                <strong>WiFi Direct</strong>
                <p>Direct connection without router</p>
              </div>
            </div>

            <div 
              className={`conn-card ${selectedProtocol === 'usb' ? 'active' : ''}`}
              onClick={() => setSelectedProtocol('usb')}
            >
              <FiMonitor className="conn-icon" />
              <div className="conn-info">
                <strong>USB Connection</strong>
                <p>Low latency wired connection</p>
              </div>
            </div>
          </div>

          <div className="info-box">
            <FiTarget size={20} />
            <div>
              <strong>Auto Device Detection Active</strong>
              <p>Your PC will automatically appear when the server is running.</p>
            </div>
          </div>

          <div className="security-note">
            <FiShield className="secure-icon" /> 
            <div>
              <strong>Secure Connection</strong>
              <p>No external servers. Direct device-to-device communication.</p>
            </div>
          </div>
        </div>

        <button className="primary-btn full-width mt-4" onClick={onClose}>Start Connection</button>
      </motion.div>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [showModal]);

  return (
    <div className="app">
      <div className="particles-bg"></div>
      
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="hero">
          <div className="hero-content fade-in">
            <h1 className="hero-title">xdroid Pro</h1>
            <h2 className="hero-subtitle">Control Your PC in Real-Time</h2>
            <div className="hero-actions stagger-1 slide-up">
              <button className="primary-btn">Download APK</button>
              <button className="glass-btn" onClick={() => setShowModal(true)}><FiSettings /> Protocol Setup</button>
            </div>
          </div>
        </section>

        {/* LIVE DEMO SECTION */}
        <section id="demo">
          <div className="demo-header stagger-1 slide-up">
            <span className="hero-tag">App Screen</span>
            <h2 className="section-title" style={{marginBottom: 0}}>Live Interface Preview</h2>
          </div>
          <AppMockup />
        </section>

        {/* FEATURES SECTION */}
        <section id="features">
          <div className="features-grid">
            {featuresData.map((feature, i) => (
              <motion.div 
                key={feature.id} 
                className="clean-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="feature-icon"><feature.icon /></div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing">
          <h2 className="section-title">Choose Your Power Level</h2>
          
          <div className="pricing-grid">
            {/* Free */}
            <motion.div 
              className="clean-card pricing-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="price-header">
                <h3>Free Plan</h3>
                <div className="price-amount">Free</div>
              </div>
              <ul className="pricing-features">
                <li><FiCheck /> Basic PC control</li>
                <li><FiCheck /> Limited streaming</li>
                <li><FiCheck /> Standard quality</li>
                <li style={{ color: '#ff6b6b' }}><FiCheck /> Includes Ads</li>
              </ul>
              <button className="glass-btn block-btn">Get Started</button>
            </motion.div>
            
            {/* Pro */}
            <motion.div 
              className="clean-card pricing-card pro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="pricing-badge">Save 60%</div>
              <div className="price-header">
                <h3>Pro Plan <span className="trial-tag">3-Day Free Trial</span></h3>
                <div className="price-container">
                  <div className="price-amount">₹99<span> / month</span></div>
                  <div className="price-annual">₹499 / year (Best Value 🔥)</div>
                </div>
              </div>
              <ul className="pricing-features">
                <li><FiCheck /> Full control</li>
                <li><FiCheck /> HD streaming</li>
                <li><FiCheck /> Phone ↔ PC casting</li>
                <li><FiCheck /> Gaming mode</li>
                <li><FiCheck color="#1aff66" /> No Ads</li>
              </ul>
              <button className="primary-btn block-btn">Upgrade to Pro</button>
            </motion.div>
          </div>
        </section>

        {/* WHY UPGRADE */}
        <section id="why-upgrade" className="glass-section">
          <h2 className="section-title">Why Upgrade?</h2>
          <div className="upgrade-grid">
            <div className="upgrade-item">
              <FiZap className="upgrade-icon" />
              <h4>Faster Performance</h4>
            </div>
            <div className="upgrade-item">
              <FiMonitor className="upgrade-icon" />
              <h4>No Ads</h4>
            </div>
            <div className="upgrade-item">
              <FiTarget className="upgrade-icon" />
              <h4>Gaming Mode Unlocked</h4>
            </div>
            <div className="upgrade-item">
              <FiWifi className="upgrade-icon" />
              <h4>Ultra-Low Latency</h4>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section id="comparison">
          <h2 className="section-title">Compare Plans</h2>
          <div className="table-container">
            <table className="glass-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Free</th>
                  <th>Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PC Control</td>
                  <td>Basic</td>
                  <td><FiCheck className="accent" /> Full</td>
                </tr>
                <tr>
                  <td>Streaming Quality</td>
                  <td>Standard</td>
                  <td><FiCheck className="accent" /> HD</td>
                </tr>
                <tr>
                  <td>Gaming Mode</td>
                  <td>-</td>
                  <td><FiCheck className="accent" /> Included</td>
                </tr>
                <tr>
                  <td>Phone ↔ PC Casting</td>
                  <td>-</td>
                  <td><FiCheck className="accent" /> Included</td>
                </tr>
                <tr>
                  <td>Ads</td>
                  <td style={{color: '#ff6b6b'}}>Included</td>
                  <td><FiCheck className="accent" /> None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="clean-card step-card">
              <div className="step-num">01</div>
              <FiWifi className="step-icon" />
              <h4>Connect Devices</h4>
              <p>Connect your phone and PC using WiFi, Hotspot, or USB.</p>
            </div>
            <div className="clean-card step-card">
              <div className="step-num">02</div>
              <FiMonitor className="step-icon" />
              <h4>Select Device</h4>
              <p>Start the server on your PC and select the auto-detected IP address.</p>
            </div>
            <div className="clean-card step-card">
              <div className="step-num">03</div>
              <FiZap className="step-icon" />
              <h4>Start Control</h4>
              <p>Instantly control your PC with no complex setup.</p>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section id="trust">
          <div className="trust-container glass-panel">
            <FiShield className="trust-main-icon" />
            <h3>Secure & Private by Design</h3>
            <p>Direct device communication on your local network.</p>
            <div className="trust-features">
              <span><FiLock /> End-to-End Encryption</span>
              <span><FiCheck /> No Data Stored</span>
              <span><FiWifi /> Direct Connection</span>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="final-cta">
          <h2>Start Controlling Your PC Now</h2>
          <button className="primary-btn huge-btn">Download xdroid Pro</button>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/assets/dragon.svg" alt="xdroid Logo" className="footer-logo" />
            <span>xdroid Pro</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2026 xdroid Pro. All rights reserved.</div>
      </footer>

      <AnimatePresence>
        {showModal && <ProtocolModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
