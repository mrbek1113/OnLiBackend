"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        prefix: '/uploads/',
    });
<<<<<<< HEAD
    app.enableCors({
        origin: ['http://localhost:5173', 'https://vercel.com/otajanov04/on-li-frontend-project/HWyPVsXLJQFkwWTdw9TGxseuKK12'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map
=======
const cors = require('cors');
app.use(cors({
  origin: 'https://on-li-frontend-project.vercel.app',  // Frontend domeni
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map
>>>>>>> c3750e2741cf0af4aeb2ea7a47b5656720eab7d4
