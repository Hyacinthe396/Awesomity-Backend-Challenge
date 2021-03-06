const {query} = require('../helpers/query')

exports.addTask = (data) => {
    return query('INSERT INTO task SET ?', data)
}

exports.getTaskById = (id) => {
    return query('SELECT * FROM task WHERE id = ?', id)
}

exports.update = (data, id) => {
    return query('UPDATE task SET ? WHERE id = ?', [data, id])
}

exports.deleteTask = (id) => {
    return query('DELETE FROM task WHERE id = ?', id)
}