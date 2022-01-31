import { FindOneOptions } from "../../index"
import { NestInterceptor, Type } from "@nestjs/common"
import { DefaultValues } from "../interfaces"
export declare function createSearchInterceptor<Entity = any>(
    defaultValues: DefaultValues,
    service: any,
    options?: FindOneOptions<Entity>,
): Type<NestInterceptor>
