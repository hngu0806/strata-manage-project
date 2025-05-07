import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';

interface Enquiry {
  id: number;
  name: string;
  email: string;
  unit: string;
  category: string;
  description: string;
  created_at: string;
}

const SearchForm: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setResults([]);
    if (!user) {
      setError('You must be logged in to search your enquiries.');
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('/api/search-enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, search: searchTerm })
      });
      if (!response.ok) throw new Error('Failed to fetch search results');
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('Error searching enquiries.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', background: '#1A1A1A', padding: 32, borderRadius: 12, color: '#f5f5f5' }}>
      <h2 style={{ color: '#D4AF37', marginBottom: 24 }}>Search Your Past Enquiries</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Enter keyword(s) to search..."
          style={{ flex: 1, padding: 12, borderRadius: 8, border: '1px solid #333', background: '#0D0D0D', color: '#f5f5f5' }}
          required
        />
        <button type="submit" style={{ padding: '12px 24px', background: '#D4AF37', color: '#0D0D0D', border: 'none', borderRadius: 8, fontWeight: 600 }}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <div style={{ color: '#ff4d4f', marginBottom: 16 }}>{error}</div>}
      {results.length > 0 && (
        <div>
          <h3 style={{ color: '#B0B0B0', marginBottom: 12 }}>Results:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {results.map(enquiry => (
              <li key={enquiry.id} style={{ background: '#262626', marginBottom: 12, padding: 16, borderRadius: 8 }}>
                <div><strong>Category:</strong> {enquiry.category}</div>
                <div><strong>Unit:</strong> {enquiry.unit}</div>
                <div><strong>Description:</strong> {enquiry.description}</div>
                <div style={{ fontSize: 12, color: '#B0B0B0' }}><strong>Date:</strong> {new Date(enquiry.created_at).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {(!loading && results.length === 0 && searchTerm) && <div style={{ color: '#B0B0B0' }}>No enquiries found.</div>}
    </div>
  );
};

export default SearchForm;
