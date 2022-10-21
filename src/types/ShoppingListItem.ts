export interface ShoppingListItem {
  id: string;
  name: string;
  checked: boolean;
}

export type EditShoppingListItemCheckbox = Omit<ShoppingListItem, "name">;

export type EditShoppingListItemName = Omit<ShoppingListItem, "checked">;

export type EditableShoppingListItem = EditShoppingListItemCheckbox | EditShoppingListItemName;
