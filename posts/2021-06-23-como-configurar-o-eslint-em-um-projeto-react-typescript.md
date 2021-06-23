---
title: Como configurar o ESLint em um projeto React + TypeScript
description: O que é ESLint? Como instalar? Porque fazer linting em seu código é importante?
date: 2021-06-23 12:03:56
thumbnail: https://res.cloudinary.com/ddi5agea1/image/upload/v1624418340/Blog%20Assets/eslint0_uber7j.jpg
category: dica
background: "#50FA7B"
---
Nesse pequeno tutorial vou te mostrar como criar um setup completo com ESLint e Prettier integrados para sua aplicação React + TypeScript.

## Mas, o que é ESLint?

Basicamente, o ESLint é um projeto open source que ajuda desenvolvedores a encontrar e consertar problemas em seu código JavaScript. Em outras palavras, ele analisa seu código e executa regras de linting. Essas regras podem disparar avisos ou erros para que você saiba se o seu código está de fato com algum erro ou não.

## Mas porque devo me preocupar com linting em meu código?

A melhor parte de um linter é encontrar potenciais erros, que não necessariamente se parece com um erro.

Além disso, um projeto dentro de uma empresa que comportar vários desenvolvedores em sua manutenção por exemplo, pode ter convenções claras de padronização de código, e o uso de um linting pode ajudar o time a seguir diretrizes de estilo que foram previamente estabelecidas.

## Como instalar?

Existem algumas formas de instalar o ESLint no nosso projeto:

Globalmente:

```bash
npm install eslint -g
```

Ou utilizando o binário do próprio repositório do ESLint e inicializar nossas configurações.

Para esse tutorial, utilizaremos esse comando:

```bash
npm install eslint -g
```

Após executar esse comando, vamos responder algumas perguntas.

Para esse tutorial, irei configurar o projeto da seguinte maneira:

- How would you like to use ESLint? · To check syntax and find problems 
- What type of modules does your project use? · JavaScript modules (import/export) 
- Which framework does your project use? · React 
- Does your project use TypeScript? · Yes 
- Where does your code run? · Browser 
- What format do you want your config file to be in? · JSON 
- Would you like to install them now with npm? · No

Um adendo aqui: como utilizo o yarn como package manager na minha máquina, na última opção que é para instalar todas as dependências necessárias para o ESLint funcionar corretamente, irei optar pelo "No". Nesse caso específico, irei copiar todo o comando e instalar manualmente as dependências através do `yarn add`.

```bash
yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
```

Caso você utilize o npm, basta optar pelo "Yes" e seguir o tutorial normalmente.

Após todos pacotes instalados, perceba que o agora você têm o arquivo `.eslintrc.json` no seu diretório já com algumas configurações.

### Plugins/Regras Extras

Existem regras que podemos ir adicionando e modificando-as ao longo do tempo em nosso projeto, mas para esse tutorial, irei instalar algumas desde o início.

O primeiro: [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) . Esse plugin nos ajuda a analisar melhor os hooks do React, checar de um determinado hook está sendo usado da forma correta, se está faltando alguma variável por exemplo no array de dependências de um useEffect ou useCallback, e etc. Para isso, execute o seguinte comando:

```bash
yarn add eslint-plugin-react-hooks -D
```

Após instalar, precisamos configurá-lo dentro do nosso arquivo `.eslintrc.json` .

```json
{
  "plugins": [
// ...
    "react-hooks"
  ],
  "rules": {
// ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

Outras três regras que gosto de desligar caso você esteja utilizando um projeto com TypeScript: [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md), [explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md) e [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md).

A primeira define tipos para seu componente para melhorar a capacidade de reutilização desses dados, porém, o TypeScript já faz isso, portanto não precisamos.

A segunda regra diz que precisamos explicitar o tipo do retorno em todas as funções exportadas, mesmo que o tipo dessas funções estejam implícito. Porém, o TypeScript mais moderno já consegue inferir tipos, portanto, também não precisamos dessa regra habilitada.

A terceira define que enquanto utilizamos JSX em algum arquivo, precisamos importar o React, porém, nas versões mais modernas a variável React já vem definida de forma global na aplicação, portanto, não precisamos ficar importante ela em todos os arquivos que utilizam JSX.

Nota: isso só funciona se a variável React estiver sendo setando em um escopo global.

Logo, basta adicionar:

```json
{
  "rules": {
// ...
   "react/prop-types": "off",
	 "@typescript-eslint/explicit-module-boundary-types": "off",
	 "react/react-in-jsx-scope": "off",
  }
}
```

Nota: caso o tipo não estiver sendo inferido pelo TypeScript, então precisamos tipar realmente essa determinada função ou variável.

Por último, adiciono também o React version para automaticamente o ESLint saber qual versão do React o projeto utilizando.

```json
"settings": {
    "react": {
      "version": "detect"
    }
  }
```

Pronto, todas regras foram configuradas e idealmente o seu arquivo `.eslintrc.json` deverá estar dessa forma:

```json
{
  "env": {
    "browser": true,
    "es2021": true,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
		"react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
```

## Plugin ESLint para VSCode

Caso você utilize o VSCode, recomendo a instalação do [Plugin EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) que permite que o IntelliSense do VSCode demonstre os alertas de erros, incluindo as regras que definimos no arquivo de configuração.

![eslint-extension](https://res.cloudinary.com/ddi5agea1/image/upload/v1624418069/Blog%20Assets/eslint_v9g8pm.png)

É sempre bom restartar o VSCode após instalar ou habilitar essa extensão.

## E agora?

Após finalizar todo o processo, seu ESLint já vai avisar de possíveis erros, como por exemplo:

![eslint-error](https://res.cloudinary.com/ddi5agea1/image/upload/v1624418070/Blog%20Assets/eslint2_juxr09.png)

No entanto, podemos fazer essa verificação sem a extensão para o VSCode. Para isso, iremos criar um comando específico para checar o liting do nosso código. Vá no arquivo `package.json` e adicione o seguinte script:

```json
"scripts": {
    // ...
    "lint": "eslint src"
}
```

Basta colocar o prefixo `eslint` e a pasta que deseja fazer o lint, no meu caso, a `src`.

Executando esse comando, podemos ver que ele nos avisou do seguinte erro:

![eslint-script](https://res.cloudinary.com/ddi5agea1/image/upload/v1624418071/Blog%20Assets/eslint3_u9qttf.png)

Recomendo você ter esse script para ajudar com métodos de CI/CD futuramente em seu projeto.