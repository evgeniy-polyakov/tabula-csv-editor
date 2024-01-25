import {Dispatch, SetStateAction, useState} from "react";

export type StateAssessor<S> = [S, Dispatch<SetStateAction<S>>] & {
    (value: S): void;
    readonly value: S;
    /**
     * @deprecated
     */
    get(): S;
    /**
     * @deprecated
     * @param value
     */
    set(value: S): void;
};

export function useStateAccessor<S>(initialState: S | (() => S)): StateAssessor<S> {
    const [value, setter] = useState(initialState);
    const accessor = function (value: S) {
        setter(value);
    } as any;
    accessor.get = () => value;
    accessor.set = (value: S) => setter(value);
    Object.defineProperty(accessor, "value", {value, writable: false, enumerable: false, configurable: false});
    Object.defineProperty(accessor, "0", {value, writable: false, enumerable: false, configurable: false});
    Object.defineProperty(accessor, "1", {value: setter, writable: false, enumerable: false, configurable: false});
    Object.defineProperty(accessor, Symbol.iterator, {
        writable: false, enumerable: false, configurable: false,
        value: function* () {
            yield value;
            yield setter;
        }
    });
    return accessor;
}