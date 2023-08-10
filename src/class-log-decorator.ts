import { Logger } from "./lib.js";

// // Class decorator
// function logMethodCalls<T extends { new(...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     constructor(...args: any[]) {
//       super(...args);
//     }

//     // Overriding each method of the class
//     // This will log the method call before invoking the original method
//     // You can customize the logging behavior here
//     // For simplicity, we'll just log the method name and arguments
//     protected logMethodCall(methodName: string, args: any[]) {
//       console.log(`Calling ${methodName} with arguments: ${JSON.stringify(args)}`);
//     }

//     // Override each method dynamically and apply logging
//     // This code assumes that all methods of the class are public (no private or protected methods)
//     // Modify accordingly if you have non-public methods
//     protected applyMethodLogging() {
//       const methodNames = Object.getOwnPropertyNames(this);

//       for (const methodName of methodNames) {
//         const method = <Function>(this[methodName as keyof typeof this]);
//         // TODO: use static assertion to verify it's a function
//         if (typeof method === "function" && methodName !== "constructor") {
//           (<Function>this[methodName as keyof typeof this]) = (...args: any[]) => {
//             this.logMethodCall(methodName, args);
//             return method.apply(this, args);
//           };
//         }
//       }
//     }
//   };
// }

// // Applying the class decorator to a sample class
// @logMethodCalls
// class SampleClass {
//   constructor(private name: string) {}

//   greet(message: string) {
//     console.log(`[${this.name}] says: ${message}`);
//   }

//   calculateSum(a: number, b: number) {
//     return a + b;
//   }
// }

// // Using the decorated class
// const sampleInstance = new SampleClass("Sample");
// sampleInstance.greet("Hello, world!");
// const sum = sampleInstance.calculateSum(3, 5);
// console.log("Sum:", sum);

// // Method decorator function
// function logMethodCall(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.log(`Calling method: ${methodName} with arguments: ${JSON.stringify(args)}`);
//     const result = originalMethod.apply(this, args);
//     console.log(`Method ${methodName} returned: ${JSON.stringify(result)}`);
//     return result;
//   };

//   return descriptor;
// }

// // Sample class with method decorator
// class SampleClass {
//   constructor(private data: number) {}

//   // Applying method decorator to each method in this class
//   @logMethodCall
//   add(a: number, b: number): number {
//     return a + b + this.data;
//   }

//   @logMethodCall
//   subtract(a: number, b: number): number {
//     return a - b - this.data;
//   }
// }

// // Usage
// const sampleInstance = new SampleClass(10);
// console.log(sampleInstance.add(5, 3));
// console.log(sampleInstance.subtract(8, 2));

// // Class decorator function
// function logMethodCalls(target: Function) {
//   // Get the property names of the target class
//   const propertyNames = Object.getOwnPropertyNames(target.prototype);

//   // Loop through each property name
//   for (const propertyName of propertyNames) {
//     const originalMethod = target.prototype[propertyName];

//     // Check if the property is a method
//     if (typeof originalMethod === "function") {
//       // Create a wrapper function for the original method
//       target.prototype[propertyName] = (...args: any[]) => {
//         console.log(`Calling method: ${propertyName}`);

//         // Call the original method with the provided arguments
//         const result = originalMethod.apply(target, args);

//         console.log(`Method ${propertyName} returned: ${result}`);
//         return result;
//       };
//     }
//   }
// }

// // Applying the class decorator
// @logMethodCalls
@Logger("DEBUG")
class SampleClass {
  someProperty: string;

  constructor(prop: string) {
    this.someProperty = prop;
  }

  set Some(val: string) {
    this.someProperty = val;
  }

  get Some() {
    return (this.someProperty);
  }

  method(str: string): void {
    console.log(`Before: ${this.someProperty}`);
    this.someProperty = str;
    console.log(`After: ${this.someProperty}`);
  }

  static someStaticMethod() {
    console.log("some static method");
  }

  // eslint-disable-next-line class-methods-use-this
  someMethod(a: number, b: number): number {
    return a + b;
  }

  // eslint-disable-next-line class-methods-use-this
  anotherMethod(str: string): string {
    return `Hello, ${str}!`;
  }
}

// Usage of the decorated class
const sampleInstance = new SampleClass("Sample Property");
sampleInstance.method("========================");
console.log(sampleInstance.someMethod(2, 3)); // Output will log method call details and return 5
console.log(sampleInstance.anotherMethod("John")); // Output will log method call details and return 'Hello, John!'

// function logMethodCall(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   console.log(`Calling method ${propertyKey}`);
//   return descriptor;
// }

// @logMethodCall
// class MyClass {
//   constructor() {}

//   sayHello() {
//     console.log("Hello, world!");
//   }

//   sayGoodbye() {
//     console.log("Goodbye, world!");
//   }
// }

// const myClass = new MyClass();
// myClass.sayHello(); // "Calling method sayHello"
// myClass.sayGoodbye(); // "Calling method sayGoodbye"

// function logMethodCalls(target: any) {
//   for (const key in target.prototype) {
//     if (typeof target.prototype[key] === "function") {
//       target.prototype[key] = (...args: any[]) => {
//         console.log("Calling method", key);
//         return target.prototype[key](...args);
//       };
//     }
//   }
// }

// @logMethodCalls
// class MyClass {
//   constructor(public name: string) {}

//   sayHello() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

// const myClass = new MyClass("Bard");
// console.log(myClass.sayHello()); // "Calling method sayHello"
