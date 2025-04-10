import React, { useState } from 'react';

function Enquiries() {
  const [category, setCategory] = useState('');

  const inputStyle = {
    width: '100%', 
    padding: '12px 16px', 
    borderRadius: '8px', 
    border: '1px solid #333', 
    backgroundColor: '#0D0D0D', 
    color: '#f5f5f5',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D0D0D',
      padding: '40px 20px'
    }}>
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        maxWidth: '520px', 
        width: '100%',
        margin: '20px auto', 
        color: '#f5f5f5', 
        backgroundColor: '#1A1A1A', 
        borderRadius: '16px', 
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
        fontSize: '15px'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          marginBottom: '24px', 
          color: '#f5f5f5',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>Submit an Enquiry</h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>Name:</label>
            <input type="text" name="name" style={inputStyle} />
          </div>
          
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>Email:</label>
            <input type="email" name="email" style={inputStyle} />
          </div>
          
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>Unit Number:</label>
            <input type="text" name="unit" style={inputStyle} />
          </div>
          
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>Category:</label>
            <select 
              name="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              style={inputStyle}
            >
              <option value="">Select a category</option>
              <option>Common areas (e.g. BBQ place, garden, hallway, etc.)</option>
              <option>Sport facilities (e.g. swimming pool, gym, tennis court,etc.)</option>
              <option>Utilities (e.g. water, electricity, internet, etc.)</option>
              <option>Other</option>
            </select>
          </div>
          
          {category === 'Other' && (
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>Please specify:</label>
              <input type="text" name="otherCategory" style={inputStyle} />
            </div>
          )}
          
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>Description:</label>
            <textarea 
              name="description" 
              rows={4} 
              style={{...inputStyle, resize: 'vertical', minHeight: '120px'}}
            ></textarea>
          </div>
          
          <button type="submit" style={{ 
            padding: '14px 28px', 
            backgroundColor: '#D4AF37', 
            color: '#0D0D0D', 
            border: 'none', 
            borderRadius: '8px',
            marginTop: '16px',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
            transition: 'all 0.3s ease'
          }}>Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
}

export default Enquiries; 