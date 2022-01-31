"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = exports.FILES_MICROSERVICE_MODULE = exports.DB_MICROSERVICE_MODULE = void 0;
exports.DB_MICROSERVICE_MODULE = "DB_MICROSERVICE_MODULE";
exports.FILES_MICROSERVICE_MODULE = "FILES_MICROSERVICE_MODULE";
exports.EVENTS = {
    DIALOG: {
        GET: "dialog.get",
        GET_RESULT: "dialog.get.result",
        CREATE: "dialog.create",
        CREATE_RESULT: "dialog.create.result",
        UPDATE: {
            ADD_USER: "dialog.update.add_user",
        },
        UPDATE_RESULT: "dialog.update.result",
        MESSAGE: {
            CREATE: "dialog.message.create",
            CREATE_RESULT: "dialog.message.create.result",
            UPDATE: "dialog.message.update",
            UPDATE_RESULT: "dialog.message.update.result"
        }
    },
    USER: {
        SUBSCRIBE: "user.subscribe",
        SUBSCRIBE_RESULT: "user.subscribe.result"
    },
    BOARD: {
        ADD_POST: "board.add.post",
        ADD_POST_RESULT: "board.add.post.result"
    },
    POST: {
        ADD_COMMENT: "post.add.comment",
        ADD_COMMENT_RESULT: "post.add.comment.result",
        ADD_ANSWER: "post.add.answer",
        ADD_ANSWER_RESULT: "post.add.answer.result"
    },
    ROOM: {
        POST: {
            CONNECT: "room.post.connect",
            DISCONNECT: "room.post.disconnect"
        },
        USER: {
            CONNECT: "room.user.connect",
            DISCONNECT: "room.user.disconnect"
        }
    }
};
//# sourceMappingURL=app.constants.js.map