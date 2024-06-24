import React from 'react';

function Contact() {
  return (
    <div style={{ margin: '25px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <p style={{ textAlign: 'justify', maxWidth: '600px', margin: '0 auto' }}>
        We are always here to help you with any questions, feedback, or support you may need. Feel free to reach out to us via the contact details provided below. Our team members, Sheharyar Tariq and Noor-Ul-Ain, are dedicated to ensuring that your experience with Task Tracker is smooth and enjoyable.
      </p>
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ marginTop: '20px'}}>Noor-Ul-Ain</h2>
        <p>
          Email: <a href="mailto:20021519-069@uog.edu.pk" style={{ color: '#2196F3' }}>20021519-069@uog.edu.pk</a><br />
          Phone: 0300-1234567
        </p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ marginTop: '20px'}}>Sheharyar Tariq</h2>
        <p>
          Email: <a href="mailto:20021519-108@uog.edu.pk" style={{ color: '#2196F3' }}>20021519-108@uog.edu.pk</a><br />
          Phone: 0300-1234567
        </p>
      </div>
      
     
      
      <p style={{ textAlign: 'center', marginTop: '40px' }}>
        We look forward to hearing from you and assisting you with any inquiries or issues you might have.
      </p>
    </div>
  );
}

export default Contact;
