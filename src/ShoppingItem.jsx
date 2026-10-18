import React from 'react';

function ShoppingItem({ item, onDelete }) {
  return (
    <li style={styles.item}>
      <span>
        {item.title} — <strong>{item.price} сом</strong>
      </span>
      <button onClick={() => onDelete(item.id)} style={styles.deleteBtn}>
        Удалить
      </button>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    marginBottom: '8px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '6px',
    color: '#000',
  },
  deleteBtn: {
    backgroundColor: '#e53e3e',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default ShoppingItem;