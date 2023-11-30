const conn = require('./connection');

const update = (task, id) => conn.execute(
  `UPDATE task
    SET nome = ?, descricao = ? WHERE id = ?`,
    [task.person, task.descricao, id],
);

const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);

const findAll = () => conn.execute('SELECT * FROM people');

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);

const insert = (task) => conn.execute(
    `INSERT INTO task 
      (nome, descricao) VALUES (?, ?)`,
    [task.nome, task.descricao],
  );

exports.module = {
  update,
  remove,
  findAll,
  findById,
  insert,
};