declare global {
    interface Function {
        // callDelayed(previousThis: any, ...args: any): any;
        // callDelayedTimout(previousThis: any, timeout: number, ...args: any): any;
        applyDelayed(previousThis: any, args?: any[]): any;
        applyDelayedTimeout(previousThis: any, timeout: number, args?: any[]): any;
    }
}
// Function.prototype.callDelayed = function(previousThis: any, ...args: any) {

//     if (typeof this !== 'function') {
//         throw new Error(this + 'cannot be bound as it\'s not callable');
//     }
//     const boundTargetFunction = this;
//     setTimeout(() => {
//         boundTargetFunction.call(previousThis, ...args);
//     }, 0);
// };

// Function.prototype.callDelayedTimout = function(previousThis: any, timeout: number, ...args: any) {
//     if (typeof this !== 'function') {
//         throw new Error(this + 'cannot be bound as it\'s not callable');
//     }
//     const boundTargetFunction = this;
//     setTimeout(() => {
//         boundTargetFunction.call(previousThis, ...args);
//     }, timeout);
// };


Function.prototype['applyDelayed'] = function(previousThis: any,  args?: any[]) {

    if (typeof this !== 'function') {
        throw new Error(this + 'cannot be bound as it\'s not callable');
    }
    const boundTargetFunction = this;
    setTimeout(() => {
        boundTargetFunction.apply(previousThis, args);
    }, 0);
};

Function.prototype['applyDelayedTimeout'] = function(previousThis: any, timeout: number, args?: any[]) {
    if (typeof this !== 'function') {
        throw new Error(this + 'cannot be bound as it\'s not callable');
    }
    const boundTargetFunction = this;
    setTimeout(() => {
        boundTargetFunction.apply(previousThis, args);
    }, timeout);
};

export {};
