# Critical Styles

Web application backend for a 2 step process to generate Critical CSS, for free.

## Why use criticalstyles.com

Any web application without critical CSS and asynchronous loading of CSS will experience a flash of unstyled content.

## Usage

Visit `https://criticalstyles.com` and follow this simple **2 step process**:

1. Enter the URL to your website and main CSS
2. Click generate

## Todos

- [ ] Create unit tests for Cache service methods
- [ ] Create integration tests for `createCriticalStyle` resolver
- [ ] Create tests for GraphQL types

### Future Architecture

Currently, this project is just an MVP however, this could scale into a multi-container application deloyed with Kubernetes. With a containerized React Front-end, worker server (for the actual penthouse and clean-css processes), and redis server (or maybe RabbitMQ) so that we can immediately trigger our worker upon requests.
