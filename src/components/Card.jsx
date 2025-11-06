import React from 'react';

const Card = ({ title, body }) => (
  <div className="p-4 bg-white dark:bg-gray-800 border rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{body}</p>
  </div>
);

export default Card;