| NOTE:            |
| :--------------- |
| Work in progress |

<div align="center">
  <h1>TS Decorator</h1>
  <p>Example of Typescript Decorator</p>
</div>

**Table of Contents**

- [syntax](#syntax)

## syntax

| What you’re decorating        | `experimentalDecorators`                                                                                                     | TS 5.0                                       |
| :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| Class                         | (Constructor: {new(...any[]) => any}) => any<br>OR<br><T extends { new(...args: any[]): object }>(constructor: T): T \| void | (Constructor: {new(...any[]) => any}) => any |
| Method                        | (classPrototype: {}, methodName: string, descriptor: PropertyDescriptor) => any                                              |
| Static method                 | (Constructor: {new(...any[]) => any}, methodName: string, descriptor: PropertyDescriptor) => any                             |
| Method parameter              | (classPrototype: {}, paramName: string, index: number) => void                                                               |
| Static method parameter       | (Constructor: {new(...any[]) => any}, paramName: string, index: number) => void                                              |
| Property                      | (classPrototype: {}, propertyName: string) => any                                                                            |
| Static property               | (Constructor: {new(...any[]) => any}, propertyName: string) => any                                                           |
| Property getter/setter        | (classPrototype: {}, propertyName: string, descriptor: PropertyDescriptor) => any                                            |
| Static property getter/setter | (Constructor: {new(...any[]) => any}, propertyName: string, descriptor: PropertyDescriptor) => any                           |
