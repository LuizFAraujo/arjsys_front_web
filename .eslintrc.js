module.exports = {
  // Define os ambientes que o ESLint deve considerar
  env: {
    browser: true, // Permite variáveis globais do navegador (window, document, etc.)
    es2021: true,  // Habilita suporte para ES2021 (exemplo: optional chaining)
    node: true     // Permite variáveis globais do Node.js (process, module, etc.)
  },

  // Configurações base que o ESLint usará
  extends: [
    "eslint:recommended",           // Conjunto básico de regras recomendadas pelo ESLint
    "plugin:react/recommended",     // Regras específicas para projetos React
    "plugin:react-hooks/recommended", // Regras para lidar com os hooks do React
    "plugin:@typescript-eslint/recommended", // Regras específicas para TypeScript
    "prettier"                      // Integração com Prettier, desabilitando regras conflitantes
  ],

  // Especifica o parser que o ESLint deve usar (no caso, o do TypeScript)
  parser: "@typescript-eslint/parser",

  // Configurações adicionais para o parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Permite JSX (usado em arquivos .tsx)
    },
    ecmaVersion: "latest", // Habilita suporte para a versão mais recente do ECMAScript
    sourceType: "module"   // Define o código como módulo ES (permite `import` e `export`)
  },

  // Plugins extras que adicionam regras e funcionalidades ao ESLint
  plugins: [
    "react",             // Regras específicas para React
    "@typescript-eslint", // Regras específicas para TypeScript
    "prettier"           // Regras específicas para integração com Prettier
  ],

  // Regras personalizadas para o ESLint
  rules: {
    "prettier/prettier": "warn", // Emite um aviso para qualquer regra de Prettier que seja violada
    "react/react-in-jsx-scope": "off", // Desativa a regra que exige `React` em escopo para usar JSX
    "no-unused-vars": "warn", // Emite um aviso para variáveis não utilizadas no JavaScript
    "@typescript-eslint/no-unused-vars": [
      "warn",                  // Emite um aviso para variáveis não utilizadas no TypeScript
      { argsIgnorePattern: "^_" } // Ignora argumentos que começam com `_` (ex.: `_req`, `_next`)
    ]
  },

  // Configurações específicas para o React
  settings: {
    react: {
      version: "detect" // Detecta automaticamente a versão do React usada no projeto
    }
  }
};
