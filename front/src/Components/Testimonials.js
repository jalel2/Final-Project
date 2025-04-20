import React from 'react';
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Community Says</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"The breathing exercises have been life-changing for my anxiety. I use them every morning and before stressful situations."</p>
            <div className="testimonial-author">- Emma L.</div>
          </div>
          <div className="testimonial">
            <p>"I've been using the guided meditations for three months now, and my sleep has improved dramatically."</p>
            <div className="testimonial-author">- Michael T.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
