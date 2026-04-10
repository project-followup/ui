export interface LocalStorageService {
  getItem<T>(key: string): T | null;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
}

export class BrowserLocalStorageService implements LocalStorageService {
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (item === null) {
      return null;
    }

    try {
      return JSON.parse(item) as T;
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

export const localStorageService: LocalStorageService =
  new BrowserLocalStorageService();
