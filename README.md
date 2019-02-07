# Desafio Ingresso.com

## CORS
A API oferecida para buscar os filmes não possui cabeçalho que permita acesso de outras origens, ou seja, um protocolo ou porta diferente dos utilizados no servidor é bloqueado de acessar as informações. Isso pode ser contornado instalando um add-on no browser que desabilita a política de mesma origem nas requisições, **o que é extremamente perigoso** e deve ser usado apenas em casos de estudo. 

A resolução ideal do CORS para APIs que são disponibilizadas na web (como deveria ser esse), é de definir o cabeçalho `Access-Control-Allow-Origin: *` e, obrigatoriamente, `Access-Control-Allow-Credentials: false`, que basicamente está dizendo que qualquer um pode visualizar aquele conteúdo. Mas, isso é feito pela parte do servidor e não há workarounds mais seguros do que os plugins oferecidos, infelizmente.

### Plugins de CORS necessário para abrir o projeto
Baixe o respectivo para seu navegador (**e lembre-se de desativar quando não estiver mais acessando!**):

- **Firefox**: [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/)
- **Chrome**: [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
- **Opera**: [CORS Toggle](https://addons.opera.com/en/extensions/details/cors-toggle/)
- **Safari**: sem add-on, abra o Developer Menu e selecione `Disable Cross-Origin Restrictions`

## Recursos utilizados
- Angular 6.1.10
- Typescript 2.8.4
- Bootstrap 4.2.1
- [Ngx Pipes](https://www.npmjs.com/package/ngx-pipes)
- FontAwesome 5.7.1

## Licença
Este projeto está licenciado pela licença MIT - leia [LICENSE.md](https://github.com/majorsaaam/Desafio-Ingresso/blob/master/LICENSE.md) para mais informações.