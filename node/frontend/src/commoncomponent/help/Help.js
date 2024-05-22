import React from "react";
import "./Help.css";
import Navbar from '../navbar';

const Help = () => {
  return (
    <>
        <Navbar />
      <main className="help-container">
        <h1>Help & Support</h1>
        <section>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How do I become a volunteer?</h3>
            <p>To become a volunteer, navigate to the "Volunteer" section and register by providing the necessary details. Once registered, you can log in and start participating in events.</p>
          </div>
          <div className="faq-item">
            <h3>How do I register my NGO?</h3>
            <p>NGOs can register by going to the "NGO" section and filling out the registration form. After registering, you can log in and start creating events.</p>
          </div>
          <div className="faq-item">
            <h3>How can I contact support?</h3>
            <p>You can reach out to our support team via the "Contact Us" page. Fill out the form, and our team will get back to you as soon as possible.</p>
          </div>
        </section>

        <section>
          <h2>Guides</h2>
          <div className="guide-item">
            <h3>How to use the platform</h3>
            <p>Our platform is designed to be user-friendly. Simply register, log in, and start exploring the various features available. For more detailed instructions, refer to our user manual available in the resources section.</p>
          </div>
          <div className="guide-item">
            <h3>Creating and Managing Events</h3>
            <p>NGOs can create and manage events through the "Add Events" section. Fill out the event details, and your event will be listed for volunteers to join.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2023-2030 Volunteer Manage Company S.L. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Help;
