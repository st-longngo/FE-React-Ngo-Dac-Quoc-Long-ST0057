import React from 'react';
import Button from '../../../shared/components/partials/Button';

const Contact = () => {
  return (
    <section className="section-contact section">
      <div className="container">
        <div className="row contact-inner">
          <div className="col-6 col-sm-12">
            <h4 className="typo-1 contact-title">
              Subscribe to our newsletter andreceive exclusive offers every week
            </h4>
          </div>
          <div className="col-6 col-sm-12">
            <form action="" className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter you email"
              />
              <Button title="subscribe" customClass="btn-secondary form-submit"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
