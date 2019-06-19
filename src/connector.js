import SerialPort from 'serialport';
import config from './config';

const port = new SerialPort(config.serialPort, {
  baudRate: config.baudRate
});

export default function write(text) {
  port.write(text, error => {
    console.log(`Sent text '${text}' to counter`);
    throw new Error(error);
  });
}
