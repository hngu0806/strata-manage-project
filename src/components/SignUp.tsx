import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please use a valid Gmail address');
      return;
    }

    try {
      await signUp(formData.username, formData.email, formData.password);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up');
    }
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
        maxWidth: '400px',
        width: '100%',
        margin: '20px auto',
        color: '#f5f5f5',
        backgroundColor: '#1A1A1A',
        borderRadius: '16px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{
          fontSize: '32px',
          marginBottom: '24px',
          color: '#f5f5f5',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 600
        }}>Sign Up</h1>

        {error && (
          <div style={{
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: '#5c0a0a',
            color: '#fff'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0' }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
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
          </div>

          <div style={{ textAlign: 'left' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0' }}>
              Gmail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="example@gmail.com"
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

          <div style={{ textAlign: 'left' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0' }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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
          </div>

          <div style={{ textAlign: 'left' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '8px', color: '#B0B0B0' }}>
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
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
          </div>

          <button
            type="submit"
            style={{
              padding: '14px 28px',
              backgroundColor: '#D4AF37',
              color: '#0D0D0D',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 16px rgba(212, 175, 55, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp; 