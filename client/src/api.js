const getGoods = () => fetch('http://localhost:3001/goods').then(r => r.json());

const getGoodById = (id) => fetch(`http://localhost:3001/goods/${id}`).then(r => r.json());

const createUser = (user) => fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}).then(r => r.json());

const loginUser = (params) => fetch('http://localhost:3001/userlogin', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(params)
}).then(r => r.json());

export {
    getGoods,
    getGoodById,
    createUser,
    loginUser
};
