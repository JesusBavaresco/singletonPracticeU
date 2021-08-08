
import logger from './logger.js'

function secondRun() {
    logger.printCount();
    logger.log('Lorem ipsum dolor sit amen...');
    logger.printCount();
}
export {
    secondRun
};