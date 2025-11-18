// Login Component
const Login = () => {
  const [formData, setFormData] = React.useState({
    role: '',
    username: '',
    password: ''
  });
  
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [selectedRole, setSelectedRole] = React.useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData({
      ...formData,
      role: role
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.role || !formData.username || !formData.password) {
      setErrorMessage('Please fill in all fields');
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    // Simulate login process
    console.log('Login attempt:', formData);
    
    // For demo purposes - always show success
    // In real app, you would make an API call here
    setShowSuccess(true);
    setShowError(false);
    
    // Redirect after successful login
    setTimeout(() => {
      switch(formData.role) {
        case 'patient':
          window.location.href = "index.html";
          break;
        case 'doctor':
          window.location.href = "index.html";
          break;
        case 'staff':
          window.location.href = "index.html";
          break;
        case 'admin':
          window.location.href = "index.html";
          break;
        default:
          window.location.href = "index.html";
      }
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      role: '',
      username: '',
      password: ''
    });
    setSelectedRole('');
    setShowSuccess(false);
    setShowError(false);
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
            <li><a href="department.html">Departments</a></li>
            <li><a href="doctors.html">Doctors</a></li>
            <li><a href="timetable.html">Timetable</a></li>
            <li><a href="appointment.html" className="cta-btn">Book Appointment</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Login Section */}
      <section className="container login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <img src="logoo.jpg" alt="CureDash Logo" height="60" width="65" style={{borderRadius: '50%'}} />
              <span>CureDash</span>
            </div>
            <p className="login-subtitle">Access your account to manage appointments and records</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div className="role-options">
              <div 
                className={`role-option ${selectedRole === 'patient' ? 'selected' : ''}`}
                onClick={() => handleRoleSelect('patient')}
              >
                <div className="role-icon">👤</div>
                <div className="role-name">Patient</div>
              </div>
              <div 
                className={`role-option ${selectedRole === 'doctor' ? 'selected' : ''}`}
                onClick={() => handleRoleSelect('doctor')}
              >
                <div className="role-icon">👨‍⚕️</div>
                <div className="role-name">Doctor</div>
              </div>
              <div 
                className={`role-option ${selectedRole === 'staff' ? 'selected' : ''}`}
                onClick={() => handleRoleSelect('staff')}
              >
                <div className="role-icon">💼</div>
                <div className="role-name">Staff</div>
              </div>
              <div 
                className={`role-option ${selectedRole === 'admin' ? 'selected' : ''}`}
                onClick={() => handleRoleSelect('admin')}
              >
                <div className="role-icon">⚙️</div>
                <div className="role-name">Admin</div>
              </div>
            </div>

            <input type="hidden" name="role" value={formData.role} />

            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username or Email
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="form-input"
                placeholder="Enter your username or email"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="login-btn">
              Login to Account
            </button>

            {/* Success Message */}
            {showSuccess && (
              <div className="success-message show">
                <h4>✅ Login Successful!</h4>
                <p>Redirecting you to your dashboard...</p>
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="error-message show">
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
          </form>

          {/* Additional Links */}
          <div className="login-links">
            <a href="#" className="login-link">Forgot Password?</a>
            <a href="#" className="login-link">Need Help?</a>
          </div>

          <div className="signup-section">
            New to CureDash? <a href="#" className="login-link">Create an account</a>
          </div>

          {/* Demo Credentials Info */}
          <div style={{marginTop: '25px', padding: '15px', background: 'rgba(135,243,255,0.05)', borderRadius: '10px', fontSize: '0.8rem', color: 'var(--muted)'}}>
            <strong>Demo Credentials:</strong><br/>
            • Patient: patient123 / any password<br/>
            • Doctor: doctor123 / any password<br/>
            • Staff: staff123 / any password
          </div>
        </div>
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
            <a href="department.html">Departments</a>
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
root.render(<Login />);