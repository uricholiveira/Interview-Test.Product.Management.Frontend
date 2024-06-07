import type {ICategory} from "~/interfaces/ICategory";
import type {IInventory} from "~/interfaces/IInventory";

export interface IProduct {
  id: string | null;
  name: string;
  category: ICategory;
  inventory: IInventory;
}
