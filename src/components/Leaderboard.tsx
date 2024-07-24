import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const newScoreElement = listRef.current.querySelector('.new-score');
      if (newScoreElement) {
        newScoreElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scores]);

  return (
    <div className="leaderboard">
      <h2>Top 10 Scores</h2>
      <ul ref={listRef}>
        {scores.map((score, index) => (
          <li key={index} className={score.isNew ? 'new-score' : ''}>
            {index + 1}. {score.username}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
