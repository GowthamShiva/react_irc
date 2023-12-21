import React, { useState } from 'react';
import './Custom.css'; // Import the CSS file

function Custom() {
//   const [faqs, setFAQs] = useState([
//     { question: 'How do I reset my password?', answer: 'Click on the "Forgot Password?" link in the login page, it will redirect you to a page where you will need to input a verification code from ur registered email, and then after than you can change your password.' },
//     { question: 'How do I change my email address?', answer: 'As of now, there is no way to change your email address. You are better of starting a new account at this point.' },
//     { question: 'What are your refund policies?', answer: 'We will issue a full refund within 24 hrs of purchasing any of our subscriptions.' },
//   ]);

  const contactMethods = [
    { title: 'Email', value: 'sinfo-support@gamil.com' },
    { title: 'Phone', value: '+91-9948401599' },
    { title: 'Whatsapp', value: '+91-8240153325' },
  ];

  return (
    <div className="support-page1">
      <h1 className="page-title1">Support Center</h1>

      <section className="contact-section1">
        <h2>Get in Touch</h2>
        <ul className="contact-list1">
            <br></br>
          {contactMethods.map((method) => (
            <li key={method.title}>
              <strong>{method.title}:</strong> {method.value}
            </li>
          ))}
        </ul>
      </section>

      {/* <section className="faq-section1">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-cards1">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-card1">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default Custom;