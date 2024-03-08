/**
 * HTTP 状态信息的接口。
 */
interface HTTPStatus {
    code: number;
    description: string;
}

/**
 * 包含所有 HTTP 状态信息的数组。
 * @type {HTTPStatus[]}
 */
const HTTPStatusCodeList: HTTPStatus[] = [
    { code: 100, description: 'Continue - The server has received the request headers and the client should proceed to send the request body.' },
    { code: 101, description: 'Switching Protocols - The requester has asked the server to switch protocols.' },
    { code: 102, description: 'Processing - The server is currently processing the request, but no response is available yet.' },
    { code: 103, description: 'Early Hints - Used to return some response headers before final HTTP message.' },

    { code: 200, description: 'OK - The request was successful, and the server has returned the requested data.' },
    { code: 201, description: 'Created - The request has been fulfilled, resulting in the creation of a new resource.' },
    { code: 202, description: 'Accepted - The request has been accepted for processing, but the processing has not been completed.' },
    { code: 203, description: 'Non-Authoritative Information - The server is a transforming proxy that received a 200 OK response from the origin, but is returning a modified version of the origin\'s response.' },
    { code: 204, description: 'No Content - The server successfully processed the request but did not return any content.' },
    { code: 205, description: 'Reset Content - The server successfully processed the request, but there is no content to send in the response.' },
    { code: 206, description: 'Partial Content - The server is delivering only part of the resource due to a range header sent by the client.' },
    { code: 207, description: 'Multi-Status - The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.' },
    { code: 208, description: 'Already Reported - The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.' },
    { code: 226, description: 'IM Used - The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.' },

    { code: 300, description: 'Multiple Choices - The requested resource has multiple representations available, each with different characteristics.' },
    { code: 301, description: 'Moved Permanently - The requested resource has been permanently moved to a different location, and future requests should use the new URI.' },
    { code: 302, description: 'Found - The requested resource resides temporarily under a different URI. The client should continue to use the original URI for future requests.' },
    { code: 303, description: 'See Other - The response to the request can be found under a different URI and should be retrieved using a GET method on that resource.' },
    { code: 304, description: 'Not Modified - Indicates that the resource has not been modified since the version specified by the request headers.' },
    { code: 305, description: 'Use Proxy - Deprecated and no longer used. Originally meant "Subsequent requests should use the specified proxy."' },
    { code: 307, description: 'Temporary Redirect - The requested resource has been temporarily moved to a different location, and future requests should use the new URI with the same method.' },
    { code: 308, description: 'Permanent Redirect - Similar to 301 Moved Permanently, but the method used in the second request should be the same as the original method.' },

    { code: 400, description: 'Bad Request - The server cannot or will not process the request due to an apparent client error, such as malformed syntax or invalid request message framing.' },
    { code: 401, description: 'Unauthorized - Similar to 403 Forbidden, but specifically for authentication.' },
    { code: 402, description: 'Payment Required - Reserved for future use. Currently, it is not used, but may be used in the future.' },
    { code: 403, description: 'Forbidden - The server understood the request, but it refuses to authorize it. Authentication will not help, and the request should not be repeated.' },
    { code: 404, description: 'Not Found - The server cannot find the requested resource. The URI is likely valid, but the server cannot find the requested resource.' },
    { code: 405, description: 'Method Not Allowed - The method received in the request-line is known by the server but has been disabled and cannot be used.' },
    { code: 406, description: 'Not Acceptable - The resource identified by the request is only capable of generating response entities that have content characteristics not acceptable according to the accept headers sent in the request.' },
    { code: 407, description: 'Proxy Authentication Required - Similar to 401 Unauthorized, but indicates that the client needs to authenticate itself to get permission to use a proxy.' },
    { code: 408, description: 'Request Timeout - The server timed out waiting for the request. According to HTTP specifications, a client should resend the request.' },
    { code: 409, description: 'Conflict - Indicates that the request could not be completed due to a conflict with the current state of the target resource.' },
    { code: 410, description: 'Gone - Indicates that the requested resource is no longer available, and no forwarding address is known. This condition is expected to be permanent.' },
    { code: 411, description: 'Length Required - The server refuses to accept the request without a defined Content-Length.' },
    { code: 412, description: 'Precondition Failed - One or more conditions in the request header fields evaluated to false when tested on the server.' },
    { code: 413, description: 'Payload Too Large - The request is larger than the server is willing or able to process.' },
    { code: 414, description: 'URI Too Long - The URI provided was too long for the server to process. Often the result of a mistyped URL or a misconfigured server.' },
    { code: 415, description: 'Unsupported Media Type - The server does not support the media type transmitted in the request.' },
    { code: 416, description: 'Range Not Satisfiable - The client has asked for a portion of the file but the server cannot supply that portion.' },
    { code: 417, description: 'Expectation Failed - The server cannot meet the requirements of the Expect request-header field.' },

    { code: 418, description: "I'm a teapot - This code was defined in 1998 as an April Fools' joke and is not expected to be implemented by actual HTTP servers." },
    { code: 421, description: 'Misdirected Request - The request was directed at a server that is not able to produce a response.' },
    { code: 422, description: 'Unprocessable Entity - The request was well-formed but was unable to be followed due to semantic errors.' },
    { code: 423, description: 'Locked - The resource that is being accessed is locked.' },
    { code: 424, description: 'Failed Dependency - The request failed due to failure of a previous request.' },
    { code: 425, description: 'Too Early - Indicates that the server is unwilling to risk processing a request that might be replayed.' },
    { code: 426, description: 'Upgrade Required - The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.' },
    { code: 428, description: 'Precondition Required - The origin server requires the request to be conditional.' },
    { code: 429, description: 'Too Many Requests - The user has sent too many requests in a given amount of time.' },
    { code: 431, description: 'Request Header Fields Too Large - The server is unwilling to process the request because its header fields are too large.' },
    { code: 451, description: 'Unavailable For Legal Reasons - A server operator has received a legal demand to deny access to a resource or to a set of resources.' },

    { code: 500, description: 'Internal Server Error - A generic error message returned when an unexpected condition was encountered on the server.' },
    { code: 501, description: 'Not Implemented - The server either does not recognize the request method or lacks the ability to fulfill the request.' },
    { code: 502, description: 'Bad Gateway - The server, while acting as a gateway or proxy, received an invalid response from the upstream server.' },
    { code: 503, description: 'Service Unavailable - The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.' },
    { code: 504, description: 'Gateway Timeout - The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server or application.' },
    { code: 505, description: 'HTTP Version Not Supported - The server does not support the HTTP protocol version used in the request.' },
    { code: 506, description: 'Variant Also Negotiates - Transparent content negotiation for the request, results in a circular reference.' },
    { code: 507, description: 'Insufficient Storage - The server is unable to store the representation needed to complete the request.' },
    { code: 508, description: 'Loop Detected - The server detected an infinite loop while processing a request.' },
    { code: 510, description: 'Not Extended - Further extensions to the request are required for the server to fulfill it.' },
    { code: 511, description: 'Network Authentication Required - The client needs to authenticate to gain network access.' },
];

/**
 * 通过状态码或状态描述获取对应的 HTTP 状态信息。
 *
 * @param {number | string} code - HTTP 状态码或状态描述。
 * @returns {HTTPStatus[]} 匹配的 HTTP 状态信息数组。
 */
function getHTTPStatusCode(code: number | string): HTTPStatus[] {
    const codeStr = code.toString()

    return HTTPStatusCodeList.filter((item) => {
        return item.code.toString().includes(codeStr)
    })
}

export {
    HTTPStatusCodeList,
    getHTTPStatusCode
};
