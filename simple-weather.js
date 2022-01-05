#!/usr/bin/env node
import { getArgs } from './helpers/args.helper.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token);
    printSuccess('Токен сохранён');
  } catch (e) {
    printError(e.message);
  }
};

const init = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    // TODO: Сохранить город
  }

  if (args.t) {
    return saveToken(args.t);
  }

  // TODO: Вывести погоду
};

init();
