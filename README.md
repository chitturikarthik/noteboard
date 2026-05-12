# NoteBoard

A full-stack note-taking application that allows users to create, read, update, and delete notes in real-time. Built with a responsive design, rate limiting to prevent API abuse, and persistent data storage using MongoDB.

## Features

- **Create, Read, Update, Delete Notes**: Full CRUD operations for managing notes
- **Real-time UI Updates**: Optimistic updates for better user experience
- **Rate Limiting**: Uses Upstash Redis with a sliding window algorithm allowing 100 requests per 60 seconds globally resulting in the prevention of abuse of API.
- **Responsive Design**: Mobile-first approach using Tailwind CSS and DaisyUI
- **Toast Notifications**: User-friendly feedback for all actions
- **Date Formatting**: Consistent date display across the application
- **Error Handling**: Comprehensive error boundaries and user-friendly messages

## Technology Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose for data persistence
- **Upstash Redis** for rate limiting
- **CORS** for cross-origin requests

### Frontend
- **React 19** with Vite for fast development
- **React Router** for client-side routing
- **Tailwind CSS** with DaisyUI for styling
- **Axios** for HTTP requests
- **React Hot Toast** for notifications
- **Lucide React** for icons

## Project Structure

```
noteboard/
├── backend/
│   ├── src/
│   │   ├── server.js          # Main server entry point
│   │   ├── config/
│   │   │   ├── db.js          # MongoDB connection
│   │   │   └── upstash.js     # Rate limiting configuration
│   │   ├── controllers/
│   │   │   └── notesControllers.js  # CRUD operations
│   │   ├── middlewares/
│   │   │   └── rateLimiter_md.js    # Rate limiting middleware
│   │   ├── model/
│   │   │   └── Note.js        # MongoDB schema
│   │   └── routes/
│   │       └── notesRoutes.js # API routes
│   └── package.json
└── frontend/
    ├── src/
    │   ├── main.jsx           # React entry point
    │   ├── App.jsx            # Main app component with routing
    │   ├── components/
    │   │   ├── Navbar.jsx     # Navigation header
    │   │   ├── NoteCard.jsx   # Individual note display
    │   │   ├── RateLimitedUI.jsx  # Rate limit warning
    │   │   └── NotesNotFound.jsx  # Empty state
    │   ├── pages/
    │   │   ├── HomePage.jsx    # Notes list
    │   │   ├── CreatePage.jsx  # Create new note
    │   │   └── NoteDetailPage.jsx  # View/edit note
    │   ├── lib/
    │   │   ├── axios.js        # API client configuration
    │   │   └── utils.js        # Utility functions
    │   └── App.css, index.css  # Styles
    ├── public/
    ├── index.html
    └── package.json
```

## API Endpoints

All endpoints are prefixed with `/api/notes`:

- `GET /` - Fetch all notes
- `GET /:id` - Fetch a specific note
- `POST /` - Create a new note
- `PUT /:id` - Update a note
- `DELETE /:id` - Delete a note

## Database Model

```javascript
Note {
  title: String (required),
  content: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB database
- Upstash Redis account for rate limiting

### Environment Variables
Create `.env` file in the backend directory:

```
MONGO_URL=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5000
```

### Installation

1. **Backend Setup**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

The backend will run on `http://localhost:5000` and frontend on `http://localhost:5173`.

## Development Commands

### Backend
- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).</content>
<parameter name="filePath">README.md