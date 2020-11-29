export default interface CrudOperations<M> {
  save: (model: M) => Promise<M>;
  saveAll: (models: M[]) => Promise<M[]>;
  findAll: (key: string, value: any) => Promise<M[]>;
  findOne: (key: string, value: any) => Promise<M>;
  exists: (key: string, value: any) => Promise<boolean>;
  count: (key: string, value: any) => Promise<number>;
  replace: (key: string, value: any, model: M) => Promise<M>;
  deleteAll: (key: string, value: any) => Promise<number>;
  deleteOne: (key: string, value: any) => Promise<M>;
}
