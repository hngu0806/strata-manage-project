import React from 'react';

function About() {
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
      }}>About KevMan</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '32px', 
        padding: '0', 
        maxWidth: '1200px', 
        width: '100%' 
      }}>
        {/* Company Overview Section */}
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
              Company Background
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
            <p style={{ color: '#B0B0B0', lineHeight: '1.8', marginBottom: '16px' }}>
              Founded in 2000, KevMan has established itself as a property management company in Australia. 
              Starting with a single residential building in Sydney, we have expanded our portfolio to include over 
              2500 properties across major metropolitan areas all over the world.
            </p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.8', marginBottom: '16px' }}>
              Our journey began when founders Kevin Nguyen and Manuel Do found common interest in property management and their passion for providing the best service of property management in the middle of the housing crisis. 
              With Kevin's background in real estate and Manuel's expertise in hospitality management, they created a 
              company that combines property maintenance excellence with exceptional customer service.
            </p>
            <p style={{ color: '#B0B0B0', lineHeight: '1.8' }}>
              Today, KevMan employs over 100 000 employees and staffs dedicated to maintaining the highest standards in property 
              management, with offices in Sydney, Melbourne, and Brisbane.
            </p>
          </div>
        </section>
        
        {/* Vision and Mission Section */}
        <section style={{ 
          padding: '40px', 
          border: '1px solid #333', 
          borderRadius: '16px', 
          backgroundColor: '#1A1A1A',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px'
        }}>
          <div style={{ textAlign: 'left' }}>
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
                Our Vision
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
            <p style={{ color: '#B0B0B0', lineHeight: '1.8' }}>
              To be the most trusted name in property management, creating communities where residents 
              can live comfortably in and investors see consistent growth in their property values.
            </p>
          </div>
          
          <div style={{ textAlign: 'left' }}>
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
                Our Mission
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
            <p style={{ color: '#B0B0B0', lineHeight: '1.8' }}>
              To deliver outstanding property management services that enhance the living experience of residents 
              while maximizing the value of our clients' investments through innovative solutions, professional 
              maintenance, and responsive customer service.
            </p>
          </div>
        </section>
        
        {/* Company Structure Section */}
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
              Organizational Structure
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
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Leadership Team</h3>
              <ul style={{ color: '#B0B0B0', lineHeight: '1.8', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>CEO:</span> Jacquel Madeline</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>COO:</span> Joel Russo</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>CFO:</span> Sarah Coleson</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>CTO:</span> David Chen</li>
                <li><span style={{ color: '#D4AF37', fontWeight: 500 }}>Director of Operations:</span> Patricia Martinez</li>
              </ul>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Departments</h3>
              <ul style={{ color: '#B0B0B0', lineHeight: '1.8', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>Property Management:</span> Oversees day-to-day operations of all properties</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>Maintenance:</span> Handles all repair and maintenance services</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>Customer Relations:</span> Manages resident communications and satisfaction</li>
                <li style={{ marginBottom: '10px' }}><span style={{ color: '#D4AF37', fontWeight: 500 }}>Sales & Leasing:</span> Handles new property acquisitions and leasing</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Values and Approach Section */}
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
              Our Values & Approach
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '24px', 
              backgroundColor: '#262626', 
              borderRadius: '12px',
              border: '1px solid #333'
            }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Excellence</h3>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6' }}>
                We strive for excellence in every aspect of our service, continuously improving our processes to deliver the highest standards of property management.
              </p>
            </div>
            
            <div style={{ 
              textAlign: 'center', 
              padding: '24px', 
              backgroundColor: '#262626', 
              borderRadius: '12px',
              border: '1px solid #333'
            }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Integrity</h3>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6' }}>
                We conduct our business with honesty, transparency, and ethical practices, building trust with our clients, residents, and partners.
              </p>
            </div>
            
            <div style={{ 
              textAlign: 'center', 
              padding: '24px', 
              backgroundColor: '#262626', 
              borderRadius: '12px',
              border: '1px solid #333'
            }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>Innovation</h3>
              <p style={{ color: '#B0B0B0', lineHeight: '1.6' }}>
                We embrace innovative technologies and approaches to property management, staying ahead of industry trends to provide cutting-edge solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About; 