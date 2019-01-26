## ENS Call Module

```
import {EnsCall} from 'web3-module-ens-call';

const ensCall = new EnsCall('http://localhost:7545' {});

ensCall.call({to: 'web3.eth', ...}).then(function(response) => {
    console.log(response);
});
``` 