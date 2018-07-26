import axios from 'axios';
import {RequestUrl} from "./secrets";

// Times in ms
SLEEP_TIME = 3000;
ERROR_SLEEP_TIME = 60000;
MAX_TIMEOUT_WAIT = 15000;

const requestFunction = () => {

    axios.get(RequestUrl
        ,
        {timeout: MAX_TIMEOUT_WAIT}
    )
        .then(response => {
            console.log(response.data.message);
            console.log(`Esperando ${SLEEP_TIME/1000} segundo(s).`);
            setTimeout(requestFunction, SLEEP_TIME);
        })
        .catch(err => {
            console.log(`Erro detectado. Começando novamente em ${ERROR_SLEEP_TIME} segundos`);
            console.log(err);
            setTimeout(requestFunction, ERROR_SLEEP_TIME);
        })
};

requestFunction();

