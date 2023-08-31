import * as UserRepo from './repository.js';

const createUser = async (name, email, password) => {
    const [result] = await  UserRepo.createData(name, email, password);

    console.log(`Data berhasil dibuat  dengan id: ${result.insertId}`);
}

const getUser = async (limit) => {
    const [result] = await UserRepo.getData(limit);

    console.log(result);
}

const updateUser = async (name, email, password, id) => {
    const [result] = await UserRepo.updateData(name, email, password, id);
    console.log(result);
}
//

const deleteUser = async (id) => {
    const [result] = await UserRepo.deleteData(id);
    console.log(result);
}

// await createUser("sule", "sule@yahoo.com", "pass123");
// await createUser("muntari", "muntari@gmail.com", "pass123");


console.log("data yang ada di database: ");

// await updateUser("joni", "joni@yahoo.com", "000", 4)
// getUser(10);

await deleteUser(4);
getUser(10);