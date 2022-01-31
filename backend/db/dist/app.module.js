"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const posts_module_1 = require("./modules/posts/posts.module");
const users_module_1 = require("./modules/users/users.module");
const boards_module_1 = require("./modules/boards/boards.module");
const dialogs_module_1 = require("./modules/dialogs/dialogs.module");
const messages_module_1 = require("./modules/messages/messages.module");
const comments_module_1 = require("./modules/comments/comments.module");
const likes_module_1 = require("./modules/likes/likes.module");
const files_module_1 = require("./modules/files/files.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            boards_module_1.BoardsModule,
            posts_module_1.PostsModule,
            users_module_1.UsersModule,
            dialogs_module_1.DialogsModule,
            messages_module_1.MessagesModule,
            comments_module_1.CommentsModule,
            likes_module_1.LikesModule,
            files_module_1.FilesModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map