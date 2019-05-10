
export class Point {
    constructor(public x: number,public y: number) {
        this.x = x;
        this.y = y;
    }
}

/** Any type that can construct *something*. */
export type Constructable = new (...args: any[]) => {};

export function Timestamped<BC extends Constructable>(Base: BC) {
    return class extends Base {
        timestamp = new Date();
    };
}

/////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {

            let descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
            Object.defineProperty(derivedCtor.prototype, name, (<PropertyDescriptor>descriptor));
        });
    });
}

// Disposable Mixin
export class Disposable {
    isDisposed: boolean = false;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
export class Activatable {
    isActive: boolean = false;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

export class SmartObject implements Disposable, Activatable {
    name : string = "smart object";
    // Disposable
    isDisposed: boolean = false;
    dispose!: () => void;
    // Activatable
    isActive: boolean = false;
    activate!: () => void;
    deactivate!: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);