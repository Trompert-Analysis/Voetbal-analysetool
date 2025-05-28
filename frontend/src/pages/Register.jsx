import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'speler',
    teamcode: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const payload = {
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    if (formData.name) payload.name = formData.name;
    if (formData.role !== 'coach') payload.teamcode = formData.teamcode;

    try {
      const res = await fetch('https://voetbal-analysetool.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Registratie mislukt');

      const data = await res.json();
      setMessage('Registratie succesvol! Je kunt nu inloggen.');
    } catch (err) {
      setMessage(err.message || 'Er ging iets mis.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded mt-8">
      <h1 className="text-2xl font-bold mb-4">Registreren</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Naam (optioneel)"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="E-mailadres"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Wachtwoord"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          className="w-full border p-2 rounded"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="coach">Coach</option>
          <option value="speler">Speler</option>
          <option value="beoordelaar">Beoordelaar</option>
        </select>

        {formData.role !== 'coach' && (
          <input
            type="text"
            name="teamcode"
            placeholder="Teamcode"
            value={formData.teamcode}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {loading ? 'Registreren...' : 'Registreren'}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
    </div>
  );
};

export default Register;
