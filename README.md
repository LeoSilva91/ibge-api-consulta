# **API IBGE com Informações Adicionais**

### **Descrição**
Este projeto é uma aplicação web que permite consultar estados (UFs) e municípios do Brasil de forma dinâmica utilizando a **API do IBGE**. Ele oferece uma interface simples e amigável, onde o usuário pode selecionar um estado e visualizar:
- A lista de municípios correspondentes.
- Informações adicionais sobre o estado selecionado, como:
  - Nome da região.
  - População (simulada).

### **Funcionalidades**
- Listar estados (UFs) do Brasil em um menu dropdown dinâmico.
- Carregar automaticamente os municípios relacionados ao estado selecionado.
- Exibir detalhes da região e população (simulada) da UF selecionada.
- Interface estilizada e intuitiva com Bootstrap e Select2.

---

### **Tecnologias Utilizadas**
- **HTML5**: Estruturação da página.
- **CSS3**: Estilização com **Bootstrap**.
- **JavaScript (ES6)**: Manipulação do DOM e integração com a API do IBGE.
- **API do IBGE**: Para listar estados e municípios.
- **Select2 Plugin**: Para melhorar a usabilidade dos campos de seleção.

---

### **Como Executar o Projeto**
1. **Pré-requisitos**:
   - Node.js instalado no computador.
   - Navegador atualizado.

2. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

3. **Instale as dependências**:
   No terminal, rode:
   ```bash
   npm install
   ```

4. **Inicie o servidor local**:
   Use um servidor como o **live-server**:
   ```bash
   npx live-server
   ```

5. **Acesse no navegador**:
   - Abra o endereço exibido pelo servidor (geralmente `http://127.0.0.1:8080`).

---

### **Como Usar**
1. Selecione um estado no campo "Selecione o Estado (UF)".
2. O campo "Selecione a Cidade" será preenchido com os municípios correspondentes.
3. Informações adicionais sobre o estado (nome da região e população) serão exibidas abaixo do formulário.

---


### **Possíveis Melhorias**
- Buscar dados reais de população por meio de outras APIs.
- Adicionar a funcionalidade de salvar consultas recentes no `localStorage`.
- Tornar a aplicação totalmente responsiva para dispositivos móveis.
- Implementar suporte multilíngue.

---


### **Contribuições**
Contribuições são bem-vindas! Siga os passos:
1. Faça um fork do projeto.
2. Crie uma branch com a nova feature: `git checkout -b feature/nova-feature`.
3. Faça o commit: `git commit -m 'Adiciona nova feature'`.
4. Faça o push: `git push origin feature/nova-feature`.
5. Abra um Pull Request.

