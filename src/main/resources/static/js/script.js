let car_type = ["Moto", "Carro", "Caminhonete", "Utilitario"];

function searchCar() {
    const search_board = document.querySelector(".board-car").value;

    const search_car = document.querySelector(".search-car");
    search_car.setAttribute("href", `#${search_board}`);
}

function userAtendente(data) {
    console.log(data)
    //pega o elemento ul para adicionar as vagas
    let vacancy_list = document.querySelector(".list-item-set");
    let date = new Date();

    data?.map((elem, index) => {
        //recebe a placa do veiculo(id)
        let client = elem.estadia.cliente;
        let car = client.veiculo;
        let board_car = car.placa;

        //formata a data
        let exit_date = String(elem.estadia.saida).split("T", 3);
        let date2 = exit_date[0].split("-");
        let day = date2[2];
        let month = date2[1];
        let year = date2[0];
        let dateFormat = `${day}/${month}/${year}`;

        //cria a tag que irá todas a vagas
        let content_item = document.createElement("form");
        content_item.className = "data-vacancy";
        content_item.setAttribute("action", "");
        content_item.setAttribute("method", "post");

        //cria a tag status
        let item_status = document.createElement("span");
        item_status.className = "item-list item-status";

        //cria a tag para de cor do status
        let color_status = document.createElement("span");
        color_status.className = `${board_car != "" ? "empty" : "busy"}`;

        //add a tag status e cor
        content_item.appendChild(item_status);
        item_status.appendChild(color_status);

        //verificar o status
        let vacancy_status = board_car === "" || board_car == null;
        let input_data = vacancy_status ? "input" : "span";
        let select_data = vacancy_status ? "select" : "span";

        //cria as tag após verificação se há veiculo na vaga
        let item_vacancy = document.createElement("span");
        let item_board = document.createElement(input_data);
        let item_model = document.createElement(input_data);
        let item_brand = document.createElement(input_data);
        let item_color = document.createElement(input_data);
        let item_type = document.createElement(select_data);

        let item_name = document.createElement(input_data);
        let item_cpf = document.createElement(input_data);
        let item_phone = document.createElement(input_data);
        // let item_plan = document.createElement(select_data);
        let plan_option = document.createElement(select_data);
        let plan_option_diary = document.createElement("option");
        let plan_option_monthly = document.createElement("option");
        let item_expiration = document.createElement("div");
        let expiration_date = document.createElement(input_data);
        let item_action = document.createElement("div");
        let btn_action = document.createElement("button");

        //add as classes nas tags
        item_vacancy.className = "item-list item-vacancy";
        item_board.className = "item-list item-board";
        item_model.className = "item-list item-model";
        item_brand.className = "item-list item-brand";
        item_color.className = "item-list item-color";
        item_type.className = "item-list item-type";
        item_name.className = "item-list item-name";
        item_cpf.className = "item-list item-cpf";
        item_phone.className = "item-list item-phone";
        plan_option.className = "item-list item-plan";
        plan_option_diary.className = "plan-diary";
        plan_option_monthly.className = "plan-monthly";
        item_expiration.className = "item-list item-expiration";
        expiration_date.className = `${
            (elem.estadia.saida === null || elem.estadia.saida === "") &&
            select_data == "span"
                ? "end-date avulso"
                : "end-date mensal"
        }`;
        item_action.className = "item-list item-action";
        btn_action.className = `btn btn_action ${
            elem.estadia.cliente.veiculo.placa != "" ? "btn-add" : "btn-close"
        }`;

        let com = new Date(dateFormat.split("/").reverse().join("/"));
        let date = new Date();
        if (date >= com) {
            expiration_date.setAttribute("id", "expired");
            btn_action.setAttribute("id", "missing-payment");
        }

        //add os conteudos nas tags
        item_status.innerHTML = "";
        item_vacancy.innerHTML = elem.numero;
        item_board.innerHTML = board_car;
        item_model.innerHTML = car.modelo;
        item_brand.innerHTML = car.marca;
        item_color.innerHTML = car.cor;
        item_type.innerHTML = car.tipo;
        item_name.innerHTML = client.nome;
        item_cpf.innerHTML = client.cpf;
        item_phone.innerHTML = client.telefone;
        plan_option.innerHTML = `${
            elem.estadia.saida === null || elem.estadia.saida === ""
                ? "Avulso"
                : "Mensal"
        }`;
        plan_option_diary.innerHTML = "Avulso";
        plan_option_monthly.innerHTML = "Mensal";
        // expiration_date.textContent =  ""
        btn_action.textContent = `${
            board_car != "" ? "Finalizar" : "Cadastrar"
        }`;

        //atribui um id com o valor da placa para o campo placa
        content_item.setAttribute("id", `${board_car}`);

        item_vacancy.setAttribute("name", "frm_vacancy");
        item_board.setAttribute("name", "frm_board");
        item_model.setAttribute("name", "frm_model");
        item_brand.setAttribute("name", "frm_brand");
        item_color.setAttribute("name", "frm_color");
        item_type.setAttribute("name", "frm_type");
        item_name.setAttribute("name", "frm_name");
        item_cpf.setAttribute("name", "frm_cpf");
        item_phone.setAttribute("name", "frm_phone");
        plan_option.setAttribute("name", "frm_plan");
        expiration_date.setAttribute("name", "frm_expiration");

        //add as tags
        content_item.appendChild(item_status);
        item_status.appendChild(color_status);
        content_item.appendChild(item_vacancy);
        content_item.appendChild(item_board);
        content_item.appendChild(item_model);
        content_item.appendChild(item_brand);
        content_item.appendChild(item_color);
        content_item.appendChild(item_type);
        content_item.appendChild(item_name);
        content_item.appendChild(item_cpf);
        content_item.appendChild(item_phone);
        content_item.appendChild(plan_option);
        content_item.appendChild(item_expiration);
        item_expiration.appendChild(expiration_date);
        content_item.appendChild(item_action);
        item_action.appendChild(btn_action);

        //cria as opçoes de tipo de veiculo
        let motorcycle = document.createElement("option");
        let carRide = document.createElement("option");
        let pickup = document.createElement("option");
        let utility = document.createElement("option");

        motorcycle.innerHTML = "Moto";
        carRide.innerHTML = "Carro";
        pickup.innerHTML = "Caminhonete";
        utility.innerHTML = "Utilitario";

        //se vaga não possui placa cadastrada, add as opcões de plano no select e a função se houver mudança de plano
        if (vacancy_status) {
            plan_option.appendChild(plan_option_diary);
            plan_option.appendChild(plan_option_monthly);
            plan_option.setAttribute("onchange", `handleChangePlan(${index})`);

            item_type.appendChild(carRide);
            item_type.appendChild(motorcycle);
            item_type.appendChild(pickup);
            item_type.appendChild(utility);
        }

        //add todos os itens
        vacancy_list.appendChild(content_item);

        item_color.setAttribute("type", "text");

        //atribui validação para placa
        item_board.setAttribute("onkeyup", "handleBoard(event)");
        item_board.setAttribute("onblur", "alertBoard(event)");
        item_board.setAttribute("maxLength", "7");
        item_board.setAttribute("title", "");

        //atribui validação para telefone
        item_phone.setAttribute("type", "tel");
        item_phone.setAttribute("maxlength", "15");
        item_phone.setAttribute("onkeyup", "handlePhone(event)");

        //atribui validação para cpf
        item_cpf.setAttribute("type", "text");
        item_cpf.setAttribute("maxlength", "14");
        item_cpf.setAttribute("onkeyup", "handleCpf(event)");

        plan_option_diary.setAttribute("name", "diary");
        plan_option_monthly.setAttribute("name", "monthly");
        let type_plan = document.querySelector(".item-plan").value;

        let tag_expiration = document.querySelectorAll(".end-date")[index];

        expiration_date.setAttribute("type", "hidden");
        expiration_date.innerHTML = `${dateFormat}`;
        plan_option_diary.setAttribute("selected", "");

        expiration_date.innerHTML = `${
            elem.estadia.saida === null || elem.estadia.saida === ""
                ? ""
                : dateFormat
        }`;
    });
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


function userGerente(data) {
    //pega o elemento ul para adicionar as vagas
    let vacancy_list = document.querySelector(".list-item-set");

    data.map((elem, index) => {
        //recebe a placa do veiculo(id)
        let client = elem.estadia.cliente;
        let car = client.veiculo;
        let board_car = car.placa;

        //valida se tem data de saida
        let exit_car =
            elem.estadia.saida != null || elem.estadia.saida == "" ? true : false;

        //formata a data
        let exit_date = String(elem.estadia.saida).split("T", 3);
        let date2 = exit_date[0].split("-");
        let day = date2[2];
        let month = date2[1];
        let year = date2[0];
        let dateFormat = `${day}/${month}/${year}`;


        //cria a tag que irá todas a vagas
        let content_item = document.createElement("form");
        content_item.className = "data-vacancy";
        content_item.setAttribute("action", "");
        content_item.setAttribute("method", "post");

        //cria a tag status
        let item_status = document.createElement("span");
        item_status.className = "item-list item-status";

        //cria a tag para de cor do status
        let color_status = document.createElement("span");
        color_status.className = `${board_car != "" ? "empty" : "busy"}`;

        //add a tag status e cor
        content_item.appendChild(item_status);
        item_status.appendChild(color_status);

        //verificar o status
        let vacancy_status = board_car === "" || board_car == null;
        let input_data = "input";
        let select_data = "select";

        //cria as tag após verificação se há veiculo na vaga
        let item_vacancy = document.createElement("span");
        let item_board = document.createElement(input_data);
        let item_model = document.createElement(input_data);
        let item_brand = document.createElement(input_data);
        let item_color = document.createElement(input_data);
        let item_type = document.createElement(select_data);

        let item_name = document.createElement(input_data);
        let item_cpf = document.createElement(input_data);
        let item_phone = document.createElement(input_data);
        // let item_plan = document.createElement(select_data);
        let plan_option = document.createElement(select_data);
        let plan_option_diary = document.createElement("option");
        let plan_option_monthly = document.createElement("option");
        let item_expiration = document.createElement("div");
        let expiration_date = document.createElement(input_data);
        let item_action = document.createElement("div");
        let btn_action = document.createElement("button");

        //add as classes nas tags
        item_vacancy.className = "item-list item-vacancy";
        item_board.className = "item-list item-board";
        item_model.className = "item-list item-model";
        item_brand.className = "item-list item-brand";
        item_color.className = "item-list item-color";
        item_type.className = "item-list item-type";
        item_name.className = "item-list item-name";
        item_cpf.className = "item-list item-cpf";
        item_phone.className = "item-list item-phone";
        plan_option.className = "item-list item-plan";
        plan_option_diary.className = "plan-diary";
        plan_option_monthly.className = "plan-monthly";
        item_expiration.className = "item-list item-expiration";
        expiration_date.className = `${
            exit_car && select_data == "span"
                ? "end-date avulso"
                : "end-date mensal"
        }`;
        item_action.className = "item-list item-action";
        btn_action.className = `btn btn_action ${
            elem.estadia.cliente.veiculo.placa != "" ? "btn-add" : "btn-close"
        }`;

        let com = new Date(dateFormat.split('/').reverse().join('/'))
        let date = new Date()
        if(date >= com) {
            expiration_date.setAttribute("id", "expired");
            btn_action.setAttribute("id", "missing-payment");
        }

        //add os conteudos nas tags
        item_status.innerHTML = "";
        item_vacancy.innerHTML = elem.numero;
        item_board.value = board_car;
        item_model.value = car.modelo;
        item_brand.value = car.marca;
        item_color.value = car.cor;
        item_type.value = car.tipo;
        item_name.value = client.nome;
        item_cpf.value = client.cpf;
        item_phone.value = client.telefone;
        plan_option.innerHTML = `${exit_car ? "Avulso" : "Mensal"}`;
        plan_option_diary.innerHTML = "Avulso";
        plan_option_monthly.innerHTML = "Mensal";
        expiration_date.value = dateFormat;
        btn_action.textContent = `${
            board_car != "" ? "Finalizar" : "Cadastrar"
        }`;

        //atribui um id com o valor da placa para o campo placa
        content_item.setAttribute("id", `${board_car}`);

        item_vacancy.setAttribute("name", "frm_vacancy")
        item_board.setAttribute("name", "frm_board")
        item_model.setAttribute("name", "frm_model")
        item_brand.setAttribute("name", "frm_brand")
        item_color.setAttribute("name", "frm_color")
        item_type.setAttribute("name", "frm_type")
        item_name.setAttribute("name", "frm_name")
        item_cpf.setAttribute("name", "frm_cpf")
        item_phone.setAttribute("name", "frm_phone")
        plan_option.setAttribute("name", "frm_plan")
        expiration_date.setAttribute("name", "frm_expiration")

        //add as tags
        content_item.appendChild(item_status);
        item_status.appendChild(color_status);
        content_item.appendChild(item_vacancy);
        content_item.appendChild(item_board);
        content_item.appendChild(item_model);
        content_item.appendChild(item_brand);
        content_item.appendChild(item_color);
        content_item.appendChild(item_type);
        content_item.appendChild(item_name);
        content_item.appendChild(item_cpf);
        content_item.appendChild(item_phone);
        content_item.appendChild(plan_option);
        content_item.appendChild(item_expiration);
        item_expiration.appendChild(expiration_date);
        content_item.appendChild(item_action);
        item_action.appendChild(btn_action);

        //cria as opçoes de tipo de veiculo
        let motorcycle = document.createElement("option");
        let carRide = document.createElement("option");
        let pickup = document.createElement("option");
        let utility = document.createElement("option");

        motorcycle.className = "motorcycle";
        carRide.className = "carRide";
        pickup.className = "pickup";
        utility.className = "utility";

        motorcycle.innerHTML = "Moto";
        carRide.innerHTML = "Automovel";
        pickup.innerHTML = "Caminhonete";
        utility.innerHTML = "Utilitario";

        //se vaga não possui placa cadastrada, add as opcões de plano no select e a função se houver mudança de plano
        plan_option.appendChild(plan_option_diary);
        plan_option.appendChild(plan_option_monthly);
        plan_option.setAttribute("onchange", `handleChangePlan(${index})`);




        let type_car = elem.estadia.cliente.veiculo.tipo

        switch (String(type_car)) {
            case "Utilitario":
                utility.setAttribute("selected", "")
                break;
            case "Caminhonete":
                pickup.setAttribute("selected", "")
                break;
            case "Automovel":
                carRide.setAttribute("selected", "")
                break;
            case "Moto":
                motorcycle.setAttribute("selected", "")
                break
            default:
                break;
        }

        item_type.appendChild(carRide);
        item_type.appendChild(motorcycle);
        item_type.appendChild(pickup);
        item_type.appendChild(utility);



        //add todos os itens
        vacancy_list.appendChild(content_item);




        item_color.setAttribute("type", "text");

        //atribui validação para placa
        item_board.setAttribute("onkeyup", "handleBoard(event)");
        item_board.setAttribute("onblur", "alertBoard(event)");
        item_board.setAttribute("maxLength", "7");
        item_board.setAttribute("title", "");

        //atribui validação para telefone
        item_phone.setAttribute("type", "tel");
        item_phone.setAttribute("maxlength", "15");
        item_phone.setAttribute("onkeyup", "handlePhone(event)");

        //atribui validação para cpf
        item_cpf.setAttribute("type", "text");
        item_cpf.setAttribute("maxlength", "14");
        item_cpf.setAttribute("onkeyup", "handleCpf(event)");

        plan_option_diary.setAttribute("name", "diary");
        plan_option_monthly.setAttribute("name", "monthly");
        let type_plan = document.querySelector(".item-plan").value;

        if (exit_car) {
            plan_option_monthly.setAttribute("selected", "");
        } else {
            expiration_date.setAttribute("type", "hidden");
            expiration_date.value = dateFormat;
        }

        let tag_expiration = document.querySelectorAll(".end-date")[index];

        // plan_option_diary.setAttribute("selected", "")

        expiration_date.innerHTML = `${exit_car ? "" : dateFormat}`;

    });
}

