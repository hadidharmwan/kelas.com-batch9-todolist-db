import dbPool from "./db.js";

export const getData = (limit) => {
    const sql = "SELECT user_id, name, email, password, create_at FROM users LIMIT ?";
    const values = [limit];

    return dbPool.query(sql, values);
}

export const createData = (name, email, password) => {
    let create_at = new Date();
    const sql = "INSERT INTO users(name, email, password, create_at) value(?, ?, ?, ?)";
    const values = [name, email, password, create_at];
    const result = dbPool.query(sql, values);

    return result;
}

export const updateData = (name, email, password, id) => {
    let updated_at = new Date();
    const sql = "UPDATE users SET name = ? , email = ? , password = ?, updated_at = ? where user_id = ?";
    const values = [name, email, password, updated_at, id];

    return dbPool.query(sql, values);
}

export const deleteData = (id) => {
    const sql = "DELETE From users where user_id = ?";
    const values = [id];

    return dbPool.query(sql, values);
}

