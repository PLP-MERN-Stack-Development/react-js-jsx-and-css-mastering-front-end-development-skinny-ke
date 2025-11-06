import React from 'react';

const Footer = () => (
  <footer className="bg-white dark:bg-gray-800 text-center py-4 mt-auto border-t dark:border-gray-700">
    <p className="text-gray-500 dark:text-gray-400 text-sm">
      © {new Date().getFullYear()} PLP Week 3 Project. All rights reserved.
    </p>
  </footer>
);

export default Footer;