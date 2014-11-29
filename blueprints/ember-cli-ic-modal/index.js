module.exports = {
  normalizeEntityName: function() {

  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ic-modal');
  }
};
