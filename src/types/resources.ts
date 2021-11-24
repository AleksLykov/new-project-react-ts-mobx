import { DatetimeBlock } from './common';

declare namespace Resource {
  interface CoreResource {
    addressFull: string;
    name: string;
    organizationId: number;
  }

  interface BaseItem extends CoreResource, DatetimeBlock {
    id: number;
    version: number;
  }

  interface Item extends BaseItem {
    organizationName?: string;
  }

  interface Comment {
    comment: string;
    createdAt: string;
    updatedAt: string;
  }

  interface RqstCreateItem extends CoreResource {}

  interface RqstUpdateItem extends CoreResource {}
}

export default Resource;
