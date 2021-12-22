/*
0 obter um usuário
1 obter o telefone de um usuário a partir do id
2 obter o endereço do usuário pelo id
*/


function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        })

    }, 1000);

}


function obterTelefone(usuarioId, callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: "2844950",
            ddd: "85"
        });

    }, 2000);

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


obterUsuario(function resolveUsuario(error, usuario) {

    if (error) {
        console.error("Deu erro na busca do usuario");
        return;
    }

    obterTelefone(usuario.id, function resolveTelefone(error1, telefone) {
        if (error1) {
            console.error("deu na busca do telefone:", error1);
            return;
        }

        obterEndereco(usuario.id, function resolveObterEndereco(error2, endereco) {

            if (error2) {
                console.log("Deu erro na busca do endereco: ", error2)
                return;
            }

            console.log(`nome: ${usuario.nome}\ntelefone: (${telefone.ddd})${telefone.telefone}\nendereco: ${endereco.rua}`)

            return {
                nome: usuario.nome,
                telefone: `(${telefone.ddd})${telefone.telefone}`,
                endereco: `${endereco.rua}`
            }
        })
    });

});



// console.log(usuario)
// console.log("executa primeiro");
// const telefone = obterTelefone(usuario.id);
// const id = obterEndereco(usuario.id)

// console.log(usuario);
// console.log(telefone)


