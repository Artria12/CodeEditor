# CodeEditor problem setting service

  _________________________________

## How Routing is working in the project
  -api/v1/problems/ping
    -because the route  starts with /api
        /api   ->   /v1   ->       /problems  ->   ping
        apirouter -> v1router -> problemRouter -> problemController ->service layer
    /api   ->   /v1   ->       /problems  ->   ping
    apirouter -> v1router -> problemRouter -> problemController ->service layer
