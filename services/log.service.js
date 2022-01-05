import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent(`
    ${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -h - справка
    -s [CITY] - установка города
    -t [API_KEY] - сохранение токена
    `)
  );
};

const printWeather = (response, icon) => {
  console.log(
    dedent(`
    ${chalk.bgBlue(' WEATHER ')} Погода в городе ${response.name}
    ${icon} ${response.weather[0].description}
    Температура: ${response.main.temp} (Ощущается как ${
      response.main.feels_like
    })
    Влажность: ${response.main.humidity}%
    Скорость ветра: ${response.wind.speed}
    `)
  );
};

export { printError, printSuccess, printHelp, printWeather };
