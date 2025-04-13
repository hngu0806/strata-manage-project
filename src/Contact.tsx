function Contact() {
  return (
    <div style={{ 
      padding: '40px 24px', 
      textAlign: 'center', 
      maxWidth: '100%', 
      margin: '0 auto', 
      color: '#f5f5f5', 
      backgroundColor: '#0D0D0D', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <h1 style={{ 
        fontSize: '40px', 
        marginBottom: '40px', 
        color: '#f5f5f5',
        fontFamily: 'Playfair Display, serif',
        fontWeight: 600,
        letterSpacing: '0.02em'
      }}>Contact Us</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '32px', 
        padding: '0', 
        maxWidth: '1200px', 
        width: '100%' 
      }}>
        <section style={{ 
          padding: '40px', 
          border: '1px solid #333', 
          borderRadius: '16px', 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)'
        }}>
          <h2 style={{ 
            color: '#f5f5f5', 
            marginBottom: '24px', 
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            fontWeight: 600,
            position: 'relative'
          }}>
            <span style={{ 
              position: 'relative', 
              display: 'inline-block',
              paddingBottom: '8px'
            }}>
              Contact Information
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '60px', 
                height: '2px', 
                backgroundColor: '#D4AF37' 
              }}></span>
            </span>
          </h2>
          
          <div style={{ textAlign: 'left', marginBottom: '24px' }}>
            <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Customer Service</h3>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Phone: (04) 9193 1102</p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Email: service@kevman.com</p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>For any inquiries about paying your fees, renting common areas, hosting events, or other matters.</p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Hours: Monday-Friday, 7am-8pm</p>
            <a href="tel:0491931102" style={{ 
              display: 'inline-block',
              marginTop: '16px', 
              padding: '12px 24px', 
              backgroundColor: '#D4AF37', 
              color: '#0D0D0D', 
              border: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}>Call Customer Service</a>
          </div>
        </section>
        
        <section style={{ 
          padding: '40px', 
          border: '1px solid #333', 
          borderRadius: '16px', 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)'
        }}>
          <h2 style={{ 
            color: '#f5f5f5', 
            marginBottom: '24px', 
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            fontWeight: 600,
            position: 'relative'
          }}>
            <span style={{ 
              position: 'relative', 
              display: 'inline-block',
              paddingBottom: '8px'
            }}>
              Office Location
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '60px', 
                height: '2px', 
                backgroundColor: '#D4AF37' 
              }}></span>
            </span>
          </h2>
          
          <div style={{ textAlign: 'left', marginBottom: '24px' }}>
            <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Main Office</h3>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Address: 83 George St, Sydney NSW 2000</p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Reception: (04) 8386 7797</p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Office Hours: Monday-Friday, 9am-5pm</p>
          </div>
          
          <div style={{ flex: 1, padding: '20px' }}>
            <img 
              src="/public/Map.png" 
              alt="Map" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
              }} 
            />
          </div>
        </section>

        <section style={{ 
          padding: '40px', 
          border: '1px solid #333', 
          borderRadius: '16px', 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)'
        }}>
          <h2 style={{ 
            color: '#f5f5f5', 
            marginBottom: '24px', 
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            fontWeight: 600,
            position: 'relative'
          }}>
            <span style={{ 
              position: 'relative', 
              display: 'inline-block',
              paddingBottom: '8px'
            }}>
              Sales Contact
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '60px', 
                height: '2px', 
                backgroundColor: '#D4AF37' 
              }}></span>
            </span>
          </h2>
          
          <div style={{ textAlign: 'left', marginBottom: '24px' }}>
            <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>New Properties, Investments & Rentals</h3>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Phone: (04) 1102 0578</p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Email: sales@kevman.com</p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '16px' }}>For any inquiries about new properties, investments, and rentals.</p>
            <a href="tel:0411020578" style={{ 
              display: 'inline-block',
              marginTop: '16px', 
              padding: '12px 24px', 
              backgroundColor: '#D4AF37', 
              color: '#0D0D0D', 
              border: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}>Contact Sales Team</a>
          </div>
        </section>
        
        <section style={{ 
          gridColumn: 'span 2',
          padding: '40px', 
          border: '1px solid #333', 
          borderRadius: '16px', 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)'
        }}>
          <h2 style={{ 
            color: '#f5f5f5', 
            marginBottom: '24px', 
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            fontWeight: 600,
            position: 'relative'
          }}>
            <span style={{ 
              position: 'relative', 
              display: 'inline-block',
              paddingBottom: '8px'
            }}>
              Emergency Contacts
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '60px', 
                height: '2px', 
                backgroundColor: '#D4AF37' 
              }}></span>
            </span>
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
            <div style={{ width: '48%', textAlign: 'left' }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Building Emergencies</h3>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>24/7 Emergency Line: (04) 8888 9999</p>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '16px' }}>For urgent building-related issues such as water leaks, electrical failures, or security concerns.</p>
              <a href="tel:0488889999" style={{ 
                display: 'inline-block',
                padding: '12px 24px', 
                backgroundColor: '#D4AF37', 
                color: '#0D0D0D', 
                border: 'none', 
                borderRadius: '8px', 
                fontWeight: 'bold',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>Call Emergency Line</a>
            </div>
            <div style={{ width: '48%', textAlign: 'left' }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Public Emergency Services</h3>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Police, Fire, Ambulance: 000</p>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>SES (State Emergency Service): 132 500</p>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6', marginBottom: '8px' }}>Poisons Information Centre: 13 11 26</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
