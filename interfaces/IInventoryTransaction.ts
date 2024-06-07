export interface IInventoryTransaction {
  id: string | null;
  inventoryId: string | null;
  movementType: 1 | 2 | 3
}
