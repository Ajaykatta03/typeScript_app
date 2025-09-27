import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemInterface } from '../../ts/ItemType';
import useFetchData from '../../../hooks/useFetchJson';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';

const ItemView: React.FC = () => {
    const itemsData = useFetchData<ItemInterface[]>("/api/items.json");
    const { id } = useParams<{ id: string }>();
    const { name } = useParams<{ name: string }>();

    const [modal, setModal] = React.useState<{ show: boolean; message: string }>({ show: false, message: "" });
  // Convert id from string to number
  const itemId = Number(id);

  // Find the item by id
  const item: ItemInterface | undefined = itemsData && itemsData.data?.find((i) => i.id === itemId);

  if (item && !item.finalPrice) {
    item.finalPrice = parseFloat((item.price - (item.price * parseFloat(item.discount) / 100)).toFixed(2));
  }
  // Modal close handler
  const closeModal = () => setModal({ show: false, message: "" });

    return (
      <div className="container mt-4">
            {/* Success Modal */}
            {modal.show && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.18)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        background: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 24px rgba(33,150,243,0.18)',
                        padding: '32px 48px',
                        textAlign: 'center',
                        minWidth: '320px',
                        maxWidth: '90vw',
                    }}>
                        <div style={{ fontSize: '2.2rem', color: '#388e3c', marginBottom: '12px' }}>✔</div>
                        <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '8px', color: '#1976d2' }}>{modal.message}</div>
                        <button
                            style={{
                                background: 'linear-gradient(90deg,#1976d2,#64b5f6)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '8px 24px',
                                fontWeight: 600,
                                fontSize: '1rem',
                                marginTop: '8px',
                                cursor: 'pointer',
                            }}
                            onClick={closeModal}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
            <Breadcrumbs items={[{ label: 'Home', path: '/home' }, { label: 'Category', path: `/category/${name}` }, { label: item?.name || 'Item' }]} />
        <div className="row" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderRadius: "12px", background: "#fff", padding: "32px 16px" }}>
          {/* Image Section */}
          <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ borderRight: "1px solid #eee" }}>
            {item?.image && (
              <img src={item.image} alt={item.name} className="img-fluid" style={{ maxHeight: "400px", objectFit: "contain" }} />
            )}
          </div>
          {/* Details Section */}
          <div className="col-md-7">
            {item && (
              <div style={{ paddingLeft: "32px" }}>
                <h5 style={{ fontWeight: 700, marginBottom: "8px" }}>{item.name}</h5>
                {/* Rating (if available) */}
                {item.rating && (
                  <div style={{ color: '#388e3c', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ background: '#e0f2f1', borderRadius: '4px', padding: '2px 8px', marginRight: '8px' }}>★ {item.rating}</span>
                    <span style={{ color: '#555', fontSize: '14px' }}>({item.ratingCount} ratings)</span>
                  </div>
                )}
                {/* Price Section */}
                <div style={{ margin: '16px 0', padding: '16px', background: '#f7fafc', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: '#212121' }}>₹{item.finalPrice}</span>
                  {item.price !== item.finalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#888', marginLeft: '16px', fontSize: '1.2rem' }}>₹{item.price}</span>
                  )}
                  {parseInt(item.discount) > 0 && (
                    <span style={{ color: '#388e3c', fontWeight: 600, marginLeft: '16px' }}>{item.discount}% off</span>
                  )}
                  {/* Offers (if any) */}
                  {item.offers && item.offers.length > 0 && (
                    <div style={{ marginTop: '12px' }}>
                      <strong>Available Offers:</strong>
                      <ul style={{ margin: 0, paddingLeft: '18px' }}>
                        {item.offers.map((offer: string, idx: number) => (
                          <li key={idx} style={{ fontSize: '15px', color: '#444' }}>{offer}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* Description */}
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '16px' }}><strong>Description:</strong> {item.description}</p>
                {/* Specifications */}
                <h4 style={{ fontWeight: 600, marginTop: '24px' }}>Specifications</h4>
                <ul style={{ fontSize: '15px', color: '#444', marginBottom: '16px' }}>
                  <li><strong>Width:</strong> {item.specifications.width}</li>
                  <li><strong>Height:</strong> {item.specifications.height}</li>
                  <li><strong>Thickness:</strong> {item.specifications.thickness}</li>
                </ul>
                {/* Details */}
                <h4 style={{ fontWeight: 600 }}>Details</h4>
                <p style={{ fontSize: '15px', color: '#444' }}>{item.details}</p>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '18px', marginTop: '32px' }}>
                  <button
                    style={{
                      background: 'linear-gradient(90deg,#ff8a65,#ff7043)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 28px',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      boxShadow: '0 2px 8px rgba(255,87,34,0.12)',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onClick={() => {
                      if (item) {
                        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                        if (!wishlist.find((i: any) => i.id === item.id)) {
                          wishlist.push(item);
                          localStorage.setItem('wishlist', JSON.stringify(wishlist));
                          setModal({ show: true, message: 'Item added to Wishlist!' });
                          setTimeout(closeModal, 1500);
                        } else {
                          setModal({ show: true, message: 'Item already in Wishlist!' });
                          setTimeout(closeModal, 1500);
                        }
                      }
                    }}
                  >
                    Add to Wishlist
                  </button>
                  <button
                    style={{
                      background: 'linear-gradient(90deg,#1976d2,#64b5f6)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 28px',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      boxShadow: '0 2px 8px rgba(33,150,243,0.12)',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onClick={() => {
                      if (item) {
                        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                        if (!cart.find((i: any) => i.id === item.id)) {
                          cart.push(item);
                          localStorage.setItem('cart', JSON.stringify(cart));
                          setModal({ show: true, message: 'Item added to Cart!' });
                          setTimeout(closeModal, 1500);
                        } else {
                          setModal({ show: true, message: 'Item already in Cart!' });
                          setTimeout(closeModal, 1500);
                        }
                      }
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default ItemView;
