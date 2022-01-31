import { ClientProvider } from "@nestjs/microservices"
import { ClientsModuleOptionsFactory } from "@nestjs/microservices/module/interfaces/clients-module.interface"
export declare class FilesMicroserviceModule implements ClientsModuleOptionsFactory {
    createClientOptions(): Promise<ClientProvider> | ClientProvider
}
