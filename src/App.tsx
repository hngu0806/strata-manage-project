import './App.css'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>KevMan</h1>
        <nav>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Home</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Maintenance</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Contact</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Complaints</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>About</a>
        </nav>
      </header>
      <main style={{ 
        backgroundImage: "url('/your-background-image.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white', 
        textAlign: 'center', 
        padding: '100px 20px', 
        height: '100vh', 
        width: '100vw' 
      }}>
        <h2>Welcome to KevMan</h2>
      </main>
      <section style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#000', color: '#fff' }}>
        <div style={{ width: '30%', padding: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '8px' }}>
          <h3>About Our Building</h3>
          <p>Here in KevMan, our team assure you that we will provide the best service for you and your family at a reasonable cost. With our years of experience, we assure that your building will be managed in the best hand.</p>
        </div>
        <div style={{ width: '30%', padding: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '8px' }}>
          <h3>Our Services</h3>
          <ul>
            <li>24/7 Security</li>
            <li>Maintenance Support</li>
            <li>Rental Management</li>
            <li>Event Management</li>
          </ul>
        </div>
        <div style={{ width: '30%', padding: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '8px' }}>
          <h3>Quick Contact</h3>
          <p>Need assistance? We are here to help. Contact us through our dedicated support channels.</p>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default App
