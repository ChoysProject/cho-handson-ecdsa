import { uint8ArrayToUint32 } from '../utils/index.js';
import esMain from 'es-main';

// Insecure RNG
//import { random, randomBytes } from '../utils/index.js';
//random.seed(1234);

// Secure RNG
import { randomBytes } from 'crypto';

export { randomBytes };

if (esMain(import.meta)) {
  const bytes = randomBytes(4);
  const number = uint8ArrayToUint32(bytes);

  console.log(`random: ${number}`);
}
