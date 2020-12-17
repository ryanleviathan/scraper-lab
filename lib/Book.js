const pool = require('./utils/pool');

module.exports = class Book {
  id;
  img;
  ratingOutOfFive;
  title;
  price;
  inStock;

  constructor(row) {
    this.id = row.id;
    this.img = row.img;
    this.ratingOutOfFive = row.rating_out_of_five;
    this.title = row.title;
    this.price = row.price;
    this.inStock = row.in_stock;
  }

  static async insert({ img, ratingOutOfFive, title, price, inStock }) {
    const { rows } = await pool.query(
      'INSERT INTO books (img, rating_out_of_five, title, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *', [img, ratingOutOfFive, title, price, inStock]
    );
    return new Book(rows[0]);
  }
};
