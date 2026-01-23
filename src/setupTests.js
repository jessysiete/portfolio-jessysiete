import { expect, afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);
afterEach(cleanup);

// Stable localStorage mock for Vitest + jsdom
const createLocalStorageMock = () => {
  let store = {};

  return {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => {
      store[key] = String(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    key: (i) => Object.keys(store)[i] ?? null,
    get length() {
      return Object.keys(store).length;
    },
  };
};

// Define localStorage once (some environments may have a partial/overridden implementation)
const localStorageMock = createLocalStorageMock();
Object.defineProperty(globalThis, "localStorage", {
  value: localStorageMock,
  writable: true,
});

// Optional: reset storage between tests to avoid cross-test bleed
beforeEach(() => {
  globalThis.localStorage.clear();
});