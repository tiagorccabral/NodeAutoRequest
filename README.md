# NodeAutoRequest
Código node para rodar script em servidor django de forma automática ao longo do dia

Para rodar esse código, é necessário possuir **node** instalado na máquina: https://nodejs.org/en/

Na pasta principal do projeto, basta digitar `node server.js`

Modificar as seguinte linhas para alterar o tempo entre as requisições, tempo de espera em caso de erro, e tempo de espera antes de lançar o erro, respectivamente: 

SLEEP_TIME = 15000;
ERROR_SLEEP_TIME = 60000;
MAX_TIMEOUT_WAIT = 15000;
