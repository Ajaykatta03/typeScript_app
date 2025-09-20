import React from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
}

const ItemGrid: React.FC<{ items: Item[] }> = ({ items }) => (
  <div className="item-grid">
    {items.map(item => (
      <div key={item.id} className="item">
        {item.name}
      </div>
    ))}
  </div>
);

export default ItemGrid;
