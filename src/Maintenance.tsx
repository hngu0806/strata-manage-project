function Maintenance() {
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
        }}>Building Maintenance & Fees</h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '32px', 
          padding: '0', 
          maxWidth: '1200px', 
          width: '100%' 
        }}>
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
              marginBottom: '32px', 
              fontFamily: 'Playfair Display, serif',
              fontSize: '32px',
              fontWeight: 600,
              position: 'relative'
            }}>
              <span style={{ 
                position: 'relative', 
                display: 'inline-block',
                paddingBottom: '8px'
              }}>
                Service Maintenance Schedule
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
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              gap: '40px'
            }}>
              <div style={{ width: '48%' }}>
                <h3 style={{ 
                  color: '#D4AF37', 
                  marginBottom: '20px',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px'
                }}>Regular Maintenance</h3>
                <ul style={{ 
                  listStyleType: 'none', 
                  textAlign: 'left', 
                  color: '#B0B0B0',
                  padding: 0
                }}>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>✦ Daily cleaning of common areas</li>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>✦ Weekly swimming pool maintenance</li>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>✦ Monthly elevator maintenance</li>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>✦ Quarterly fire safety inspection</li>
                  <li style={{ padding: '8px 0' }}>✦ Annual building inspection and repairs</li>
                </ul>
              </div>
              <div style={{ width: '48%' }}>
                <h3 style={{ 
                  color: '#D4AF37', 
                  marginBottom: '20px',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px'
                }}>Emergency Services</h3>
                <ul style={{ 
                  listStyleType: 'none', 
                  textAlign: 'left', 
                  color: '#B0B0B0',
                  padding: 0
                }}>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>✦ 24/7 emergency plumbing</li>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>✦ 24/7 emergency electrical services</li>
                  <li style={{ padding: '8px 0', borderBottom: '1px solid #333' }}>✦ After-hours security response</li>
                  <li style={{ padding: '8px 0' }}>✦ Locksmith services</li>
                </ul>
              </div>
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
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '8px'
            }}>
              <span style={{ 
                position: 'relative', 
                display: 'inline-block',
                paddingBottom: '8px'
              }}>
                Fees and Service Charges
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
            <p style={{ color: '#B0B0B0', textAlign: 'left', marginBottom: '16px', lineHeight: '1.6' }}>Strata managing fees are $200 per month. This covers the cost of cleaning, maintenance, and other services.</p>
            <p style={{ color: '#B0B0B0', textAlign: 'left', marginBottom: '16px', lineHeight: '1.6' }}>Additional fees for special services, such as pest control, are billed separately.</p>
            <p style={{ color: '#B0B0B0', textAlign: 'left', lineHeight: '1.6' }}>All fees are due on the first day of each month.</p>
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
                Need Assistance?
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
            <p style={{ color: '#B0B0B0', textAlign: 'left', marginBottom: '8px', lineHeight: '1.6' }}>For any questions regarding maintenance services or fee payments, please contact our customer service:</p>
            <p style={{ color: '#B0B0B0', textAlign: 'left', marginBottom: '8px', lineHeight: '1.6' }}>Customer Service: (04) 9193 1102</p>
            <p style={{ color: '#B0B0B0', textAlign: 'left', marginBottom: '8px', lineHeight: '1.6' }}>Email: service@kevman.com</p>
            <p style={{ color: '#B0B0B0', textAlign: 'left', marginBottom: '24px', lineHeight: '1.6' }}>Hours: Monday-Friday, 7am-8pm</p>
            <a href="tel:0491931102" style={{ 
              display: 'inline-block',
              marginTop: '16px', 
              padding: '14px 28px', 
              backgroundColor: '#D4AF37', 
              color: '#0D0D0D', 
              border: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}>Contact Customer Service</a>
          </section>
        </div>
      </div>
    );
  }
  
  export default Maintenance;