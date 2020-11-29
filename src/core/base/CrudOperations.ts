export default interface CrudOperations<M> {
  save: (model: M) => Promise<M>;
  saveAll: (models: M[]) => Promise<M[]>;
  find: (key: string, value: any) => Promise<M[]>;
  exists: (key: string, value: any) => Promise<boolean>;
  count: (key: string, value: any) => Promise<number>;
  replace: (key: string, value: any, model: M) => Promise<M>;
  delete: (key: string, value: any) => Promise<number>;
}
