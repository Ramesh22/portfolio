import http.server
import socketserver
import mimetypes

# Ensure common webfont MIME types are known so SimpleHTTPRequestHandler
# will send the correct Content-Type headers when serving font files.
mimetypes.add_type('font/woff2', '.woff2')
mimetypes.add_type('font/woff', '.woff')
mimetypes.add_type('font/ttf', '.ttf')
mimetypes.add_type('application/vnd.ms-fontobject', '.eot')
mimetypes.add_type('image/svg+xml', '.svg')


class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    # No need to override do_GET; SimpleHTTPRequestHandler will use the
    # mimetypes module to set Content-Type headers. We keep this class
    # in case we want to extend behavior later.
    pass


# Create an object of the above class
handler_object = MyHttpRequestHandler

PORT = 8001 # You can change this to any port you prefer
with socketserver.TCPServer(("", PORT), handler_object) as my_server:
    print(f"Server started at http://localhost:{PORT}")
    try:
        my_server.serve_forever()
    except KeyboardInterrupt:
        print("Server stopped.")