'use strict';

module.exports = {
  name: 'ember-cli-ic-modal',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ic-styled/main.js');
    app.import(app.bowerDirectory + '/ic-modal/dist/globals/main.js');

  }
};
