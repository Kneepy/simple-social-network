import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';
import {Payload, RpcException} from "@nestjs/microservices";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";

@Injectable()
export class ValidationPipe implements PipeTransform{
    async transform(@Payload() payload, {metatype}: ArgumentMetadata){
        if(!metatype || !this.toValidate(metatype)){
            return payload
        }
        const object = plainToClass(metatype, payload)
        const errors = await validate(object)
        if(errors.length){
            throw new RpcException(errors)
        }
        return payload
    }

    private toValidate(metatype: Function): boolean{
        const types: Function[] = [String, Boolean, Number, Array, Object]
        return !types.includes(metatype)
    }
}
