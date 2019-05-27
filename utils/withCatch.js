const withCatch = fn => fn.then(data => [null, data]).catch(err => [err]);

export default withCatch;
