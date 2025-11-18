// Departments Component
const Departments = () => {
  const [departments, setDepartments] = React.useState([]);
  const [filteredDepartments, setFilteredDepartments] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSpecialty, setSelectedSpecialty] = React.useState('all');

  // Departments Data
  const departmentsData = [
    {
      id: 1,
      name: "Cardiology",
      icon: "❤️",
      description: "Comprehensive heart care with advanced technology and experienced specialists.",
      features: ["Non-invasive cardiology", "Cath lab procedures", "Cardiac rehabilitation", "24/7 emergency care"],
      doctors: 15,
      beds: 45,
      emergency: true
    },
    {
      id: 2,
      name: "Neurology",
      icon: "🧠",
      description: "Diagnosis and treatment of brain, spine, and nervous system disorders.",
      features: ["Stroke unit", "EEG/EMG services", "Epilepsy clinic", "Neuro-rehabilitation"],
      doctors: 12,
      beds: 35,
      emergency: true
    },
    {
      id: 3,
      name: "Orthopedics",
      icon: "🦴",
      description: "Expert care for bone, joint, and muscle problems with modern techniques.",
      features: ["Joint replacement", "Sports injuries", "Spinal surgery", "Arthroscopy"],
      doctors: 18,
      beds: 50,
      emergency: true
    },
    {
      id: 4,
      name: "Pediatrics",
      icon: "👶",
      description: "Dedicated healthcare for infants, children, and adolescents.",
      features: ["Neonatal ICU", "Vaccination services", "Growth monitoring", "Child psychology"],
      doctors: 14,
      beds: 40,
      emergency: true
    },
    {
      id: 5,
      name: "Obstetrics & Gynecology",
      icon: "🍼",
      description: "Specialized women's health services including maternity and reproductive care.",
      features: ["Antenatal care", "Delivery suites", "Fertility treatments", "Menopause care"],
      doctors: 16,
      beds: 60,
      emergency: true
    },
    {
      id: 6,
      name: "Oncology",
      icon: "🧪",
      description: "Comprehensive cancer care with advanced treatment options.",
      features: ["Chemotherapy", "Radiation therapy", "Tumor board", "Palliative care"],
      doctors: 10,
      beds: 30,
      emergency: false
    },
    {
      id: 7,
      name: "Dermatology",
      icon: "🌟",
      description: "Specialized care for skin, hair, and nail disorders.",
      features: ["Cosmetic dermatology", "Skin cancer screening", "Laser therapy", "Acne treatment"],
      doctors: 8,
      beds: 15,
      emergency: false
    },
    {
      id: 8,
      name: "Emergency Medicine",
      icon: "🚑",
      description: "24/7 emergency services with quick response and immediate medical care.",
      features: ["Trauma care", "Critical care", "Rapid diagnostics", "Emergency surgery"],
      doctors: 20,
      beds: 25,
      emergency: true
    }
  ];

  const specialties = [
    { id: 'all', name: 'All Departments' },
    { id: 'emergency', name: 'Emergency Care' },
    { id: 'surgical', name: 'Surgical' },
    { id: 'medical', name: 'Medical' },
    { id: 'specialized', name: 'Specialized Care' }
  ];

  React.useEffect(() => {
    setDepartments(departmentsData);
    setFilteredDepartments(departmentsData);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterDepartments(term, selectedSpecialty);
  };

  const handleSpecialtyChange = (e) => {
    const specialty = e.target.value;
    setSelectedSpecialty(specialty);
    filterDepartments(searchTerm, specialty);
  };

  const filterDepartments = (term, specialty) => {
    let filtered = departmentsData;
    
    // Apply search filter
    if (term) {
      filtered = filtered.filter(dept => 
        dept.name.toLowerCase().includes(term) ||
        dept.description.toLowerCase().includes(term)
      );
    }
    
    // Apply specialty filter
    if (specialty !== 'all') {
      if (specialty === 'emergency') {
        filtered = filtered.filter(dept => dept.emergency);
      }
      // Add more specialty filters as needed
    }
    
    setFilteredDepartments(filtered);
  };

  const viewDepartment = (deptId) => {
    alert(`Viewing details for ${departmentsData.find(d => d.id === deptId)?.name}`);
    // Navigate to department details page
  };

  const bookAppointment = (deptId) => {
    window.location.href = `appointment.html?department=${deptId}`;
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
            <li><a href="departments.html" className="active">Departments</a></li>
            <li><a href="doctors.html">Doctors</a></li>
            <li><a href="timetable.html">Timetable</a></li>
            <li><a href="appointment.html" className="cta-btn">Book Appointment</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container departments-hero">
        <div className="section-title">
          <h2>Our Medical Departments</h2>
          <p>Comprehensive healthcare services across all major specialties</p>
        </div>

        {/* Search and Filter */}
        <div className="departments-filter">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <select 
            className="filter-select"
            value={selectedSpecialty}
            onChange={handleSpecialtyChange}
          >
            {specialties.map(specialty => (
              <option key={specialty.id} value={specialty.id}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        {/* Departments Grid */}
        <div className="departments-grid">
          {filteredDepartments.map(department => (
            <div 
              key={department.id} 
              className={`department-card ${department.emergency ? 'emergency' : ''}`}
            >
              <div className="department-header">
                <div className="department-icon">
                  {department.icon}
                </div>
                <div className="department-info">
                  <h3>
                    {department.name}
                    {department.emergency && <span className="emergency-badge">24/7</span>}
                  </h3>
                  <p>{department.description}</p>
                </div>
              </div>

              <div className="department-description">
                <ul className="department-features">
                  {department.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="department-stats">
                <div className="stat">
                  <span className="stat-number">{department.doctors}+</span>
                  <span className="stat-label">Doctors</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{department.beds}</span>
                  <span className="stat-label">Beds</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{department.emergency ? '24/7' : '9AM-6PM'}</span>
                  <span className="stat-label">Hours</span>
                </div>
              </div>

              <div className="department-actions">
                <button 
                  className="btn-outline"
                  onClick={() => viewDepartment(department.id)}
                >
                  View Details
                </button>
                <button 
                  className="btn-outline"
                  onClick={() => bookAppointment(department.id)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDepartments.length === 0 && (
          <div style={{textAlign: 'center', padding: '40px', color: 'var(--muted)'}}>
            <h3>No departments found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </section>

      {/* Additional Services Section */}
      <section className="container specialties-section">
        <div className="section-title">
          <h2>Additional Specialties</h2>
          <p>Comprehensive support services for complete healthcare</p>
        </div>
        
        <div className="specialties-grid">
          <div className="specialty-item">
            <strong>Radiology & Imaging</strong>
            <p>X-ray, CT Scan, MRI, Ultrasound</p>
          </div>
          <div className="specialty-item">
            <strong>Pathology Laboratory</strong>
            <p>Blood tests, Biopsy, Microbiology</p>
          </div>
          <div className="specialty-item">
            <strong>Pharmacy</strong>
            <p>24/7 medicine availability</p>
          </div>
          <div className="specialty-item">
            <strong>Physiotherapy</strong>
            <p>Rehabilitation and recovery</p>
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
root.render(<Departments />);