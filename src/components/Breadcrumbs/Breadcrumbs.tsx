import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: '22px' }}>
      <ol
        className="breadcrumb"
        style={{
          background: 'linear-gradient(90deg, #e3f2fd 0%, #fff 100%)',
          padding: '10px 18px',
          margin: 0,
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(33,150,243,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          fontSize: '1.08rem',
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`breadcrumb-item${idx === items.length - 1 ? ' active' : ''}`}
            aria-current={idx === items.length - 1 ? 'page' : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: idx === items.length - 1 ? 700 : 400,
              color: idx === items.length - 1 ? '#1976d2' : '#333',
              background: idx === items.length - 1 ? 'rgba(33,150,243,0.08)' : 'none',
              borderRadius: idx === items.length - 1 ? '8px' : '0',
              padding: idx === items.length - 1 ? '2px 10px' : '2px 6px',
              transition: 'background 0.2s',
            }}
          >
            {item.path && idx !== items.length - 1 ? (
              <Link
                to={item.path}
                style={{
                  color: '#1976d2',
                  textDecoration: 'none',
                  fontWeight: 500,
                  padding: '2px 6px',
                  borderRadius: '6px',
                  transition: 'background 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#e3f2fd')}
                onMouseOut={e => (e.currentTarget.style.background = 'none')}
              >
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {/* Only show slash between items, not at start/end */}
            {/* {idx < items.length - 1 && (
              <span style={{ margin: '0 8px', color: '#90caf9', fontWeight: 700 }}>/</span>
            )} */}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
