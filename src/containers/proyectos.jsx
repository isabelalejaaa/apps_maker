import React from 'react';

export default function Proyectos() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestros proyectos</h2>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
  },
};
