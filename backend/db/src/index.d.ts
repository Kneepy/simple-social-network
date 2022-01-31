export type FindOneParameters<T> = {
    [P in keyof T]: FindOneParameters<T[P]>
}

export interface FindOneOptions<Entity = any> {
    relations?: string[]
}
