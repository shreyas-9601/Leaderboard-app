import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/leaderboardSlice';

const AddScorePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const dispatch = useDispatch();

  const handleAddScore = () => {
    dispatch(addScore({ username, score }));
    onClose();
  };

  return (
    <div className="popup">
      <h2>Add Score</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Score (MM:SS::MSS)"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={handleAddScore}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddScorePopup;
