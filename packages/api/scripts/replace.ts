import { readFile, writeFile } from 'fs';

(async () => {
  const fileList = [
    'Service',
    'IpService'
  ]
  fileList.forEach(file => {
    readFile(`./src/tg/services/${file}.ts`, 'utf-8', function (err, contents) {
      if (err) {
        console.log(err);
        return;
      }

      const replaced = contents.
        replace(/payload\?\:/g, 'Payload?:').
        replace(/statusCode\?\: number/g, 'StatusCode?: number').
        replace(/message\?: string;/g, 'Message?: string;');


      writeFile(`./src/tg/services/${file}.ts`, replaced, 'utf-8', function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`api ${file}.ts replace success`);
        }
      });
    });
  })

})();
