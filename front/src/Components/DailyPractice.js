import React from 'react';

function DailyPractice() {
  return (
    <section className="daily-practice">
      <div className="container">
        <h2>Daily Relaxation Practice</h2>
        <div className="practice-container">
          <div className="practice-content">
            <h3>5-Minute Calming Breath</h3>
            <p>Try this simple breathing exercise whenever you need a moment of calm:</p>
            <ol>
              <li>Find a comfortable seated position</li>
              <li>Breathe in slowly through your nose for 4 counts</li>
              <li>Hold your breath gently for 2 counts</li>
              <li>Exhale slowly through your mouth for 6 counts</li>
              <li>Repeat for 5 minutes</li>
            </ol>
            <button className="btn-secondary">More Daily Practices</button>
          </div>
          <div className="practice-image"></div>
        </div>
      </div>
    </section>
  );
}

export default DailyPractice;
 