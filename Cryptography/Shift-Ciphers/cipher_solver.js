const alphabet = "abcdefghijklmnopqrstuvwxyz";

function rotate(text, shift) {
    let result = "";

    for (let char of text.toLowerCase()) {
        const index = alphabet.indexOf(char);

        if (index === -1) {
            result += char;
            continue;
        }

        result += alphabet[(index + shift) % 26];
    }

    return result;
}

const ciphertext = "uryyb";

for (let i = 1; i < 26; i++) {
    console.log(`Shift ${i}: ${rotate(ciphertext, i)}`);
}