import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Your Mental Health Matters</h1>
          <p>Welcome! Log in to take a mental health test designed to help you understand your emotional state. No need to write — just answer simple questions and receive insights that can guide you toward a better well-being.</p>
          <button className="btn-primary"><a href="login">Sign Up Now</a></button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
