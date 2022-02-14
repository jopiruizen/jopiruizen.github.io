export function logInfo (...args) {
    const env = process.env.REACT_APP_ENV_VAR;
    if (env === 'prod') {
        return;
    }
    console.log('');
    console.log('');
    console.log(...args);
}

export function logWarn (...args) {
    const env = process.env.REACT_APP_ENV_VAR;
    if (env === 'prod') {
        return;
    }
    console.warn(...args);
}

export function logError (...args) {
    const env = process.env.REACT_APP_ENV_VAR;
    if (env === 'prod') {
        return;
    }
    console.error(...args);
}
