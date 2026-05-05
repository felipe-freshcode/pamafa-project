# Pamafa — teste técnico (fullstack)

Repositório do meu teste técnico para a **Pamafa**. A ideia é mostrar um pouco de trabalho **fullstack**: interface com **Next.js** e API com **Node.js** + **Express**, cada um no seu diretório para ficar organizado.

## O que tem aqui

- **`front-end/`** — app Next.js (React).
- **`back-end/`** — servidor HTTP com Express, CORS habilitado e algumas rotas de exemplo.

Os dois projetos são independentes (cada um com seu `package.json`). Dá para evoluir depois com variáveis de ambiente, proxy no Next para a API, etc., se fizer sentido no desafio.

## Versões que usei

Validei tudo na minha máquina com:

| Ferramenta | Versão   |
| ---------- | -------- |
| Node.js    | v22.22.0 |
| npm        | 10.9.7   |

Dependências principais (como estão no `package.json` / lock):

| Pacote            | Versão |
| ----------------- | ------ |
| Next.js           | 16.2.4 |
| React / React DOM | 19.2.4 |
| Express           | 5.2.1  |
| cors              | 2.8.6  |

Se você estiver em outra versão de Node, em geral **Node 20+** costuma ser suficiente para Next 16 e Express 5; se algo quebrar, vale alinhar com as versões da tabela acima.

## Como rodar

### 1. Clonar e instalar dependências

Na raiz do repositório:

```bash
cd front-end && npm install 
cd back-end && npm install
```

(Ou abrir dois terminais e instalar cada pasta separadamente — tanto faz.)

### 2. Backend

```bash
cd back-end
node app.js
```

O servidor sobe na **porta 3000** (mensagem no console).

### 3. Front-end

Em outro terminal:

```bash
cd front-end
npm run dev
```

Por padrão o Next também usa a **porta 3000**. Então, na prática, **não dá para deixar os dois rodando na 3000 ao mesmo tempo** sem mudar porta em um deles. Opções rápidas:

- Subir só um por vez enquanto testa, ou
- Rodar o Next em outra porta, por exemplo: `npx next dev -p 3001` (ou ajustar o script `dev` no `package.json` do front).

### Build de produção (front)

```bash
cd front-end
npm run build
npm start
```

## Estrutura rápida

```
pamafa-project/
├── front-end/     # Next.js
├── back-end/      # Express (app.js)
└── README.md
```
