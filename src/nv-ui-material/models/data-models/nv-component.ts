export class NvComponent {

    constructor(
        public id: number,
        public type: NvComponentType,
        public description: string) { }
}


export enum NvComponentType {
    Button,
    ProgressCircle,
    Avatar,
    Tag,
    ItemPicker,
    Table

}