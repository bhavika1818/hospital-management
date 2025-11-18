// Appointment Form Component
const AppointmentForm = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.phone || !formData.department || 
        !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    // Phone validation
    const phoneRegex = /^[+0-9][0-9\-\s]{6,}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    // Date validation
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      alert('Please select a future date for your appointment');
      return;
    }

    // Simulate API call
    console.log('Appointment data:', formData);
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        age: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        notes: ''
      });
      setShowSuccess(false);
    }, 5000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      age: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  // Set minimum date to today
  React.useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').min = today;
  }, []);

  return (
    <section className="container">
      <div className="section-title">
        <h2>Book an Appointment</h2>
      </div>
      
      <div className="appointment-container">
        <div className="form-card" style={{gridColumn: 'span 2'}}>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="Your age"
                  value={formData.age}
                  onChange={handleChange}
                  min="1"
                  max="120"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="field">
                <label htmlFor="dept">Department *</label>
                <select
                  id="dept"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>Select department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Obstetrics & Gynae">Obstetrics & Gynae</option>
                  <option value="Oncology">Oncology</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="doctor">Preferred Doctor</label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                >
                  <option value="" selected>Any available doctor</option>
                  <option value="Dr. Krish Sharma">Dr. Krish Sharma</option>
                  <option value="Dr. Anya Mehta">Dr. Anya Mehta</option>
                  <option value="Dr. Rudra Rathore">Dr. Rudra Rathore</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="field">
                <label htmlFor="date">Preferred Date *</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="time">Preferred Time *</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>Select time slot</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>
            </div>
            
            <div className="field">
              <label htmlFor="notes">Reason for Visit / Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows="4"
                placeholder="Please describe your symptoms or reason for appointment"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="btn-row">
              <button className="btn primary" type="submit">
                Book Appointment
              </button>
              <button className="btn ghost" type="button" onClick={resetForm}>
                Clear Form
              </button>
            </div>
          </form>
          
          {showSuccess && (
            <div className="success-message show">
              <h3>✅ Appointment Request Submitted Successfully!</h3>
              <p>We have received your appointment request. Our team will contact you within 24 hours to confirm your appointment.</p>
              <p>You will receive a confirmation SMS and email shortly.</p>
            </div>
          )}
        </div>
        
        <aside className="info-card">
          <h3 style={{marginTop: 0}}>Why book online?</h3>
          <ul>
            <li>Faster check‑in at reception</li>
            <li>Choose preferred slot & doctor</li>
            <li>Receive SMS confirmation</li>
            <li>Easy rescheduling</li>
          </ul>
          <p className="muted">Integrate this form with your backend to save requests.</p>
        </aside>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="App">
      <Header />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

// Render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);