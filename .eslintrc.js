module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    semi: 0,
    'import/no-unresolved': 'off', //require.resolve동작에 정의 된대로 로컬 파일 시스템의 모듈로 해석 할 수 있도록 한다
    'comma-dangle': 'off', //맨 뒤에 붙은 쉼표를 허용을 하지 않는다
    'no-new': 0, //new 키워드를 이용해 생성자를 호출했다면 변수에 담아야 한다
    indent: ['error', 2], //indent를 2로 설정한다는 것으며, 2가 아닌 경우 error를 발생시키라는 의미
    'import/extensions': 'off', //확장자 명을 명시할 것인지에 대한 설정
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
