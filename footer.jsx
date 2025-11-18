const Footer = () => {
  return (
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
          <a href="#services">Services</a>
          <a href="#departments">Departments</a>
          <a href="#doctors">Doctors</a>
        </div>
        <div className="foot-col">
          <h4>Management</h4>
          <a href="patient-records.html">Patient Records</a>
          <a href="billing.html">Billing</a>
          <a href="lab-results.html">Lab Results</a>
          <a href="pharmacy.html">Pharmacy</a>
        </div>
        <div className="foot-col">
          <h4>Legal</h4>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};