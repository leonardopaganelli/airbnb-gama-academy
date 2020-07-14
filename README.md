# Desafio Gama Experience - edição #34

O desafio consiste em consumir uma api com dados dos de imóveis e mostrar os dados em uma lista de cards.

**Utilizando as seguintes bibliotecas**:
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Para estilização e uso dos componentes
* [Vanilla JS](http://vanilla-js.com/) - Para consumir a api e manipular o DOM

## Dados utilizados

Os dados foram obtidos através de uma [api](https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72) criada para este desafio.

### Exemplos de consumo

```bash
$ curl --request GET \
    --url https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72
```
ou
```bash
fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
  .then(response => response.json())
```

### O retorno

Sempre será retorado uma lista de objetos com a o nome, tipo, foto e valor de cada imóvel.

```json
  {
    "photo": "https://a0.muscache.com/im/pictures/e6c4b347-49c7-4840-8c00-df36a2a273da.jpg?aki_policy=x_large",
    "property_type": "Apartamento",
    "name": "Apartment in Son Parc, wonderful views",
    "price": 433
  },
 ```


## Subir o projeto
Para subir o projeto é necessário ter o [node](https://nodejs.org/en/) instalado no seu computador.

Com o projeto em seu computador, é necessário rodar o comando ```npm install``` para instalar as dependências do projeto.

Tendo as dependências instaladas com sucesso temos os seguintes scripts dentro do package.json:

* <b>build</b> - compila o projeto e gera os projetos na pasta dist;
* <b>serve</b> - cria um servidor local para acessar a aplicação no endereço ```localhost:8080```* ;
* <b>dev</b> - complia o projeto e gera o servidor, com isso sempre que atualizar qualquer arquivo será gerado um novo compilado e o servidor terá os arquivos atualizados no navegador;

*As configurações para o servidor web podem ser alteradas no arquivo ```webpack.config.js```
```bash
devServer: {
	contentBase: path.join(__dirname, 'dist'),
	port: 8080
},
```

sendo:
* contentBase: o diretório dos arquivos que serão exibidos no servidor, nesse caso esta especificando o diretório dist
* port: a porta em que irá rodar o servidor web, nesse caso esta especificando a porta 8080

para mais configurações do webpack-dev-server pode ser consultado a [documentação do mesmo](https://webpack.js.org/configuration/dev-server/).
 ## Resultado final

O exemplo pode ser acessado [aqui](https://leonardopaganelli.github.io/airbnb-gama-academy/dist/) ou clonando o projeto e abrindo o arquivo index.html, do diretório dist, por qualquer navegador.

![Resultado final](/screenshot.png)

## Pendências futuras

- [ ] Implementar testes

## Agradecimentos

@douglasmaiabr, ex-aluno do Gama Experience que mantém disponibilizado a API para consultarmos. ;)