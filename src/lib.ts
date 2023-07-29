// TODO: handle static method
// TODO: handle getter/setter
function addAccessor<T extends { new(...args: any[]): object }>(constructor: T, propertyName: string): void {
  const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, propertyName);
  if (descriptor && (descriptor.get || descriptor.set)) {
    const originalGetter = descriptor.get;
    const originalSetter = descriptor.set;

    const getter = () => {
      console.log(`Getting property ${propertyName}`);
      return originalGetter?.call(constructor);
    };

    const setter = (value: any) => {
      console.log(`Setting property ${propertyName} to ${value}`);
      originalSetter?.call(constructor, value);
    };

    Object.defineProperty(constructor.prototype, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}

export function Logger(prefix: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (<T extends { new(...args: any[]): object }>(constructor: T): T | void => {
    const propertyNames = Object.getOwnPropertyNames(constructor.prototype);
    propertyNames.forEach((propertyName) => {
      const originalMethod = constructor.prototype[propertyName];
      console.log(`key: ${propertyName}, type: ${typeof originalMethod}`);

      if (originalMethod === undefined) {
        const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, propertyName);
        console.log(descriptor);
      }

      if (typeof originalMethod === "function") {
        // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any
        constructor.prototype[propertyName] = (...args: any[]) => {
          console.log(`[${prefix}] Enter to method: ${propertyName}`);

          // Call the original method with the provided arguments
          const result = originalMethod.apply(constructor, args);

          console.log(`[${prefix}] Exit from method ${propertyName}`);

          return result;
        };
      }
    });
  });
}
