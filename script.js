// Seleciona os elementos do DOM referentes aos selects
const selectUF = document.getElementById("uf"); 
const selectCidade = document.getElementById("localidade");
const infoUF = document.getElementById("infoUF");


// função 'carregaUF'
window.addEventListener('load', carregaUF);

// Chama 'carregaMunicipios' quando uma UF é selecionada
selectUF.addEventListener('change', carregaMunicipios);

async function carregaUF() {
    // URL da API do IBGE retorna os(UFs)
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;

    //Espera pela resposta (método 'fetch' para requisições assíncronas)
    let request = await fetch(url);
    let response = await request.json(); // resposta para JSON

    // limpa o select de UF
    let options = "<option></option>";
    
    response.forEach(function (uf) {
        options += `<option value="${uf.id}" data-sigla="${uf.sigla}"> ${uf.nome}</option>`;
    });

    // Insere as opções do elemento 'selectUF'
    selectUF.innerHTML = options;
}

// Função os municípios da UF selecionada
async function carregaMunicipios() {
    const uf = selectUF.value; 
    const siglaUF = selectUF.options[selectUF.selectedIndex].getAttribute('data-sigla');

    // Se nenhuma UF for selecionada, limpa o select de cidades e retorna
    if (!uf) {
        selectCidade.innerHTML = "<option></option>";
        return;
    }

    // URL da API que retorna os municípios de uma UF
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

    try {
        // requisição à API para obter os municípios da UF selecionada
        let request = await fetch(url);
        let response = await request.json();
        
        // Cria uma opção inicial vazia no select de municípios
        let cidades = "<option></option>";
        
        // Itera sobre os municípios retornados e gera as opções para o select de cidades
        response.forEach(function (localidade) {
            cidades += `<option value="${localidade.id}"> ${localidade.nome}</option>`;
        });

        // Insere no elemento 'selectCidade'
        selectCidade.innerHTML = cidades;

        // Após carregar os municípios, chama a função para exibir informações adicionais da UF
        await carregaInformacoesUF(uf);

    } catch (error) {
        //Exibe uma mensagem de erro no console e alerta o usuário
        console.error('Erro ao carregar os municípios:', error);
        alert('Erro ao carregar os municípios. Por favor, tente novamente.');
    }
}

// Função informações adicionais da UF selecionada, Região/População simulada
async function carregaInformacoesUF(uf) {
    // URL da API que retorna informações detalhadas sobre uma UF
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`;
    
    try {
        //requisição para obter os dados da UF
        let request = await fetch(url);
        let response = await request.json();

        // Extrai o nome e a região da UF retornados pela API
        const nomeUF = response.nome;
        const regiao = response.regiao.nome; // Obtém o nome da região
        
        // Dado simulado: população fictícia
        const populacao = "10.000.000"; // População fictícia

        // Atualiza o conteúdo do elemento 'infoUF'
        infoUF.innerHTML = `<h5>Informações sobre ${nomeUF}</h5>
                            <p><strong>Região:</strong> ${regiao}</p>
                            <p><strong>População:</strong> ${populacao} habitantes</p>`;
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console.
        console.error('Erro ao carregar as informações da UF:', error);
        infoUF.innerHTML = `<p>Erro ao carregar informações da UF. Tente novamente mais tarde.</p>`;
        
    }
}






