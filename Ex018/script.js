var ultnum = ""

function nume(valor) {
    var res = document.getElementById('idisplay')
    ultnum = valor
    res.value += valor
}


function confirmar() {
    let numero = document.getElementById('idisplay').value
    let img = document.getElementById('imagem')

    if (numero === "0") {
        let res0 = document.getElementById('res0');
        res0.innerText = parseInt(res0.innerText) + 1;
        img.src = '../Ex018/candidatos/SemFoto.png'
        //img.style.padding = '25px'; 
        window.alert(`Voto concluído! 1 voto para o candidato(a) numero: ${numero} - nome: ${nom0.innerText}`)
    } else {
        switch (numero) {
            case '111': {
                let res1 = document.getElementById('res1');
                res1.innerText = parseInt(res1.innerText) + 1;
                img.src = '../Ex018/candidatos/Joao_Pereira.png'
                window.alert(`Voto concluído! 1 voto para o candidato(a) numero: ${numero} - nome: ${nom1.innerText}`)
                break;
            }
            case '222': {
                let res2 = document.getElementById('res2');
                res2.innerText = parseInt(res2.innerText) + 1;
                img.src = '../Ex018/candidatos/Maria_Silva.png'
                window.alert(`Voto concluído! 1 voto para o candidato(a) numero: ${numero} - nome: ${nom2.innerText}`)
                break; 
            }
            case '333': {
                let res3 = document.getElementById('res3');
                res3.innerText = parseInt(res3.innerText) + 1;
                img.src = '../Ex018/candidatos/Pedro_Couto.png'
                window.alert(`Voto concluído! 1 voto para o candidato(a) numero: ${numero} - nome: ${nom3.innerText}`)
                break;
            }
            case '444': {
                let res4 = document.getElementById('res4');
                res4.innerText = parseInt(res4.innerText) + 1;
                img.src = '../Ex018/candidatos/Ana_Maria.png'
                window.alert(`Voto concluído! 1 voto para o candidato(a) numero: ${numero} - nome: ${nom4.innerText}`)
                break;
            }
            case '555': {
                let res5 = document.getElementById('res5');
                res5.innerText = parseInt(res5.innerText) + 1;
                img.src = '../Ex018/candidatos/Carlos_Marques.png'
                window.alert(`Voto concluído! 1 voto para o candidato(a) numero: ${numero} - nome: ${nom5.innerText}`)
                break; 
            }
            default: {
                window.alert('Número inválido!');  
                break;
            }
        }
    }

    document.getElementById('idisplay').value = '';  
}

function corrigir() {
    var res = document.getElementById('idisplay');
    res.value = res.value.slice(0, -1);  
}