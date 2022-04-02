import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return [
        { 
          id: 1, 
          name: "Desenvolvimento de site", 
          price: 12000.0, 
          type: "income", 
          category: "sell", 
          date: new Date()
        },
      ];
    })
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);