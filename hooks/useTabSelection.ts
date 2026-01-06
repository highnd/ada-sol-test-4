"use client";

import { useState, useMemo, useCallback } from "react";

/**
 * Generic hook for tab selection with O(1) Map-based lookup
 * @template T - Type that extends { id: number }
 * @param items - Array of items with id property
 * @param initialId - Initial selected item ID
 * @returns Object with selectedId, selected item, and selectItem function
 */
export const useTabSelection = <T extends { id: number }>(
  items: readonly T[],
  initialId: number
) => {
  const [selectedId, setSelectedId] = useState<number>(initialId);

  // O(1) lookup with Map instead of O(n) array.find()
  const itemsMap = useMemo(
    () => new Map(items.map((item) => [item.id, item])),
    [items]
  );

  // Memoized selected item lookup
  const selected = useMemo(
    () => itemsMap.get(selectedId) || items[0],
    [selectedId, itemsMap, items]
  );

  // Optimized click handler with useCallback
  const selectItem = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  return { selectedId, selected, selectItem };
};

