import './App.css'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>Kien Building</h1>
        <nav>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Home</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Maintenance</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Contact</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>Complaints</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: '#000' }}>About</a>
        </nav>
      </header>
      <main style={{ backgroundImage: "url('/your-background-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center', padding: '100px 20px' }}>
        <h2>Welcome to Kien Building</h2>
      </main>
      <section style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#000', color: '#fff' }}>
        <div style={{ width: '30%', padding: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '8px' }}>
          <h3>About Our Building</h3>
          <p>Kien Building is a modern residential complex located in the heart of the city. We pride ourselves on maintaining high standards of living and community engagement.</p>
        </div>
        <div style={{ width: '30%', padding: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '8px' }}>
          <h3>Our Services</h3>
          <ul>
            <li>24/7 Security</li>
            <li>Maintenance Support</li>
            <li>Community Events</li>
            <li>Emergency Response</li>
          </ul>
        </div>
        <div style={{ width: '30%', padding: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '8px' }}>
          <h3>Quick Contact</h3>
          <p>Need assistance? Our management team is here to help. Contact us through our dedicated support channels.</p>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default App
