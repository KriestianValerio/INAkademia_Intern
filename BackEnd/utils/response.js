const RESPONSES = {
  200: {
    status_code: 200,
    status: true,
    message: "Request Success.",
    data: null,
  },
  201: {
    status_code: 201,
    status: true,
    message: "Request Created.",
  },
  204: {
    status_code: 204,
    status: true,
    message: "Request Deleted.",
  },
  400: {
    status_code: 400,
    status: false,
    message: "Validation Failed.",
    detail_message: null,
    data: null,
  },
  401: {
    status_code: 401,
    status: false,
    message: "Unauthorized Request.",
    detail_message: null,
    data: null,
  },
  403: {
    status_code: 403,
    status: false,
    message: "Forbidden Request.",
    detail_message: null,
    data: null,
  },
  404: {
    status_code: 404,
    status: false,
    message: "Resource Not Found.",
    detail_message: null,
    data: null,
  },
  422: {
    status_code: 422,
    status: false,
    message: "Unprocessable Entity",
    detail_message: null,
    data: null,
  },
  500: {
    status_code: 500,
    status: false,
    message: "Internal Server Error.",
    detail_message: null,
    data: null,
  },
};
function Response({ res, code, data = null, detail_message = null }) {
  if (res.headersSent) {
    console.error("Response already sent.");
    return;
  }

  const response = {
    ...RESPONSES[code],
    data: data,
    detail_message: detail_message,
  };
  return res.status(code).json(response);
}

module.exports = Response;
