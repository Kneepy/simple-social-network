"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
(async () => {
    const app = await core_1.NestFactory.create(app_module_1.ApplicationModule);
    app.enableCors();
    (0, class_validator_1.useContainer)(app.select(app_module_1.ApplicationModule), { fallbackOnErrors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ validateCustomDecorators: true }));
    await app.listen(5000);
})();
//# sourceMappingURL=main.js.map