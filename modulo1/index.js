/*
0 obter um usuário
1 obter o telefone de um usuário a partir do id
2 obter o endereço do usuário pelo id
*/

const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);



function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            });

        }, 1000);

    });
}


function obterTelefone(usuarioId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve({
                telefone: "2844950",
                ddd: "85"
            });
        }, 2000);
    });

}

function obterEndereco(usuarioId, callback) {
    setTimeout(function () {
        return callback(null, {
            rua: "sebastião barbosa de Melo",
            numero: "01",
            bairro: "centro",
            municipio: "Acarape",
            estado: "Ceará"
        })
    }, 3000);

}


const usuarioPromise = obterUsuario();
// console.log(usuarioPromise)

usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function (telefone) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: telefone
                }
            })
    })
    .then(function (resultado) {
        const obterEnderco = obterEnderecoAsync(resultado.usuario.id);
        return obterEnderco.then(function resolveEndereco(endereco) {
            return {
                usuario: {
                    ...resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: endereco
                }
            }
        })
    })
    .then(function (resolve) {
        console.log("resultado: ", resolve);
    })
    .catch(function (error) {
        console.error("Deu erro:", error);
    });

// obterUsuario(function resolveUsuario(error, usuario) {

//     if (error) {
//         console.error("Deu erro na busca do usuario");
//         return;
//     }

//     obterTelefone(usuario.id, function resolveTelefone(error1, telefone) {
//         if (error1) {
//             console.error("deu na busca do telefone:", error1);
//             return;
//         }

//         obterEndereco(usuario.id, function resolveObterEndereco(error2, endereco) {

//             if (error2) {
//                 console.log("Deu erro na busca do endereco: ", error2)
//                 return;
//             }

//             console.log(`nome: ${usuario.nome}\ntelefone: (${telefone.ddd})${telefone.telefone}\nendereco: ${endereco.rua}`)

//             return {
//                 nome: usuario.nome,
//                 telefone: `(${telefone.ddd})${telefone.telefone}`,
//                 endereco: `${endereco.rua}`
//             }
//         })
//     });

// });



// console.log(usuario)
// console.log("executa primeiro");
// const telefone = obterTelefone(usuario.id);
// const id = obterEndereco(usuario.id)

// console.log(usuario);
// console.log(telefone)


