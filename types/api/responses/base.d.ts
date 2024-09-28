// Third-party dependencies

// Current project dependencies

/**
 * Global API response interface.
 *
 * Represents the standard structure of an API response.
 *
 * @export
 * @interface BaseApiResponse
 */
declare interface BaseApiResponse {
  /**
   * Indicates whether the API request was successful.
   */
  success: boolean;

  /**
   * A message providing additional information about the API response.
   */
  message: string;

  /**
   * The HTTP status code of the API response.
   */
  status: number;

  /**
   * Optional redirect URL if the response indicates a need to redirect.
   */
  redirectTo?: string;

  /**
   * Optional error object in case of an error.
   */
  error?: unknown;
}
