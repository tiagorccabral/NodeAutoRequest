const axios = require('axios');
const Secrets = require('./secrets');

// Times in ms
SLEEP_TIME = 15000;
ERROR_SLEEP_TIME = 60000;
MAX_TIMEOUT_WAIT = 15000;

const requestFunction = () => {

    console.log("Fazendo request...");
    axios.get(Secrets.RequestUrl,
        {timeout: MAX_TIMEOUT_WAIT}
    )
        .then(response => {
            console.log(response.data.message + ` Esperando ${SLEEP_TIME/1000} segundo(s).`);
            setTimeout(requestFunction, SLEEP_TIME);
        })
        .catch(err => {
            console.log(`Erro detectado. Começando novamente em ${ERROR_SLEEP_TIME} segundos`);
            console.log(err);
            setTimeout(requestFunction, ERROR_SLEEP_TIME);
        })
};

requestFunction();

