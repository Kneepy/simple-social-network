export declare const DB_MICROSERVICE_MODULE = "DB_MICROSERVICE_MODULE";
export declare const FILES_MICROSERVICE_MODULE = "FILES_MICROSERVICE_MODULE";
export declare const EVENTS: {
    DIALOG: {
        GET: string;
        GET_RESULT: string;
        CREATE: string;
        CREATE_RESULT: string;
        UPDATE: {
            ADD_USER: string;
        };
        UPDATE_RESULT: string;
        MESSAGE: {
            CREATE: string;
            CREATE_RESULT: string;
            UPDATE: string;
            UPDATE_RESULT: string;
        };
    };
    USER: {
        SUBSCRIBE: string;
        SUBSCRIBE_RESULT: string;
    };
    BOARD: {
        ADD_POST: string;
        ADD_POST_RESULT: string;
    };
    POST: {
        ADD_COMMENT: string;
        ADD_COMMENT_RESULT: string;
        ADD_ANSWER: string;
        ADD_ANSWER_RESULT: string;
    };
    ROOM: {
        POST: {
            CONNECT: string;
            DISCONNECT: string;
        };
        USER: {
            CONNECT: string;
            DISCONNECT: string;
        };
    };
};
