
    const data = [
        {"numero":"1","estadia":{"entrada":"","saida":"","cliente":{"nome":"","cpf":"","telefone":"","veiculo":{"marca":"","modelo":"","cor":"","placa":"","tipo":""}}}},
        {"numero":"2","estadia":{"entrada":"2022-12-08T17:19:00","saida":"2022-12-08T17:19:00","cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"ABC23D7","tipo":"Carro"}}}},
        {"numero":"3","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"fff23D7","tipo":"Carro"}}}},
        {"numero":"4","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"gg23D7","tipo":"Carro"}}}},
        {"numero":"5","estadia":{"entrada":"","saida":"","cliente":{"nome":"","cpf":"","telefone":"","veiculo":{"marca":"","modelo":"","cor":"","placa":"","tipo":""}}}},
        {"numero":"6","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"ccc23D7","tipo":"Carro"}}}},
        {"numero":"7","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"ABC23D7","tipo":"Carro"}}}},
        {"numero":"8","estadia":{"entrada":"","saida":"","cliente":{"nome":"","cpf":"","telefone":"","veiculo":{"marca":"","modelo":"","cor":"","placa":"","tipo":""}}}},
        {"numero":"9","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"rr23D7","tipo":"Carro"}}}},
        {"numero":"10","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"ABC23D7","tipo":"Carro"}}}},
        {"numero":"11","estadia":{"entrada":"","saida":"","cliente":{"nome":"","cpf":"","telefone":"","veiculo":{"marca":"","modelo":"","cor":"","placa":"","tipo":""}}}},
        {"numero":"12","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"kk23D7","tipo":"Carro"}}}},
        {"numero":"13","estadia":{"entrada":"2022-12-08T17:19:00","saida":null,"cliente":{"nome":"Laercio Pereira","cpf":"12345678901","telefone":"11988888087","plano": null,"veiculo":{"marca":"Fiat","modelo":null,"cor":"Azul","placa":"xx23D7","tipo":"Carro"}}}},
        {"numero":"14","estadia":{"entrada":"","saida":"","cliente":{"nome":"","cpf":"","telefone":"","veiculo":{"marca":"","modelo":"","cor":"","placa":"","tipo":""}}}},
    ]

    function searchCar() {
        const search_board = document.querySelector(".board-car").value
        
        const search_car = document.querySelector(".search-car")
        search_car.setAttribute("href", `#${search_board}`)
    }

    function pegaTexto() {

        //pega o elemento ul para adicionar as vagas
        let vacancy_list = document.querySelector(".list-item-set")
        
        data.map((elem, index) => {

            //recebe a placa do veiculo(id)
            let client = elem.estadia.cliente
            let car = client.veiculo
            let board_car = car.placa

            //formata a data
            let exit_date = String(elem.estadia.saida).split("T", 3)
            let date2 = exit_date[0].split("-")
            let day  = date2[2];
            let month  = date2[1];
            let year  = date2[0];
            let dateFormat = `${day}/${month}/${year}`

            //cria a tag que irá todas a vagas
            let content_item = document.createElement('li');
            content_item.className = "data-vacancy"

            //cria a tag status
            let item_status = document.createElement('span');
            item_status.className = "item-list item-status"
            
            //cria a tag para de cor do status
            let color_status = document.createElement('span');
            color_status.className = `${ board_car != "" ? "empty" : "busy"}`

            //add a tag status e cor
            content_item.appendChild(item_status)
            item_status.appendChild(color_status)

            //verificar o status
            let vacancy_status = board_car === "" || board_car == null
            let input_data = vacancy_status ? "input" : "span";
            let select_data = vacancy_status ? "select" : "span"

            //cria as tag após verificação se há veiculo na vaga
            let item_vacancy = document.createElement('span') ;
            let item_board = document.createElement(input_data);
            let item_model = document.createElement(input_data);
            let item_brand = document.createElement(input_data);
            let item_color = document.createElement(input_data);
            let item_type = document.createElement(input_data);
            let item_name = document.createElement(input_data);
            let item_cpf = document.createElement(input_data);
            let item_phone = document.createElement(input_data);
            // let item_plan = document.createElement(select_data);
            let plan_option = document.createElement(select_data)
            let plan_option_diary = document.createElement('option')
            let plan_option_monthly = document.createElement('option')
            let item_expiration = document.createElement('div');
            let expiration_date = document.createElement(input_data)
            let item_action = document.createElement('div');
            let btn_action = document.createElement('button')
            
            
            //add as classes nas tags
            item_vacancy.className = "item-list item-vacancy"
            item_board.className = "item-list item-board"
            item_model.className = "item-list item-model"
            item_brand.className = "item-list item-brand"
            item_color.className = "item-list item-color"
            item_type.className = "item-list item-type"
            item_name.className = "item-list item-name"
            item_cpf.className = "item-list item-cpf"
            item_phone.className = "item-list item-phone"
            plan_option.className = "item-list item-plan"
            // item_plan.className = "item-list item-plan"
            plan_option_diary.className = "plan-diary"
            plan_option_monthly.className = "plan-monthly"
            item_expiration.className = "item-list item-expiration"
            item_action.className = "item-list item-action"
            btn_action.className = `btn btn_action ${elem.estadia.cliente.veiculo.placa != "" ? "btn-add" : "btn-close"}`
            expiration_date.className = "end-date"
    
            //add os conteudos nas tags
            item_status.innerHTML = ""
            item_vacancy.innerHTML = elem.numero
            item_board.innerHTML = board_car
            item_model.innerHTML = car.modelo
            item_brand.innerHTML = car.marca
            item_color.innerHTML = car.cor
            item_type.innerHTML = car.tipo
            item_name.innerHTML = client.nome
            item_cpf.innerHTML = client.cpf
            item_phone.innerHTML = client.telefone
            plan_option.innerHTML = `${elem.estadia.saida === null || elem.estadia.saida === "" ? "Avulso" : "Mensal"}`
            plan_option_diary.innerHTML = "Avulso"
            plan_option_monthly.innerHTML = "Mensal"
            expiration_date.textContent =  ""
            btn_action.textContent = `${board_car != "" ? "Finalizar" : "Cadastrar"}`

            item_board.setAttribute("id", `${board_car}`)

            if(vacancy_status) {
                plan_option.setAttribute("onchange", `handleChangePlan(${index})`)
            }

            content_item.appendChild(item_status)
            item_status.appendChild(color_status)
            content_item.appendChild(item_vacancy)
            content_item.appendChild(item_board)
            content_item.appendChild(item_model)
            content_item.appendChild(item_brand)
            content_item.appendChild(item_color)
            content_item.appendChild(item_type)
            content_item.appendChild(item_name)
            content_item.appendChild(item_cpf)
            content_item.appendChild(item_phone)
            content_item.appendChild(plan_option)
            // content_item.appendChild(item_plan)
            if(vacancy_status) {
                plan_option.appendChild(plan_option_diary)
                plan_option.appendChild(plan_option_monthly)
            }

            
            content_item.appendChild(item_expiration)
            item_expiration.appendChild(expiration_date)
            content_item.appendChild(item_action)
            item_action.appendChild(btn_action)

            vacancy_list.appendChild(content_item)
            plan_option_diary.setAttribute("name", "diary")
            plan_option_monthly.setAttribute("name", "monthly")
            let type_plan = document.querySelector('.item-plan').value
            console.log(type_plan)
            
            if(type_plan == "Avulso") {
                
                expiration_date.setAttribute("type", "hidden")
            } else {
                expiration_date.innerHTML =  `${dateFormat}`
                plan_option_diary.setAttribute("selected", "")
            }	

            
            let tag_expiration = document.querySelector(".end-date")
            
            expiration_date.innerHTML =  `${elem.estadia.saida === null || elem.estadia.saida === "" ? "" : dateFormat}`
        })
    }
    function handleChangePlan(index) {
        let date_expiration = document.querySelectorAll(".end-date")
        date_expiration[index].setAttr

        value_select = document.querySelectorAll(".item-plan")
        if( value_select[index].value == "Mensal") {
            date_expiration[index].setAttribute("type", "date")
        }else {
            date_expiration[index].setAttribute("type", "hidden")
        }
    }
