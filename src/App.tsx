import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Maintenance from '../src/Maintenance'
import Enquiries from '../src/Enquiries'
import Contact from '../src/Contact'
import About from '../src/About'

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Inter', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0D0D0D', color: '#f5f5f5' }}>
        <header style={{ 
          backgroundColor: '#1A1A1A', 
          padding: '16px 24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderBottom: '1px solid #333',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}>
          <h1 style={{ 
            margin: 0, 
            color: '#f5f5f5', 
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            letterSpacing: '0.02em'
          }}>KevMan</h1>
          <nav>
            <Link to="/" style={{ margin: '0 16px', textDecoration: 'none', color: '#D4AF37', fontWeight: 500 }}>Home</Link>
            <Link to="/maintenance" style={{ margin: '0 16px', textDecoration: 'none', color: '#D4AF37', fontWeight: 500 }}>Maintenance</Link>
            <Link to="/enquiries" style={{ margin: '0 16px', textDecoration: 'none', color: '#D4AF37', fontWeight: 500 }}>Enquiries</Link>
            <Link to="/contact" style={{ margin: '0 16px', textDecoration: 'none', color: '#D4AF37', fontWeight: 500 }}>Contact</Link>
            <Link to="/about" style={{ margin: '0 16px', textDecoration: 'none', color: '#D4AF37', fontWeight: 500 }}>About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <main style={{ 
                backgroundImage: "url('/public/architecture-buildings-business-city-5ccb68fb6f8353704197a9b34ae1749b.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                color: '#f5f5f5', 
                textAlign: 'center', 
                padding: '120px 24px', 
                flex: 1,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(13, 13, 13, 0.7)',
                  backdropFilter: 'blur(2px)'
                }}></div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h2 style={{ 
                    fontSize: '48px', 
                    marginBottom: '24px', 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600
                  }}>Welcome to your home</h2>
                  <p style={{ 
                    fontSize: '18px', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    color: '#f5f5f5'
                  }}>In KevMan - You're in good hands</p>
                </div>
              </main>
              <section style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                padding: '48px 24px', 
                backgroundColor: '#0D0D0D', 
                color: '#f5f5f5',
                gap: '24px'
              }}>
                <div className="card" style={{ 
                  width: '30%', 
                  padding: '32px 24px', 
                  backgroundColor: '#1A1A1A', 
                  color: '#B0B0B0', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
                }}>
                  <h3 style={{ 
                    color: '#f5f5f5', 
                    marginBottom: '16px', 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '24px'
                  }}>About Our Building</h3>
                  <p style={{ lineHeight: '1.6' }}>Here in Kevman, we provide you with the best service for not only your building but also your family. Manage by us? Live in trust.</p>
                </div>
                <div className="card" style={{ 
                  width: '30%', 
                  padding: '32px 24px', 
                  backgroundColor: '#1A1A1A', 
                  color: '#B0B0B0', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
                }}>
                  <h3 style={{ 
                    color: '#f5f5f5', 
                    marginBottom: '16px', 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '24px'
                  }}>What We Offer:</h3>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: 0,
                    lineHeight: '1.8'
                  }}>
                    <li>✦ 24/7 Security</li>
                    <li>✦ Maintenance Support</li>
                    <li>✦ Rental Management</li>
                    <li>✦ Event Management</li>
                  </ul>
                </div>
                <div className="card" style={{ 
                  width: '30%', 
                  padding: '32px 24px', 
                  backgroundColor: '#1A1A1A', 
                  color: '#B0B0B0', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
                }}>
                  <h3 style={{ 
                    color: '#f5f5f5', 
                    marginBottom: '16px', 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '24px'
                  }}>Quick Contact</h3>
                  <p style={{ marginBottom: '24px', lineHeight: '1.6' }}>Need assistance? We are here to help. Contact us through our dedicated customer service support team.</p>
                  <a href="tel:0491931102" style={{ 
                    display: 'inline-block',
                    padding: '12px 24px', 
                    backgroundColor: '#D4AF37', 
                    color: '#0D0D0D', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}>Contact Customer Service</a>
                </div>
              </section>
            </>
          } />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/enquiries" element={<Enquiries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
