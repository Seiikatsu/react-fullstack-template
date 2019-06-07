type MODE = 'development' | 'staging' | 'production';

const MODES = {
    DEV: 'development',
    STAGING: 'staging',
    PROD: 'production'
};

// @ts-ignore process is defined
const APPLICATION_MODE = process.env.NODE_ENV;

const isDevelopmentMode = (): boolean => MODES.DEV === APPLICATION_MODE;
const isStagingMode = (): boolean => MODES.STAGING === APPLICATION_MODE;
const isProductionMode = (): boolean => MODES.PROD === APPLICATION_MODE;

// TODO specify type
let applicationMode: MODE;
const getCurrentMode = (): MODE | undefined => {
    if (!applicationMode) {
        // TODO get rid of this message!
        // @ts-ignore process is defined
        const env = process.env.NODE_ENV;
        if ('development' === env || 'staging' === env || 'production' === env) {
            applicationMode = env;
        } else {
            throw new Error('Invalid environment!');
        }
    }
    return applicationMode;
};

export {
    MODES,
    isDevelopmentMode,
    isStagingMode,
    isProductionMode,
    getCurrentMode
}
