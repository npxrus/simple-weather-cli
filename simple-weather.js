#!/usr/bin/env node
import { getArgs } from './helpers/args.helper.js';
import { printHelp } from './services/log.service.js';

const init = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    // TODO: Сохранить город
  }

  if (args.t) {
    // TODO: Сохранить токен
  }

  // TODO: Вывести погоду
};

init();
