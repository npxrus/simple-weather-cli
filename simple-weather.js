#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const init = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.h) {
    // TODO: Вывести help
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
