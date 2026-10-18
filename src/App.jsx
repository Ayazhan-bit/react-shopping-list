import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';

function App() {
  // 1. Состояние для списка покупок
  const [items, setItems] = useState([
    { id: 1, title: 'Молоко', price: 75 },
    { id: 2, title: 'Хлеб', price: 35 },
  ]);

  // Состояния для полей ввода
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  // 2. Функция добавления товара
  const handleAddItem = (e) => {
    e.preventDefault();

    const numericPrice = parseFloat(price);
    if (!title.trim() || isNaN(numericPrice) || numericPrice <= 0) {
      alert('Введите название и корректную цену!');
      return;
    }

    const newItem = {
      id: Date.now(),
      title: title.trim(),
      price: numericPrice,
    };

    setItems([...items, newItem]);
    setTitle('');
    setPrice('');
  };

  // 3. Функция удаления товара
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // 4. Подсчет общей стоимости
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>🛒 Список покупок</h2>

      {/* Форма добавления */}
      <form onSubmit={handleAddItem} style={styles.form}>
        <input
          type="text"
          placeholder="Название товара"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.addBtn}>
          Добавить
        </button>
      </form>

      {/* Список товаров */}
      <ul style={styles.list}>
        {items.length === 0 ? (
          <p style={{ color: '#888' }}>Список пока пуст</p>
        ) : (
          items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
            />
          ))
        )}
      </ul>

      {/* Итоговая сумма */}
      <div style={styles.totalBox}>
        <span>Общая стоимость:</span>
        <strong>{totalPrice} сом</strong>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '420px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
    color: '#333',
  },
  form: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
  },
  input: {
    flex: 1,
    padding: '8px 10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  addBtn: {
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: '0 0 16px 0',
  },
  totalBox: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '12px',
    borderTop: '2px dashed #cbd5e0',
    fontSize: '18px',
  },
};

export default App;