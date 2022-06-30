import { WritableComputedRef, ref, computed, onScopeDispose } from 'vue';

export type StoreRef<T> = WritableComputedRef<T>;

export function storeRef<T>(storeKey: string): StoreRef<T | undefined>;
export function storeRef<T>(storeKey: string, defaultValue: T): StoreRef<T>;
export function storeRef<T>(storeKey: string, defaultValue?: T): StoreRef<T | undefined> {

  const storage = window.localStorage;
  const raw = ref(storage.getItem(storeKey));
  const result = computed<T | undefined>({
    get: () => {
      if (raw.value === null) {
        return defaultValue;
      }
      try {
        return JSON.parse(raw.value) as T;
      }
      catch (error) {
        console.error(error);
        return defaultValue;
      }
    },
    set: (val) => {
      if (val === undefined) {
        storage.removeItem(storeKey);
      }
      else {
        storage.setItem(storeKey, JSON.stringify(val));
      }
      storageHandler();
    }
  });

  window.addEventListener('storage', storageHandler);

  onScopeDispose(() => {
    window.removeEventListener('storage', storageHandler);
  });

  return result;

  function storageHandler() {
    raw.value = storage.getItem(storeKey);
  }
}
