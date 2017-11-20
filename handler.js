'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.0',
    }),
  };

  callback(null, response);
};
