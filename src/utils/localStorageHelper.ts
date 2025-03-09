export enum LocalStorageKeys {
  WasAgeConfirmed = 'WasAgeConfirmed',
  WasCookiesConfirmed = 'WasCookiesConfirmed',
}

const get = <TValue = unknown>(key: LocalStorageKeys): TValue | null => {
  try {
    const value = localStorage.getItem(key);
    return value === null ? null : JSON.parse(value);
  } catch {
    console.error('LocalStorage getItem error');
    return null;
  }
};

const set = <TValue = unknown>(key: LocalStorageKeys, value: TValue): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.error('LocalStorage setItem error');
  }
};

export const localStorageHelper = {
  set,
  get,
};
