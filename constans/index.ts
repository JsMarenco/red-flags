// Third-party dependencies

// Current project dependencies

/**
 * A constant representing the YouTube platform.
 *
 * @constant {VideoPlatform}
 */
const YT_ID: VideoPlatform = "youtube";

/**
 * A constant representing the TikTok platform.
 *
 * @constant {VideoPlatform}
 */
const TK_ID: VideoPlatform = "tiktok";
/**
 * An array of available video platforms.
 *
 * @constant {VideoPlatform[]}
 */
const VIDEO_PLATFORMS: VideoPlatform[] = [YT_ID, TK_ID];

/**
 * An array of available video languages.
 *
 * @constant {VideoLanguage[]}
 */
const VIDEO_LANGUAGES: VideoLanguage[] = ["en", "es"];

/**
 * An object representing video sizes for different platforms.
 * Each platform has a width and height property.
 *
 * @constant {Object<string, {width: number, height: number}>}
 */
const VIDEO_SIZES = {
  /**
   * TikTok video size.
   *
   * @property {number} width - Width of the TikTok video.
   * @property {number} height - Height of the TikTok video.
   */
  tiktok: {
    width: 1080,
    height: 1920,
  },
  /**
   * YouTube video size.
   *
   * @property {number} width - Width of the YouTube video.
   * @property {number} height - Height of the YouTube video.
   */
  youtube: {
    width: 1920,
    height: 1080,
  },
};

export { VIDEO_PLATFORMS, VIDEO_LANGUAGES, VIDEO_SIZES, TK_ID, YT_ID };
