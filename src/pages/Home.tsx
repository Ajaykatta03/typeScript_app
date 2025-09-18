import React from 'react';
import useFetchData from '../hooks/useFetchJson';
import ItemGrid from '../components/ItemGrid';

interface Item {
  id: number;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const { data: items, loading, error } = useFetchData<Item[]>("/api/homeItems.json");
    console.log(items); 
  return (
    <div className="container mt-4">
      {loading && <div>Loading...</div>}
      <div className="row">
        {items && items.map(item => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div 
              className="card h-100" 
              onClick={() => window.location.href = `/category/${item.name}`}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body">
                <h6 className="card-title">{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <ItemGrid items={items || []} /> */}
    </div>
  );
};

export default Home;
