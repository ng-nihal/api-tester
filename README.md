# API Tester

A modern, developer-friendly API testing tool built with React and TypeScript. Similar to Postman, but runs directly in your browser.

Nihal: Only if it works here, is it ready to integrate. NOT on Postman or local machines.

## Features

- 🚀 Test REST APIs with support for all HTTP methods
- 📝 JSON request body editor with validation
- 🔧 Custom headers management
- ⚡ Real-time response preview
- 🎨 Syntax highlighting for JSON/text responses
- ⏱️ Response time tracking
- 📊 Response headers viewer
- 🎯 Status code indicators with color coding

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Making Requests**
   - Select HTTP method (GET, POST, PUT, etc.)
   - Enter the API URL
   - Add custom headers if needed
   - For POST/PUT requests, enter JSON body
   - Click "Send Request"

2. **Response Viewing**
   - Status code with color indication
   - Response time in milliseconds
   - Formatted response body with syntax highlighting
   - Response headers table

3. **Request Body**
   - JSON validation
   - Format button for pretty-printing
   - Error indicators for invalid JSON

4. **Headers Management**
   - Add/remove custom headers
   - Default Content-Type header included
   - Easy header pair management

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Syntax Highlighter
- Lucide Icons

## Development

The project uses modern React practices including:
- Functional components
- React Context for state management
- Custom hooks
- TypeScript for type safety
- Tailwind CSS for styling

## Project Structure

```
src/
├── components/
│   ├── request/      # Request-related components
│   ├── response/     # Response-related components
│   ├── layout/       # Layout components
│   └── ui/           # Reusable UI components
├── context/          # React Context providers
├── types/            # TypeScript type definitions
└── main.tsx         # Application entry point
```

## Error Handling

- Network error handling
- JSON validation
- Invalid URL detection
- Timeout management
- CORS error handling

## Best Practices

- Use appropriate HTTP methods for operations
- Include relevant headers (Content-Type, Authorization, etc.)
- Validate JSON before sending
- Check response status codes
- Handle errors gracefully

## License

MIT
