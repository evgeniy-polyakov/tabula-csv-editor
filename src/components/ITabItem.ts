import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ITabItem {
    readonly key: string;
    readonly name?: string;
    readonly icon?: IconProp;
    readonly selected: boolean;
    readonly editable?: boolean;
    readonly removable?: boolean;
}