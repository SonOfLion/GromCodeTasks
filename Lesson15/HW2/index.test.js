import { createLogger } from './index.js';

it('should shome message warn', () => {
    let err = createLogger;
    err.error('Error 303!');

    expect(err).toEqual('Error 303!');
});