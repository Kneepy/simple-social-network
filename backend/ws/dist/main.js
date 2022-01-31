"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
(async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(5002);
})();
//# sourceMappingURL=main.js.map