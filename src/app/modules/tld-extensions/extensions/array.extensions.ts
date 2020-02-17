// 1. make sure ts.config contains this config under "paths":
//
//   "@extensions/*" : [
//     "node_modules/@taldor-ltd/tld-angular-fnd/app/extensions/*.extensions.ts"
//   ]

// 2. make sure to  import '@extensions/array' in app.component.ts

declare global {
    interface Array<T> {
        // add extension methods declarations here:
        containsElements(): boolean;
        any(predicate?: Function): boolean;
        firstOrDefault(predicate: Function): T;
        first(predicate: Function): T;
        sum(predicate: Function): number;
        where(predicate: Function): T[];
        min(predicate: Function): number;
        max(predicate: Function): number;
        orderBy(predicate: Function): T[];
        orderByDesc(predicate: Function): T[];
        average(predicate: Function): number;
        select(predicate: Function): any[];
        groupBy(predicate: Function): any[];
        count(predicate: Function): number;
        take(number: number): T[];
        split(perdicate: (element: T) => boolean): [T[], T[]];
    }
}
// add extension method implementations into the prototype here:
Array.prototype.containsElements = function() {
    if (this.length > 0) {
        return true;
    } else {
        return false;
    }
};

Array.prototype.any = function(predicate: Function = null) {

    if (predicate === null) {
        if (this.length > 0) {
            return true;
        }
        return false;
    } else {
        return this.reduce((accumulator, currentValue) => {
            if (!accumulator && predicate(currentValue)) {
                accumulator = currentValue;
            }
            return true;
        }, false);
    }
};

// add extension method implementations into the prototype here:
Array.prototype.firstOrDefault = function(predicate: Function) {

    return this.reduce((accumulator, currentValue) => {
        if (!accumulator && predicate(currentValue)) {
            accumulator = currentValue;
        }
        return accumulator;
    }, null);
};

// add extension method implementations into the prototype here:
Array.prototype.first = function(predicate: Function) {
    const element = this.reduce((accumulator, currentValue) => {
        if (!accumulator && predicate(currentValue)) {
            accumulator = currentValue;
        }
        return accumulator;
    }, null);

    if (element === null) {
        throw new Error('Sequence contains no elements');
    }
    return element;
};

Array.prototype.sum = function(predicate: Function) {

    let sum: number = 0;
    sum = this.reduce((accumulator, currentValue) => accumulator + predicate(currentValue), 0);

    return sum;

};

Array.prototype.where = function(predicate: Function) {

    return this.filter(currentValue => predicate(currentValue));

};


Array.prototype.min = function(predicate: Function) {

    if (!this || this.length === 0) {
        return undefined;
    }

    let minValue: number;
    minValue = this.reduce((accumulator, currentValue) => Math.min(accumulator, predicate(currentValue)), null);

    return minValue;

};

Array.prototype.max = function(predicate: Function) {

    if (!this || this.length === 0) {
        return undefined;
    }

    let maxValue: number;
    maxValue = this.reduce((accumulator, currentValue) => Math.max(accumulator, predicate(currentValue)), null);

    return maxValue;

};


Array.prototype.average = function(predicate: Function) {

    let avg: number = 0;
    avg = this.reduce((accumulator, currentValue) => accumulator + predicate(currentValue), 0) / this.length;

    return avg;

};

Array.prototype.orderBy = function(predicate: Function) {

    return this.sort((a, b) => {
        if (predicate(a) > predicate(b)) {
            return 1;
        }
        if (predicate(a) < predicate(b)) {
            return -1;
        }
        return 0;
    });

};

Array.prototype.orderByDesc = function(predicate: Function) {

    return this.sort((a, b) => {
        if (predicate(a) > predicate(b)) {
            return -1;
        }
        if (predicate(a) < predicate(b)) {
            return 1;
        }
        return 0;
    });
};

Array.prototype.take = function(top: number) {

    return this.filter((u, i) => i < top);
};

Array.prototype.select = function(predicate: Function) {

    return this.map(currentValue => predicate(currentValue));

};

Array.prototype.count = function(predicate: Function) {

    return (this.filter(currentValue => predicate(currentValue))).length;

};

// distinct?
// const uniqueNames = Array.from(new Set(this.map((currentValue: any) => predicate(currentValue))));

Array.prototype.split = function(predicate: Function) {
    return this.reduce(([pass, fail], element) => {
        return predicate(element)
            ? [[...pass, element], fail]
            : [pass, [...fail, element]];
    }, [[], []]);
};

Array.prototype.groupBy = function(predicate: Function) {
    let group: any;
    return this.reduce((groupedList: any[], element: any) => {
        group = groupedList.find(x => x.key === predicate(element));
        if (!group) {
            groupedList.push({
                'key': predicate(element),
                'values': [element]
            });
        } else {
            group.values.push(element);
        }
        return groupedList;
    }, []);

};

export {};
