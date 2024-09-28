// Third-party dependencies

// Current project dependencies

/**
 * Represents a route configuration object with path and display name.
 *
 * @type {Object} AppRoute
 * @property {string} router - The path for the route.
 * @property {string} name - The display name for the route.
 */
declare type AppRoute = {
  /**
   * The path for the route.
   *
   * @type {string}
   */
  router: string;

  /**
   * The display name for the route.
   *
   * @type {string}
   */
  name: string;
};

/**
 * Represents the application's route configurations.
 *
 * This type defines the structure of the `appRoutes` object, which contains route configurations
 * for various pages in the application.
 *
 * @type {Object} AppRoutes
 */
declare type AppRoutes = {
  /**
   * The route configuration for the  home page.
   *
   * @type {AppRoute}
   */
  home: AppRoute;

  /**
   * The route configuration for the 404 not found page.
   *
   * @type {AppRoute}
   */
  notFound: AppRoute;

  /**
   * The route configuration for the chat analyze page.
   *
   * @type {AppRoute}
   */
  chatAnalyze: AppRoute;
};
