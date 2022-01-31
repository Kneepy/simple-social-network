import { ArgumentsHost, ExceptionFilter } from "@nestjs/common"
import { HttpAdapterHost } from "@nestjs/core"
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly httpAdapterHost
    constructor(httpAdapterHost: HttpAdapterHost)
    catch(exception: any, ctx: ArgumentsHost): void
}
