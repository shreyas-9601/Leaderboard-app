import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import Footer from './components/Footer';
import './styles/styles.css';
import './components/Footer.css';
import './components/Leaderboard.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <Leaderboard />
        {showPopup && <AddScorePopup onClose={() => setShowPopup(false)} />}
        <Footer />
        <button onClick={() => setShowPopup(true)}>Add Score</button>
      </div>
    </Provider>
  );
};

export default App;
