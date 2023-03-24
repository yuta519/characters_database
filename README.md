# Charcter Database

## What is this?
- You can find charcters in popular anime or movies by searching this web application
- Currently, this application supports the below works.
  - Pokemon 
- On going works
  - STAR WARS
  - Harry Potter

[DEMO Website](https://characters-database.vercel.app/)

## Stacks
- React 18.2.0
- Materila UI 5.11.14
- Axios 1.3.4
<img src="./docs/used_stacks.png">

## Infra (Hosting Service)
- Vercel

## 3rd Party Service
- [PokeAPI](https://pokeapi.co/docs/v2#pokemonstat)
    - It's a greate api that you can use without API authentication.

## Features
- Character List
  - Shows characters. At this time, the application shows all pokemons.
- Character Detail 
  - You can find charcter details.
  - Especially, on Pokemon part, there are 
    - base info like height and weight
    - stat info like attack and defense
- Search name by text
  - You can easiy find the pokemon that you want to know details.

### Demo Moview
![Image](./docs/demo.mp4) 


## How to setup

### Prepare the application
1. Clone the repository
```bash
git clone https://github.com/yuta519/characters_database.git
cd characters_database
```

2. Install dependencies
```bash
yarn install
```

3. Run the application
```bash
yarn dev
```

## Struggles
- Learn how to use API
- Using Vite
- Implement Search Bar

