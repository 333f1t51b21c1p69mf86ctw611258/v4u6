import { BaseEntity } from './../../shared';

export class Todo implements BaseEntity {
    constructor(
        public id?: string,
        public text?: string,
        public done?: boolean,
    ) {
        this.done = false;
    }
}
