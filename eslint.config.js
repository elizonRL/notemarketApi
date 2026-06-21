import js from '@eslint/js'
import globals from 'globals'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // 2. Definimos nuestro entorno Node.js y las reglas de estilo de Standard
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // Cambia a 'commonjs' si usas require()
      globals: {
        ...globals.node, // Habilita variables como process, module, __dirname
      },
    },
    rules: {
      // --- REGLAS CLAVE DEL ESTILO STANDARD ---
      semi: ['error', 'never'], // Obligatorio: SIN puntos y coma (;)
      quotes: [
        'error',
        'single',
        {
          // Obligatorio: Comillas simples ('')
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      indent: [
        'error',
        2,
        {
          // Obligatorio: Sangría de 2 espacios
          SwitchCase: 1,
        },
      ],
      'comma-spacing': [
        'error',
        {
          // Espacio después de las comas (a, b)
          before: false,
          after: true,
        },
      ],
      'space-before-blocks': ['error', 'always'], // Espacio antes de abrir llaves: if () {}
      'space-before-function-paren': [
        'error',
        {
          // Espacio en funciones: function () {}
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'keyword-spacing': [
        'error',
        {
          // Espacio alrededor de palabras clave (if, else, return)
          before: true,
          after: true,
        },
      ],
      'key-spacing': [
        'error',
        {
          // Espacio en objetos { clave: valor }
          beforeColon: false,
          afterColon: true,
        },
      ],
      'no-trailing-spaces': 'error', // Prohíbe espacios vacíos al final de las líneas
      'eol-last': ['error', 'always'], // Obliga a dejar una línea vacía al final del archivo

      // --- LOGICA Y SINTAXIS ---
      eqeqeq: [
        'error',
        'always',
        {
          // Obliga a usar === y !== en lugar de == y !=
          null: 'ignore',
        },
      ],
      'no-unused-vars': [
        'warn',
        {
          // Advierte variables no usadas (ignora las que empiezan con _)
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off', // Permite usar console.log en Node.js
    },
  },
]
