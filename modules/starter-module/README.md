## Starter Module

```
import {Starter} from 'starter-module';

const starterModule = new Starter('ws://localhost:8545', options);

starterModule.starter('0x0....').then(function(balance) => {
    console.log(balance);
});
``` 