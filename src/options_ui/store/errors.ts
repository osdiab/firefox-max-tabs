/**
 * All errors related to the application store.
 */

/**
 * General type describing errors related to the application store
 */
export abstract class StoreError extends Error { }

/**
 * Represents invalid input to a store method
 */
export class InvalidArgumentError extends StoreError { }

/**
 * Represents a browser-level error that the store could not
 * recover from
 */
export class BrowserError extends StoreError {
  public readonly originalError: Error;

  constructor(message: string, originalError: Error) {
    super(message);
    this.originalError = originalError;
  }
}
