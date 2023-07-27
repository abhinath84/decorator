// Decorator Factory
export function Logger(prefix: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (<T extends { new(...args: any[]): object }>(constructor: T) => {
    const propertyNames = Object.getOwnPropertyNames(constructor.prototype);
    propertyNames.forEach((propertyName) => {
      const originalMethod = constructor.prototype[propertyName];
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
