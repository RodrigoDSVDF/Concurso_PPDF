// src/components/DataCard.jsx

import React from 'react';

// Recebe o ícone (como componente), título, valor, descrição e classe de cor
const DataCard = ({ icon: Icon, title, value, description, colorClass }) => (
  <div className={`p-6 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl transition-all duration-300 hover:border-[#4FD1C5] hover:shadow-lg`}>
    <div className="flex items-center mb-4">
      {/* O ícone é renderizado aqui */}
      <Icon className={`w-8 h-8 mr-3 ${colorClass}`} />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className={`text-4xl font-bold mb-3 ${colorClass}`}>{value}</p>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default DataCard;
