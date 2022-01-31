import { FindOneOptions } from "../../index"
export interface InjectableService {
    findOne(params: any, options: FindOneOptions): Promise<any>
    errors: {
        notFound: string
        alreadyExists?: string
    }
}
