const getGoods = () => fetch('http://localhost:3001/goods').then(r => r.json());
const getGoodById = (id) => fetch(`http://localhost:3001/goods/${id}`).then(r => r.json());
const createUser = (user) => fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}).then(r => r.json());
const loginUser = (email, password) => fetch('http://localhost:3001/user', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(email)
}).then(r => r.json()).then((r) => {
    if (r.password === password) {
        return true
    } else return false;
});

export {
    getGoods,
    getGoodById,
    createUser,
    loginUser
};
