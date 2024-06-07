import type {IInventoryTransaction} from "~/interfaces/IInventoryTransaction";

export interface IInventory {
  id: string | null;
  quantity: number;
  transactions: IInventoryTransaction[];
}
