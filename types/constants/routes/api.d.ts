// Third-party dependencies

// Current project dependencies

/**
 * Represents a route configuration object with path and display name.
 *
 * @type {Object} ApiRoute
 * @property {string} endpoint - The path for the route.
 */
declare type ApiRoute = {
  /**
   * The path for the route.
   *
   * @type {string}
   */
  endpoint: string;
};

/**
 * Represents the application's route configurations.
 *
 * This type defines the structure of the `apiRoutes` object, which contains route configurations
 * for various API endpoints in the application.
 *
 * @type {Object} ApiRoutes
 * @property {ApiRoute} health - The route configuration for the health check endpoint.
 * @property {ApiRoute} chatAnalyze - The route configuration for the chat analysis endpoint.
 */
declare type ApiRoutes = {
  /**
   * The route configuration for the  home page.
   *
   * @type {ApiRoute}
   */
  health: ApiRoute;

  /**
   * Group of chat-related routes.
   *
   * This object contains route configurations specifically related to chat functionalities.
   *
   * @type {Object}
   */
  chat: {
    /**
     * The route configuration for the chat analyze page.
     *
     * @type {ApiRoute}
     */
    analyze: ApiRoute;
  };
};
