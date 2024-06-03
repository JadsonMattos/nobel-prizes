# Boas-vindas ao repositório do exercício Nobel Prizes!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste exercício, utilizando React com classes, você irá implementar uma aplicação que irá exibir uma lista de prêmios Nobel. Para isso, você irá consumir uma API que contém os dados dos prêmios Nobel.

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar componentes React reutilizáveis com classes;

- Realizar requisições a uma API com ciclos de vida de componentes;

- Renderizar as informações contidas em um _array_ em forma de componente;

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Instale as dependências

- `npm install`.

</details>

# Requisitos

## 1. Implemente o componente `Header`

<details>
  <summary>Este componente deverá renderizar o logo da página:</summary>
  
  - O componente deve ser um componente de classe;

  - Exiba o logo do prêmio nobel, que está disponível no arquivo `src/assets/nobel_logo.png` dentro de uma tag `<header />`.
    - A imagem deve possuir a propriedade `alt` com o valor `Nobel Logo`;

  - Renderize o componente `Header` no componente `App`.
  
</details>

## 2. Implemente o componente `NobelPrize`

<details>
  <summary>Renderize uma lista com as informações das premiações do Nobel</summary>

  - As informações devem ser obtidas através da API do prêmio nobel, disponível em `https://api.nobelprize.org/2.1/nobelPrizes`;

  - <details><summary>Exemplo de retorno da API</summary><br />
    
    ```json
    {
      "nobelPrizes": [
        {
          "awardYear": "1901",
          "category": {
            "en": "Chemistry",
            "no": "Kjemi",
            "se": "Kemi"
          },
          "categoryFullName": {
            "en": "The Nobel Prize in Chemistry",
            "no": "Nobelprisen i kjemi",
            "se": "Nobelpriset i kemi"
          },
          "dateAwarded": "1901-11-12",
          "prizeAmount": 150782,
          "prizeAmountAdjusted": 8722510,
          "links": [
            {
              "rel": "nobelPrize",
              "href": "https://api.nobelprize.org/2/nobelPrize/che/1901",
              "action": "GET",
              "types": "application/json"
            }
          ],
          "laureates": [
            {
              "id": "160",
              "knownName": {
                "en": "Jacobus H. van 't Hoff"
              },
              "fullName": {
                "en": "Jacobus Henricus van 't Hoff"
              },
              "portion": "1",
              "sortOrder": "1",
              "motivation": {
                "en": "in recognition of the extraordinary services he has rendered by the discovery of the laws of chemical dynamics and osmotic pressure in solutions",
                "se": "såsom ett erkännande av den utomordentliga förtjänst han inlagt genom upptäckten av lagarna för den kemiska dynamiken och för det osmotiska trycket i lösningar"
              },
              "links": [
                {
                  "rel": "laureate",
                  "href": "https://api.nobelprize.org/2/laureate/160",
                  "action": "GET",
                  "types": "application/json"
                }
              ]
            }
          ]
        },
        {/* ... */},
        {/* ... */}
      ]
    }
    ```
    </details>

  Dentro do app exiba todos os prêmios retornados da API, de forma que o componente `NobelPrize` deverá ser renderizado para cada prêmio.

  - O componente `NobelPrize` deve ser um componente de classe;
    - Exiba a categoria do prêmio dentro de uma tag `h2`;

    > Dica: a categoria do prêmio está disponível na chave `categoryFullName` do objeto de cada prêmio e deve ser renderizada em inglês (`en`).

    - Exiba a data do prêmio dentro de uma tag `h4`;
    > Dica: deve ser renderizada a data completa e não apenas o ano.

</details>

## 3. Implemente o componente `Laureate`

<details>
  <summary>Renderize uma lista com as informações dos ganhadores do Nobel</summary>

  - Dentro do componente `NobelPrize`, renderize uma lista com os ganhadores do prêmio;
  - Para cada ganhador, renderize o componente `Laureate`;
  - O componente deve ser um componente de classe;
  - Exiba o nome do ganhador dentro de uma tag `h3`;

  > Dica: o nome do ganhador está disponível na chave `knownName` do objeto de cada ganhador e deve ser renderizado em inglês (`en`).
  
  > Algumas premiações não possuem esse campo, nesse caso, renderize o nome completo (`orgName`).

  - Exiba o motivo do prêmio dentro de uma tag `p`;

</details>
