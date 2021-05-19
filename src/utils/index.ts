export const objectMap = <ValueType, MappedValueType>(
  object: { [key: string]: ValueType },
  callback: (value: ValueType, key?: string, index?: number) => MappedValueType
) =>
  Object.fromEntries(
    Object.entries(object).map(([k, v], i) => [k, callback(v, k, i)])
  );
