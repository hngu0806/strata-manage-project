import { useState, FormEvent } from 'react';

function Enquiries() {
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    unit: '',
    otherCategory: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/enquiries.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          unit: formData.unit,
          category: category === 'Other' ? formData.otherCategory : category,
          description: formData.description
        })
      });

      let data;
      try {
        data = await response.json();
      } catch (e) {
        throw new Error('Failed to parse response');
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Failed to submit enquiry');
      }

      // Clear form
      setFormData({
        name: '',
        email: '',
        unit: '',
        otherCategory: '',
        description: ''
      });
      setCategory('');
      
      // Show success message
      setSubmitStatus({ 
        type: 'success', 
        message: 'Enquiry submitted successfully! We will get back to you soon.' 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'There was an error submitting your enquiry. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="enquiry-container" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D0D0D',
      padding: '40px 20px'
    }}>
      <div className="enquiry-form-wrapper" style={{ 
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

        <form 
          onSubmit={handleSubmit} 
          className="enquiry-form"
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>
              Name:
            </label>
            <input 
              type="text" 
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
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
          </div>
          
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>
              Email:
            </label>
            <input 
              type="email" 
              id="email"
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
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
          </div>
          
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label htmlFor="unit" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>
              Unit Number:
            </label>
            <input 
              type="text" 
              id="unit"
              name="unit" 
              value={formData.unit}
              onChange={handleInputChange}
              required
              className="form-input"
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
          </div>
          
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label htmlFor="category" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>
              Category:
            </label>
            <select 
              id="category"
              name="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              required
              className="form-select"
              style={{ 
                width: '100%', 
                padding: '12px 16px', 
                borderRadius: '8px', 
                border: '1px solid #333', 
                backgroundColor: '#0D0D0D', 
                color: '#f5f5f5',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              <option value="">Select a category</option>
              <option value="common">Common areas (e.g. BBQ place, garden, hallway, etc.)</option>
              <option value="sport">Sport facilities (e.g. swimming pool, gym, tennis court,etc.)</option>
              <option value="utilities">Utilities (e.g. water, electricity, internet, etc.)</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          {category === 'Other' && (
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="otherCategory" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>
                Please specify:
              </label>
              <input 
                type="text" 
                id="otherCategory"
                name="otherCategory" 
                value={formData.otherCategory}
                onChange={handleInputChange}
                required
                className="form-input"
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
            </div>
          )}
          
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label htmlFor="description" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0', fontWeight: 500 }}>
              Description:
            </label>
            <textarea 
              id="description"
              name="description" 
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4} 
              className="form-textarea"
              style={{ 
                width: '100%', 
                padding: '12px 16px', 
                borderRadius: '8px', 
                border: '1px solid #333', 
                backgroundColor: '#0D0D0D', 
                color: '#f5f5f5',
                fontFamily: 'Inter, sans-serif',
                resize: 'vertical', 
                minHeight: '120px'
              }}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="submit-button"
            style={{ 
              padding: '14px 28px', 
              backgroundColor: '#D4AF37', 
              color: '#0D0D0D', 
              border: 'none', 
              borderRadius: '8px',
              marginTop: '16px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
              transition: 'all 0.3s ease',
              opacity: isSubmitting ? 0.7 : 1
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Enquiries; 