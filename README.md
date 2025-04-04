# Imersão Front-End

Este projeto foi desenvolvido durante a **Imersão Front-End da Alura**, com foco em criar uma interface web moderna e responsiva. Ele explora fundamentos de desenvolvimento front-end, utilizando uma API local simulada para gerenciar e exibir dados com boas práticas de design e interatividade.

## Funcionalidades

- Interface responsiva para diversos dispositivos.
- Estilização moderna com CSS puro.
- Consumo de dados via JavaScript de uma API local.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do conteúdo.
- **CSS3**: Estilização visual.
- **JavaScript**: Interatividade.
- **json-server**: API RESTful local.

## Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/joaorafael1504/imersao-front.git
   ```

2. **Acesse o diretório do projeto**:

   ```bash
   cd imersao-front
   ```

3. **Inicie a API local com json-server**: Para simular uma API RESTful com os dados do arquivo `artists.json`, execute o comando abaixo no terminal:

   ```bash
   npx json-server api-artists/artists.json --port 3000
   ```

   Isso iniciará um servidor local em [http://localhost:3000](http://localhost:3000) com os dados disponíveis para consumo.

4. **Abra o projeto no navegador**:

   - Instale a extensão Live Server no Visual Studio Code (ou use outra ferramenta similar).
   - Abra o arquivo `index.html` com o Live Server (clique com o botão direito no arquivo e selecione "Open with Live Server") para visualizar o projeto com recarregamento automático.

## Autor

Desenvolvido por João Rafael.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.