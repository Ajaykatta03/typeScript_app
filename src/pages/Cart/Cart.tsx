import React, { useEffect, useState } from 'react';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    setCart(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div className="container mt-4">
      <h2 style={{ fontWeight: 700, marginBottom: '18px' }}>My Cart</h2>
      <div className="row">
        {cart.length === 0 && <div className="col-12">No items in cart.</div>}
        {cart.map(item => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', overflow: 'hidden', background: '#fff' }}>
              {item.image ? (
                <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '180px', objectFit: 'cover', background: '#f5f5f5' }} />
              ) : (
                <div style={{ height: '180px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bdbdbd' }}>No Image</div>
              )}
              <div className="card-body">
                <h5 style={{ fontWeight: 600 }}>{item.name}</h5>
                <div style={{ color: '#1976d2', fontWeight: 600 }}>{item.price ? `₹${item.price}` : ''}</div>
                <div style={{ fontSize: '14px', color: '#616161', marginBottom: '8px' }}>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
