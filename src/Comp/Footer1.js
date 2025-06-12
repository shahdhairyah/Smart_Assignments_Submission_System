import React from 'react';

function Footer1() {
  return (
    <>
    <footer className="pt-4 pb-3 mt-5" style={{ backgroundColor: '#1c1f26', color: '#ffffff' }}>
      <div className="container text-center">
        <hr className="border-secondary mb-3" />
        <p className="mb-1 fs-5">
          &copy; {new Date().getFullYear()}{' '}
          <strong>
            <a
              href="https://github.com/shahdhairyah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning text-decoration-none"
            >
              Dhairya
            </a>
          </strong>{' '}
          | All Rights Reserved
        </p>
        <p className="mb-0" style={{ color: '#6c757d', fontSize: '0.95rem' }}>
          Made with ❤️ for learning and innovation.
        </p>
        <hr className="border-secondary mt-3" />
      </div>
    </footer>
    </>
  );
}

export default Footer1;
