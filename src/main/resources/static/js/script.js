let car_type = ["Moto", "Carro", "Caminhonete", "Utilitario"];

function searchCar() {
    const search_board = document.querySelector(".board-car").value;

    const search_car = document.querySelector(".search-car");
    search_car.setAttribute("href", `#${search_board}`);
}

function handleChangePlan(index) {
    let date_expiration = document.querySelectorAll(".end-date");
    date_expiration[index].setAttr;

    value_select = document.querySelectorAll(".item-plan");
    if (value_select[index].value == "Mensal") {
        date_expiration[index].setAttribute("type", "date");
    } else {
        date_expiration[index].setAttribute("type", "hidden");
    }
}

const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
};

const handleCpf = (event) => {
    let input = event.target;
    input.value = cpfMask(input.value);
};

function cpfMask(value) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");

    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
}

const handleBoard = (event) => {
    let input = event.target;
    input.value = boardMask(input.value.toUpperCase());
};

const boardMask = (value) => {
    if (!value) return "";
    value = value.replace(/(\w{3})(\d{1})(\w{1})(\d{2})/, "$1-$2$3$4");
    value = value.replace(/(\w{3})(\d{1})(\w{1})(\d{2})/, "$1-$2$3$4");
    return value;
};

const alertBoard = (event) => {
    var regex = "[A-Z]{3}-[0-9]{1}[0-9A-Z]{1}[0-9]{2}";
    var placa = event.target.value;

    if (!placa.match(regex)) {
        window.alert("A placa digitada está incorreta!")

    }
};


function userAtendente(data) {
    criaLista(data, false);
}

function userGerente(data) {
    criaLista(data, true);
}

function criaLista(data, isManager) {
    //pega o elemento ul para adicionar as vagas
    const items = data.map((vaga) => {
        const estadia = vaga.estadia || {};
        const client = estadia.cliente || {};
        const car = client.veiculo || {};

        return { vaga, estadia, client, car }
    });

    Handlebars.registerHelper('select', function(selected, option) {
        return (selected == option) ? 'selected="selected"' : '';
    });

    Handlebars.registerHelper('and', function(...elements) {
        return elements.every(element => !!element);
    });

    Handlebars.registerHelper('not', function(value) {
        return !value;
    });

    Handlebars.registerHelper('dateFormat', function (value) {
        let date = value.split("T", 3)[0];
        date = date.split("-");
        return `${date[2]}/${date[1]}/${date[0]}`;
    });

    Handlebars.registerHelper('editable', (estadia)  => {
        return isManager || !estadia.id
    });

    var source = $("#estadia-template").html();
    var template = Handlebars.compile(source);
    var html = template({items});
    $(".list-item-set").append(html);
}

async function submitForm(form) {
    var token = document.getElementById('_csrf').content;
    var header = document.getElementById('_csrf_header').content;

    await fetch(form.getAttribute('action'), {
        method: form.getAttribute('method'),
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            [header]: token
        },
        credentials: 'include',
        body: JSON.stringify(getData(form))
    })
    .then((response) => response.json())
    .then((estadia) => {
      if(estadia.saida != null) {
        location.href = `/pagamentos/novo?estadia_id=${estadia.id}`;
      } else {
        alert('TODO: tratar retorno da criação de estadias')
      }
    });
}

function getData(form) {
  var formData = new FormData(form);
  return Object.fromEntries(formData);
}

function formatPlano(plano) {
    if (!plano) {
        return "";
    }
    return plano[0].toUpperCase() + plano.slice(1).toLowerCase()
}