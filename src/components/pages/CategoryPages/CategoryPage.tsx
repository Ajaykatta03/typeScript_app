import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryInterface } from '../../ts/CategoryTypes';
import useFetchData from '../../../hooks/useFetchJson';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';

const CategoryPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

    const { data: items, loading, error } = useFetchData<CategoryInterface[]>("/api/items.json");
    console.log('name', name);
    return (
      <div className="container mt-4">
  <Breadcrumbs items={[{ label: 'Home', path: '/home' }, { label: 'Category' }]} />
        {loading && <div>Loading...</div>}
        <div className="row">
          {items && items.map(item => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                className="card h-100 shadow-sm border-0"
                onClick={() => window.location.href = `/ItemView/${name}/${item.id}`}
                style={{ cursor: 'pointer', borderRadius: '16px', overflow: 'hidden', position: 'relative', background: '#fff' }}
              >
                {/* Image */}
                {item.image ? (
                  // <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '180px', objectFit: 'cover', background: '#f5f5f5' }} />
                <svg aria-label="Placeholder: Image cap" className="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#e0e0e0"></rect>
                    <text x="50%" y="50%" fill="#bdbdbd" dy=".3em" className='text-center'>No Image</text>
                  </svg>
                ) : (
                  <svg aria-label="Placeholder: Image cap" className="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#e0e0e0"></rect>
                    <text x="50%" y="50%" fill="#bdbdbd" dy=".3em" className='text-center'>No Image</text>
                  </svg>
                )}
                {/* Unavailable badge */}
                {item.unavailable && (
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#fff', color: '#d32f2f', fontWeight: 600, borderRadius: '6px', padding: '2px 10px', fontSize: '15px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                    Currently unavailable
                  </div>
                )}
                <div className="card-body item-details" style={{ padding: '16px 12px 12px 12px' }}>
                  {/* Name and color/variant */}
                  <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '4px', color: '#212121' }}>
                    {item.name}
                    {item.color && <span style={{ color: '#757575', fontWeight: 400, fontSize: '0.95rem' }}> ({item.color})</span>}
                  </div>
                  {/* Rating */}
                  {item.rating && (
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ background: '#388e3c', color: '#fff', borderRadius: '6px', fontWeight: 600, padding: '2px 8px', fontSize: '15px', marginRight: '6px' }}>{item.rating} ★</span>
                      {item.ratingCount && <span style={{ color: '#757575', fontSize: '14px' }}>({item.ratingCount})</span>}
                    </div>
                  )}
                  {/* Description */}
                  <div style={{ fontSize: '14px', color: '#616161', marginBottom: '8px', minHeight: '38px' }}>{item.description}</div>
                  {/* Price Section */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#212121' }}>₹{item.price.toLocaleString()}</span>
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '1rem' }}>₹{item.originalPrice.toLocaleString()}</span>
                    )}
                    {item.discount && item.discount > 0 && (
                      <span style={{ color: '#388e3c', fontWeight: 600, fontSize: '1rem' }}>{item.discount}% off</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default CategoryPage;
