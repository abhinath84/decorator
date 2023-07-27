// Basic sample

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Sealed<T extends { new(...args: any[]): object }>(constructor: T) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function reportableClassDecorator<T extends { new(...args: any[]): object }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
@Sealed
class BugReport {
  type = "report";

  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
