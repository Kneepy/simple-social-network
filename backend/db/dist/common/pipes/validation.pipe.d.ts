import { ArgumentMetadata, PipeTransform } from "@nestjs/common"
export declare class ValidationPipe implements PipeTransform {
    transform(payload: any, { metatype }: ArgumentMetadata): Promise<any>
    private toValidate
}
