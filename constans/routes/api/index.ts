// Third-party dependencies

// Current project dependencies

/**
 * All the api routes
 */
const apiRoutes: ApiRoutes = {
  health: { endpoint: "/api/health" },
  chat: {
    analyze: {
      endpoint: "/api/chat/analyze",
    },
  },
};

export default apiRoutes;
