// here are the main exports

const lowercase_a = 97;
const lowercase_z = 122;

const UPPERCASE_A = 65;
const UPPERCASE_Z = 90

export function caesar(input: string, offset: number): string {
  let cipher = '';
  Array.prototype.forEach.call(input, (l: string) => {
    let charcode = l.charCodeAt(0);

    if (lowercase_a <= charcode && charcode <= lowercase_z) {

      charcode += offset;

      while (charcode > lowercase_z) {
        charcode = (lowercase_a - 1) + (charcode - lowercase_z);
      }

      cipher += String.fromCharCode(charcode);
    } else if (UPPERCASE_A <= charcode && charcode <= UPPERCASE_Z) {

      charcode += offset;

      while (charcode > UPPERCASE_Z) {
        charcode = (UPPERCASE_A - 1) + (charcode - UPPERCASE_Z);
      }

      cipher += String.fromCharCode(charcode);

    } else {
      cipher += l;
    }

  });

  return cipher;
}
