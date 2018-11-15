console.log('Log from /imports/utils.js');

export let greetUser = function () {
  return 'Hello user!';  
};

// named export
export let name = 'Kaden Sungbin Cho';

let myDefault = 'Some default value';
export default myDefault;
// default export
// export default 'Default val';
