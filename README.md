
# eMusic Rank

## Descrição

**eMusic Rank** é uma aplicação web desenvolvida para amantes da música eletrônica que permite visualizar as músicas e artistas mais tocados por gênero. Utilizando a API do Spotify, o eMusic Rank fornece uma interface intuitiva para descobrir novas faixas e acompanhar tendências no mundo da música eletrônica.

## Funcionalidades

- **Exibição das Músicas Mais Tocadas**: Os usuários podem consultar as músicas mais populares de diferentes vertentes da música eletrônica.
- **Exibição dos Artistas Mais Tocados**: O sistema também fornece informações sobre os artistas que mais estão se destacando em cada gênero.
- **Filtragem por Gênero**: O usuário pode escolher um gênero específico para visualizar as músicas e artistas mais tocados desse gênero.11

## Tecnologias Utilizadas

### Backend

- **Node.js**: Plataforma para execução do código JavaScript no lado do servidor.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, ajudando a evitar erros comuns.
- **Express**: Framework para construção de APIs RESTful com Node.js.
- **Axios**: Biblioteca para fazer requisições HTTP, utilizada para interagir com a API do Spotify.
- **dotenv**: Pacote que permite carregar variáveis de ambiente de um arquivo `.env` para `process.env`.

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Utilizado também no frontend para garantir a tipagem estática e facilitar o desenvolvimento.
- **Axios**: Para realizar requisições ao backend.

## Estrutura do Projeto

```
project/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── spotifyApi.ts
│   │   ├── controllers/
│   │   │   └── TrackController.ts
│   │   ├── interfaces/
│   │   │   └── ISpotifyService.ts
│   │   ├── routes/
│   │   │   └── trackRoutes.ts
│   │   ├── services/
│   │   │   └── SpotifyService.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── TrackList.tsx
    │   │   └── TrackItem.tsx
    │   ├── services/
    │   │   └── ApiService.ts
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── styles.css
    ├── tsconfig.json
    ├── package.json
    └── README.md
