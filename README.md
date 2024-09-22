# Custom Errors

A lightweight npm package for custom error handling in Node.js applications. This package allows you to create and manage specific HTTP error types easily, making your error handling more organized and consistent.

## Installation

To install the package, run the following command:

```bash
npm install @imtiaz/custom-errors
```

## Usage
Importing Custom Errors
You can import the custom error classes in your application like this:

```javascript
import { BadRequestError, UnauthorizedError, NotFoundError } from '@imtiaz/custom-errors';
```

## Creating a Controller Example
Here's how to use the custom errors in your controller methods:

```javascript
import { BadRequestError, UnauthorizedError, NotFoundError } from '@imtiaz/custom-errors';

const userController = {
  async getUser(req, res, next) {
    try {
      const { userId } = req.params;

      if (!userId) {
        throw new BadRequestError('User ID is required.');
      }

      const user = await fetchUserById(userId); // Replace with your actual data retrieval logic

      if (!user) {
        throw new NotFoundError('User not found.');
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  async authenticateUser(req, res, next) {
    try {
      const { username, password } = req.body;

      const isAuthenticated = await authenticate(username, password); // Replace with your authentication logic
      if (!isAuthenticated) {
        throw new UnauthorizedError('Invalid username or password.');
      }

      res.status(200).json({ message: 'Authenticated successfully!' });
    } catch (error) {
      next(error);
    }
  }
};
```
## Error Handling Middleware
Make sure to set up an error handling middleware to catch and respond to these errors:

```javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred.';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
};
```

## Use the error handler in your Express app.js/server.js
```javascript
app.use(errorHandler);
```

## Using Default Error Handling Middleware

To use the error handler in your Express application, import it and use it as middleware:

```javascript
import { errorHandler } from '@imtiaz/custom-errors';

// After your routes
app.use(errorHandler);


## Available Error Types
* BadRequestError: Indicates that the server cannot process the request due to a client error (400).
* UnauthorizedError: Indicates that authentication is required and has failed (401).
* ForbiddenError: Indicates that the server understands the request but refuses to authorize it (403).
* NotFoundError: Indicates that the requested resource could not be found (404).
* MethodNotAllowedError: Indicates that the method specified in the request is not allowed (405).
* ConflictError: Indicates a conflict with the current state of the resource (409).
* InternalServerError: Indicates an unexpected condition was encountered (500).
* ServiceUnavailableError: Indicates that the server is currently unable to handle the request due to temporary overload or maintenance (503).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Author
Imtiaz Ahmed