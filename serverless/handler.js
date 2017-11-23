'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      version: 'v1.3',
    }),
  };

  callback(null, response);
};
