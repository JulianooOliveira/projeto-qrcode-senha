import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/schema-main.js";
import createQrcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(promptSchemaMain, async (err, result) => {
        if (err) return console.error;
        if (result.select == 1) await createQrcode();
        if (result.select == 2) await createPassword();
    });

    prompt.start();
}

main();