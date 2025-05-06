import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface MaintenanceRequest {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  created_at: string;
  user_email: string;
  unit_number: string;
}

function MaintenanceRequest() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    unit_number: ''
  });
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/maintenance-requests');
      if (!response.ok) throw new Error('Failed to fetch requests');
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      setError('Failed to load maintenance requests');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please log in to submit a request');
      return;
    }

    try {
      const response = await fetch('/api/maintenance-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newRequest,
          user_email: user.email
        }),
      });

      if (!response.ok) throw new Error('Failed to submit request');
      
      const newRequestData = await response.json();
      setRequests([...requests, newRequestData]);
      setNewRequest({ title: '', description: '', unit_number: '' });
    } catch (err) {
      setError('Failed to submit maintenance request');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    }}>
      <h2 style={{
        color: '#f5f5f5',
        marginBottom: '24px',
        fontFamily: 'Playfair Display, serif'
      }}>Maintenance Requests</h2>

      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#1A1A1A',
        padding: '24px',
        borderRadius: '8px',
        marginBottom: '32px'
      }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#f5f5f5' }}>
            Issue Title
          </label>
          <input
            type="text"
            value={newRequest.title}
            onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#0D0D0D',
              color: '#f5f5f5'
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#f5f5f5' }}>
            Unit Number
          </label>
          <input
            type="text"
            value={newRequest.unit_number}
            onChange={(e) => setNewRequest({ ...newRequest, unit_number: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#0D0D0D',
              color: '#f5f5f5'
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#f5f5f5' }}>
            Description
          </label>
          <textarea
            value={newRequest.description}
            onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#0D0D0D',
              color: '#f5f5f5',
              minHeight: '100px'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#D4AF37',
            color: '#0D0D0D',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Submit Request
        </button>
      </form>

      {error && <p style={{ color: '#ff4444', marginBottom: '16px' }}>{error}</p>}

      <div style={{ backgroundColor: '#1A1A1A', padding: '24px', borderRadius: '8px' }}>
        <h3 style={{ color: '#f5f5f5', marginBottom: '16px' }}>Your Requests</h3>
        {requests.length === 0 ? (
          <p style={{ color: '#B0B0B0' }}>No maintenance requests found.</p>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {requests.map((request) => (
              <div
                key={request.id}
                style={{
                  backgroundColor: '#262626',
                  padding: '16px',
                  borderRadius: '4px',
                  border: '1px solid #333'
                }}
              >
                <h4 style={{ color: '#D4AF37', marginBottom: '8px' }}>{request.title}</h4>
                <p style={{ color: '#B0B0B0', marginBottom: '8px' }}>{request.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#808080' }}>
                  <span>Unit: {request.unit_number}</span>
                  <span>Status: {request.status}</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '8px' }}>
                  Submitted: {new Date(request.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MaintenanceRequest; 