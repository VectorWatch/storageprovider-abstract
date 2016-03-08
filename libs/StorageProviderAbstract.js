/**
 * @constructor
 */
function StorageProviderAbstract() {

}

/**
 * Stores the auth tokens
 * @param credentialsKey {String}
 * @param authTokens {Object}
 * @returns {Promise}
 */
StorageProviderAbstract.prototype.storeAuthTokensAsync = function(credentialsKey, authTokens) {
    throw new Error('Not implemented.');
};

/**
 * Returns a promise of an auth tokens object
 * @param credentialsKey {String}
 * @returns {Promise<Object>}
 */
StorageProviderAbstract.prototype.getAuthTokensByCredentialsKeyAsync = function(credentialsKey) {
    throw new Error('Not implemented.');
};

/**
 * Returns a promise of an auth tokens object
 * @param channelLabel {String}
 * @returns {Promise<Object>}
 */
StorageProviderAbstract.prototype.getAuthTokensByChannelLabelAsync = function(channelLabel) {
    throw new Error('Not implemented.');
};

/**
 * Stores the user settings for the channelLabel
 * @param channelLabel {String}
 * @param userSettings {Object}
 * @param credentialsKey {String}
 * @returns {Promise}
 */
StorageProviderAbstract.prototype.storeUserSettingsAsync = function(channelLabel, userSettings, credentialsKey) {
    throw new Error('Not implemented.');
};

/**
 * Removes the user settings for the channelLabel
 * @param channelLabel {String}
 * @returns {Promise}
 */
StorageProviderAbstract.prototype.removeUserSettingsAsync = function(channelLabel) {
    throw new Error('Not implemented.');
};

/**
 * Returns a promise of all stored user settings
 * @returns {Promise<{channelLabel: String, userSettings: Object, authTokens: Object}[]>}
 */
StorageProviderAbstract.prototype.getAllUserSettingsAsync = function() {
    throw new Error('Not implemented.');
};

/**
 * Returns a promise of the user settings for the channelLabel
 * @param channelLabel {String}
 * @returns {Promise<{channelLabel: String, userSettings: Object, authTokens: Object}>}
 */
StorageProviderAbstract.prototype.getUserSettingsAsync = function(channelLabel) {
    throw new Error('Not implemented.');
};

/**
 * Stores the settings for apps with a TTL
 * @param userKey {String}
 * @param userSettings {Object}
 * @param credentialsKey {String}
 * @param ttl {Number}
 * @returns {Promise}
 */
StorageProviderAbstract.prototype.storeAppSettingsAsync = function(userKey, userSettings, credentialsKey, ttl) {
    throw new Error('Not implemented.');
};

/**
 * Removes all expired settings for apps
 * @returns {Promise<{userKey: String, userSettings: Object, authTokens: Object}[]>}
 */
StorageProviderAbstract.prototype.removeExpiredAppSettingsAsync = function() {
    throw new Error('Not implemented.');
};

/**
 * Returns a promise of settings for apps
 * @param userKey {String}
 * @returns {Promise<{userKey: String, userSettings: Object, authTokens: Object}>}
 */
StorageProviderAbstract.prototype.getAppSettingsAsync = function(userKey) {
    throw new Error('Not implemented.');
};

/** Returns a promise of settings for apps
 * @returns {Promise<{userKey: String, userSettings: Object, authTokens: Object}[]>}
 */
StorageProviderAbstract.prototype.getAllAppSettingsAsync = function() {
    throw new Error('Not implemented.');
};

module.exports = StorageProviderAbstract;