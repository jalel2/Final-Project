import React from 'react';

function Resources() {
  return (
    <section className="resources">
      <div className="container">
        <h2>Relaxation Resources</h2>
        <div className="resource-cards">
          <div className="card">
            <div className="card-image meditation"></div>
            <h3>Guided Meditation</h3>
            <p>Follow along with calming meditations designed to quiet your mind and bring you into the present moment.</p>
            <a href="https://www.calm.com/fr" className="resource-link">Start Meditating</a>
          </div>

          <div className="card">
            <div className="card-image breathing"></div>
            <h3>Breathing Exercises</h3>
            <p>Simple breathing techniques that can help reduce anxiety and create a sense of calm in minutes.</p>
            <a href="https://www.youtube.com/watch?v=enJyOTvEn4M" className="resource-link">Learn Techniques</a>
          </div>

          <div className="card">
            <div className="card-image nature"></div>
            <h3>Nature Sounds</h3>
            <p>Immerse yourself in peaceful natural soundscapes to help you relax and drift into tranquility.</p>
            <a href="https://www.youtube.com/watch?v=9TGlc0Fufgk&t=329s" className="resource-link">Listen Now</a>
          </div>

          <div className="card">
            <div className="card-image yoga"></div>
            <h3>Gentle Yoga</h3>
            <p>Follow gentle movement sequences designed to release tension and promote relaxation.</p>
            <a href="https://www.youtube.com/watch?v=EvMTrP8eRvM" className="resource-link">View Practices</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
