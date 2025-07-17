import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';  // match your actual file name

export default function Dashboard() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [time, setTime] = useState(new Date());

  const [feedbackCounts, setFeedbackCounts] = useState({
    Excellent: 0,
    Good: 0,
    Average: 0,
    Poor: 0
  });

  const [personalCounter, setPersonalCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const simulate = setInterval(() => {
      const categories = ['Excellent', 'Good', 'Average', 'Poor'];
      const random = categories[Math.floor(Math.random() * categories.length)];
      setFeedbackCounts(prev => ({ ...prev, [random]: prev[random] + 1 }));
    }, 2000);
    return () => clearInterval(simulate);
  }, []);

  const handleVote = (category) => {
    setFeedbackCounts(prev => ({ ...prev, [category]: prev[category] + 1 }));
    setPersonalCounter(c => c + 1);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className='text-2xl font-bold '>Live Event Feedback Dashboard</h1>
        <div className="inputs ">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        {firstName && surname && (
          <p className="greeting">➤ Welcome, {firstName} {surname} !</p>
        )}

        <div className="time">
          📅 {time.toLocaleDateString()} 🕒 {time.toLocaleTimeString()}
        </div>

        <div className="feedback-panel">
          <h2 className='text-xl font-bold'>Rate this session</h2>
          <div className="feedback-buttons">
            {['Excellent', 'Good', 'Average', 'Poor'].map(category => (
              <button key={category} onClick={() => handleVote(category)}>
                {category} ({feedbackCounts[category]})
              </button>
            ))}
          </div>
        </div>

        <div className="counter-panel">
          <h3 className='text-lg font-bold'>Your Submission Counter: {personalCounter}</h3>
          <div className="counter-buttons">
            <button onClick={() => setPersonalCounter(c => c + 1)}>Increment</button>
            <button onClick={() => setPersonalCounter(c => Math.max(0, c - 1))}>Decrement</button>
            <button onClick={() => setPersonalCounter(0)}>Reset</button>
            <button onClick={() => setPersonalCounter(c => c + 5)}>Increment by 5</button>
          </div>
        </div>
      </div>
    </div>
  );
}
