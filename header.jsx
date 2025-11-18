const Header = () => {
  return (
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
  );
};