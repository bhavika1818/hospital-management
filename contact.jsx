// Contact Component
const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('general');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    console.log('Contact form data:', formData);
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setShowSuccess(false);
    }, 5000);
  };

  const hospitalInfo = {
    address: {
      main: "CureDash Hospital, MG Road, New Delhi 110001",
      emergency: "Emergency Wing, Ground Floor, Building A"
    },
    contacts: {
      general: "+91 8000-000-000",
      emergency: "+91 9000-000-000",
      appointment: "+91 8000-000-001",
      email: "help@curedash.example",
      ambulance: "+91 9000-000-001"
    },
    hours: {
      opd: { days: "Monday - Saturday", time: "9:00 AM – 6:00 PM" },
      ipd: { days: "Daily", time: "11:00 AM – 1:00 PM, 5:00 PM – 7:00 PM" },
      emergency: { days: "24/7", time: "Always Open" },
      pharmacy: { days: "Daily", time: "8:00 AM – 10:00 PM" },
      cafeteria: { days: "Daily", time: "7:00 AM – 11:00 PM" }
    }
  };

  const openMap = () => {
    // In real app, this would open actual map
    alert('Opening hospital location in maps...');
    window.open('https://maps.google.com', '_blank');
  };

  const getDirections = () => {
    alert('Getting directions to CureDash Hospital...');
    window.open('https://maps.google.com/directions', '_blank');
  };

  const callEmergency = () => {
    if (confirm('Call Emergency: +91 9000-000-000?')) {
      window.location.href = 'tel:+919000000000';
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="container topbar">
        <a className="logo" href="index.html" aria-label="CureDash Hospital Home">
          <img src="logoo.jpg" alt="CureDash Hospital Logo" height="50" width="55" style={{borderRadius: '50%'}} />
          <span className="title">CureDash</span>
        </a>
        <nav aria-label="Primary Navigation">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="departments.html">Departments</a></li>
            <li><a href="doctors.html">Doctors</a></li>
            <li><a href="timetable.html">Timetable</a></li>
            <li><a href="appointment.html" className="cta-btn">Book Appointment</a></li>
            <li><a href="contact.html" className="active">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container contact-hero">
        <div className="section-title">
          <h2>Contact & Location</h2>
          <p>Get in touch or visit us - we're here to help 24/7</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Address Card */}
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div className="contact-info">
              <h3>Address & Location</h3>
              <div className="info-item">
                <span className="info-label">Main Hospital</span>
                <span className="info-value">{hospitalInfo.address.main}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Emergency Wing</span>
                <span className="info-value">{hospitalInfo.address.emergency}</span>
              </div>
              
              <div className="emergency-contact">
                <div className="info-item">
                  <span className="info-label">24×7 Emergency & Ambulance</span>
                  <span className="info-value" style={{cursor: 'pointer'}} onClick={callEmergency}>
                    {hospitalInfo.contacts.emergency}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <div className="contact-info">
              <h3>Send us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="How can we help you? Please share your feedback, questions, or concerns..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>

              {showSuccess && (
                <div className="success-message show">
                  <h4>✅ Message Sent Successfully!</h4>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>

          {/* Visiting Hours Card */}
          <div className="contact-card">
            <div className="contact-icon">🕒</div>
            <div className="contact-info">
              <h3>Visiting Hours</h3>
              <ul className="hours-list">
                <li className="hours-item">
                  <span className="day">Outpatient (OPD)</span>
                  <span className="time">{hospitalInfo.hours.opd.time}</span>
                </li>
                <li className="hours-item">
                  <span className="day">{hospitalInfo.hours.opd.days}</span>
                  <span className="time"></span>
                </li>
                
                <div style={{height: '10px'}}></div>
                
                <li className="hours-item">
                  <span className="day">Inpatient (IPD)</span>
                  <span className="time">{hospitalInfo.hours.ipd.time}</span>
                </li>
                <li className="hours-item">
                  <span className="day">Visiting Hours</span>
                  <span className="time"></span>
                </li>
                
                <div style={{height: '10px'}}></div>
                
                <li className="hours-item">
                  <span className="day">Emergency</span>
                  <span className="time">{hospitalInfo.hours.emergency.time}</span>
                </li>
              </ul>

              <div style={{marginTop: '20px', fontSize: '0.9rem', color: 'var(--muted)'}}>
                <p><strong>Note:</strong> Carry a valid photo ID for visitor pass. Maximum 2 visitors per patient allowed.</p>
              </div>

              <div className="contact-info" style={{marginTop: '20px'}}>
                <div className="info-item">
                  <span className="info-label">Pharmacy Hours</span>
                  <span className="info-value">{hospitalInfo.hours.pharmacy.time}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Cafeteria</span>
                  <span className="info-value">{hospitalInfo.hours.cafeteria.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="quick-contact">
          <div className="quick-item">
            <div className="quick-icon">📞</div>
            <div className="quick-label">General Helpline</div>
            <div className="quick-value">{hospitalInfo.contacts.general}</div>
          </div>
          <div className="quick-item">
            <div className="quick-icon">📅</div>
            <div className="quick-label">Appointments</div>
            <div className="quick-value">{hospitalInfo.contacts.appointment}</div>
          </div>
          <div className="quick-item">
            <div className="quick-icon">📧</div>
            <div className="quick-label">Email</div>
            <div className="quick-value">{hospitalInfo.contacts.email}</div>
          </div>
          <div className="quick-item">
            <div className="quick-icon">🚑</div>
            <div className="quick-label">Ambulance</div>
            <div className="quick-value">{hospitalInfo.contacts.ambulance}</div>
          </div>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <div className="section-title">
            <h2>Find Us</h2>
            <p>Visit our hospital or get directions</p>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🏥</div>
              <div>
                <h4 style={{margin: '0 0 10px 0', color: 'var(--text)'}}>CureDash Hospital Location</h4>
                <p style={{margin: 0}}>MG Road, New Delhi 110001</p>
                <p style={{margin: '5px 0 0 0', fontSize: '0.9rem'}}>
                  Click below to view on maps or get directions
                </p>
              </div>
            </div>
            
            <div className="map-actions">
              <button className="map-btn" onClick={openMap}>
                <span>📍</span>
                View on Map
              </button>
              <button className="map-btn" onClick={getDirections}>
                <span>🚗</span>
                Get Directions
              </button>
              <a href={`tel:${hospitalInfo.contacts.general}`} className="map-btn">
                <span>📞</span>
                Call Hospital
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="container">
        <div className="footer-grid">
          <div className="foot-brand">
            <div className="logo" style={{marginBottom: '8px'}}>
              <img src="logoo.jpg" alt="CarePlus Hospital Logo" height="50" width="55" style={{borderRadius: '50%'}} />
              <span className="title">CureDash</span>
            </div>
            <p className="muted">© {new Date().getFullYear()} CureDash Health Pvt. Ltd.</p>
          </div>
          <div className="foot-col">
            <h4>Hospital</h4>
            <a href="index.html">Home</a>
            <a href="departments.html">Departments</a>
            <a href="doctors.html">Doctors</a>
          </div>
          <div className="foot-col">
            <h4>Management</h4>
            <a href="patient-records.html">Patient Records</a>
            <a href="billing.html">Billing</a>
            <a href="lab-results.html">Lab Results</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contact />);