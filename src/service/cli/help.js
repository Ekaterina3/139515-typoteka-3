'use strict';

const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    const message = `
        Программа запускает http-сервер и формирует файл с данными для API.

        Гайд:

        service.js ${chalk.blue(`<command>`)}

        Команды:
        ${chalk.blue(`--version`)}: выводит номер версии
        ${chalk.blue(`--help`)}: печатает этот текст
        ${chalk.blue(`--generate <count>`)}: формирует файл mocks.json
        `;
    console.log(message);
  }
};
