import React, { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchJson';


interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

const CategoryPage: React.FC = () => {
    const { data: items, loading, error } = useFetchData<Item[]>("/api/items.json");
    console.log(items);
    return (
    <div className="container mt-4">
      {loading && <div>Loading...</div>}
      <div className="row">
        {items && items.map(item => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-0 h-100" onClick={() => window.location.href = `/ItemView/${item.name}/${item.id}`} style={{ cursor: 'pointer' }}>
               <svg aria-label="Placeholder: Image cap" className="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em" className='text-center'>Image cap</text>
               </svg>
                <div className="card-body item-details">
                 <div>
                  <small className='category-description'>{item.description}</small>
                  <span className='justify-content-between d-flex'>
                   <small className="card-title">{item.name}</small>
                   <small className="card-price">${item.price.toFixed(2)}</small>
                  </span>
                  
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
