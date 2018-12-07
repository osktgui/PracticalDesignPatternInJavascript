var repoFactory = function () {
  this.getRepo = function (repoType) {
    if (repoType === 'task') {
      var taskRepo = require('./taskRepository')();
      return taskRepo;
    }
    if (repoType === 'user') {
      var userRepo = require('./userRepo')();
      return userRepo;
    }
    if (repoType === 'project') {
      var projectRepo = require('./projectRepo')();
      return projectRepo;
    }
  }
};

module.exports = new repoFactory;
