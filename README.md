.

# Task Management App

## Description

This is a simple Task Management App built with Next.js. You can use it to manage your tasks by adding, editing, deleting, and marking them as completed. You can also sort tasks by priority (high, medium, low), and completed tasks will be shown at the bottom of the list.

### Key Features
- Add, edit, and delete tasks.
- Mark tasks as completed or pending.
- Sort tasks by priority.
- Works well on different screen sizes (responsive design).

## Technologies Used
- **Next.js**: For building the app and handling routing.
- **React**: For creating the user interface.
- **CSS**: For styling the app.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd task-manager

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
###

Sorting Tasks by Priority
To sort tasks by priority, we use a simple method:

Each task has a priority that can be "high", "medium", or "low".
We assign numbers to these priorities:
High = 1
Medium = 2
Low = 3
When we sort the tasks, we compare these numbers to arrange the tasks. High-priority tasks show up first.

# Here’s how the sorting works:

const sortedTasks = [...pendingTasks].sort((a, b) => {
  const priorities = { high: 1, medium: 2, low: 3 };
  return priorities[a.priority] - priorities[b.priority];
});
