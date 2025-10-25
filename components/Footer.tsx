import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-white/10 py-8">
      <div className="container mx-auto px-6 text-center text-silver text-base">
        <p>&copy; {new Date().getFullYear()} Osang Technology Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;