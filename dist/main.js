"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '../src' });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('app running ', process.env.PORT);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map