import React, { useState } from 'react';

function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiration: '',
    cvv: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    // Simulate successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Payment method added successfully!' });
      setFormData({ cardNumber: '', expiration: '', cvv: '', name: '' });
    }, 1000);
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
        }}>Add Payment Method</h1>

        {submitStatus.type && (
          <div style={{
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: submitStatus.type === 'success' ? '#1a472a' : '#5c0a0a',
            color: '#fff'
          }}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="Card Number"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #333',
              backgroundColor: '#0D0D0D',
              color: '#f5f5f5',
              fontFamily: 'Inter, sans-serif'
            }}
          />
          <input
            type="text"
            name="expiration"
            value={formData.expiration}
            onChange={handleInputChange}
            placeholder="Expiration Date (MM/YY)"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #333',
              backgroundColor: '#0D0D0D',
              color: '#f5f5f5',
              fontFamily: 'Inter, sans-serif'
            }}
          />
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="CVV"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #333',
              backgroundColor: '#0D0D0D',
              color: '#f5f5f5',
              fontFamily: 'Inter, sans-serif'
            }}
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name on Card"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #333',
              backgroundColor: '#0D0D0D',
              color: '#f5f5f5',
              fontFamily: 'Inter, sans-serif'
            }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '14px 28px',
              backgroundColor: '#D4AF37',
              color: '#0D0D0D',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
              transition: 'all 0.3s ease',
              opacity: isSubmitting ? 0.7 : 1
            }}
          >
            {isSubmitting ? 'Adding...' : 'Add Payment Method'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment; 