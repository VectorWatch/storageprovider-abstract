function StorageProviderAbstract() {

}

StorageProviderAbstract.prototype.storeAuthTokensAsync = function(credentialsKey, authTokens) {
    throw new Error('Not implemented.');
};

StorageProviderAbstract.prototype.getAuthTokensByCredentialsKeyAsync = function(credentialsKey) {
    throw new Error('Not implemented.');
};

StorageProviderAbstract.prototype.getAuthTokensByChannelLabelAsync = function(channelLabel) {
    throw new Error('Not implemented.');
};

StorageProviderAbstract.prototype.storeUserSettingsAsync = function(channelLabel, userSettings, credentialsKey) {
    throw new Error('Not implemented.');
};

StorageProviderAbstract.prototype.removeUserSettingAsync = function(channelLabel) {
    throw new Error('Not implemented.');
};

StorageProviderAbstract.prototype.getAllUserSettingsAsync = function() {
    throw new Error('Not implemented.');
};

StorageProviderAbstract.prototype.getUserSettingsAsync = function(channelLabel) {
    throw new Error('Not implemented.');
};

module.exports = StorageProviderAbstract;