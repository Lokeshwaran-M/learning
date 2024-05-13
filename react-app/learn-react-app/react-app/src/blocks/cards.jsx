import React from 'react';

const style = {
  card: {
    border: '1px solid hsl(0, 0%, 80%)',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px hsla(0, 0%, 0%, 0)',
    backgroundColor: '#B4B4B8',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    maxWidth: '250px',
    display: 'inline-block',
  },
  cardImage: {
    maxWidth: '60%',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  cardTitle: {
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    color: 'hsl(0, 0%, 20%)',
  },
  cardText: {
    fontFamily: 'Arial, sans-serif',
    color: 'hsl(0, 0%, 30%)',
  },
};

export function Card({ header = "Header", prg = "This is a dynamic paragraph.", imgurl = "https://lokesh-m.web.app/assets/lokesh%20id-e.png" }) {
  return (
    <div style={style.card}>
      <img src={imgurl} alt="pic" style={style.cardImage} />
      <h2 style={style.cardTitle}>{header}</h2>
      <p style={style.cardText}>{prg}</p>
    </div>
  );
}

