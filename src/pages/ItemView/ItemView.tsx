import React from 'react';
import useFetchData from '../../hooks/useFetchJson';
import { calculateFinalPrice, ItemType } from './ItemType';
import { useParams } from 'react-router-dom';

const ItemView: React.FC = () => {
    const itemsData = useFetchData<ItemType[]>("/api/items.json");
    const { id } = useParams<{ id: string }>();

  // Convert id from string to number
  const itemId = Number(id);

  // Find the item by id
  const item: ItemType | undefined = itemsData && itemsData.data?.find((i) => i.id === itemId);

  if (item) {
    item.finalPrice = calculateFinalPrice(item.price, item.discount);
  }
    return (
      <div className="container mt-4">
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
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default ItemView;
