const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;  // Use environment PORT for deployment
const DATA_FILE = path.join(__dirname, "posts-data.json");

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(express.static('dist', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    if (path.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// ✅ ADD THIS: Serve static files from dist directory with correct MIME types
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    if (path.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
    if (path.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html');
    }
  }
}));

// Helper functions for file operations
async function readDataFromFile() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data file:", error.message);
    throw new Error("Failed to read data file");
  }
}

async function writeDataToFile(data) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    console.log("Data saved to file successfully");
  } catch (error) {
    console.error("Error writing to file:", error);
    throw new Error("Failed to write data file");
  }
}

// Helper function to get user by ID
function getUserById(users, userId) {
  return users.find((user) => user.userId === userId);
}

// Helper function to get posts by user ID
function getPostsByUserId(posts, userId) {
  return posts.filter((post) => post.userId === userId);
}

// Helper function to enrich posts with user data
function enrichPostsWithUserData(posts, users) {
  return posts.map((post) => {
    const user = getUserById(users, post.userId);
    return {
      ...post,
      username: user?.username || "Unknown User",
      UsersProfilePic:
        user?.UsersProfilePic ||
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      // Enrich comments with user data
      comments: post.comments.map((comment) => {
        const commentUser = getUserById(users, comment.userId);
        return {
          ...comment,
          username: commentUser?.username || "Unknown User",
          UsersProfilePic:
            commentUser?.UsersProfilePic ||
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        };
      }),
    };
  });
}

// Helper function to enrich users with their posts
function enrichUsersWithPosts(users, posts) {
  return users.map((user) => {
    const userPosts = getPostsByUserId(posts, user.userId);
    // Enrich user posts with user data and comment user data
    const enrichedPosts = enrichPostsWithUserData(userPosts, users);

    return {
      ...user,
      posts: enrichedPosts,
      postsCount: enrichedPosts.length,
    };
  });
}

// Routes
// GET all users (now includes their posts)
app.get("/api/users", async (req, res) => {
  console.log("GET /api/users - Fetching all users with their posts");

  try {
    const data = await readDataFromFile();
    const users = data.UserData || [];
    const posts = data.PostData || [];

    const enrichedUsers = enrichUsersWithPosts(users, posts);

    res.json(enrichedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// GET single user by ID (now includes their posts)
app.get("/api/users/:userId", async (req, res) => {
  console.log(
    `GET /api/users/${req.params.userId} - Fetching single user with posts`
  );

  try {
    const userId = req.params.userId;
    const data = await readDataFromFile();
    const users = data.UserData || [];
    const posts = data.PostData || [];

    const user = getUserById(users, userId);

    if (user) {
      const userPosts = getPostsByUserId(posts, userId);
      const enrichedPosts = enrichPostsWithUserData(userPosts, users);

      const enrichedUser = {
        ...user,
        posts: enrichedPosts,
        postsCount: enrichedPosts.length,
      };

      res.json(enrichedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// GET user posts only (separate endpoint for just posts)
app.get("/api/users/:userId/posts", async (req, res) => {
  console.log(
    `GET /api/users/${req.params.userId}/posts - Fetching user posts only`
  );

  try {
    const userId = req.params.userId;
    const data = await readDataFromFile();
    const users = data.UserData || [];
    const posts = data.PostData || [];

    const user = getUserById(users, userId);

    if (user) {
      const userPosts = getPostsByUserId(posts, userId);
      const enrichedPosts = enrichPostsWithUserData(userPosts, users);

      res.json({
        userId: userId,
        username: user.username,
        posts: enrichedPosts,
        postsCount: enrichedPosts.length,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user posts:", error);
    res.status(500).json({ error: "Failed to fetch user posts" });
  }
});

// POST - Create new user
app.post("/api/users", async (req, res) => {
  console.log("POST /api/users - Creating new user");

  try {
    const { userId, username, UsersProfilePic, email, contactNumber } =
      req.body;

    // Validation
    if (!userId || !username || !email) {
      return res
        .status(400)
        .json({ error: "Missing required fields: userId, username, email" });
    }

    const data = await readDataFromFile();

    // Check if user already exists
    if (getUserById(data.UserData || [], userId)) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = {
      userId,
      username,
      UsersProfilePic:
        UsersProfilePic ||
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      email,
      contactNumber: contactNumber || null,
    };

    if (!data.UserData) data.UserData = [];
    data.UserData.push(newUser);
    await writeDataToFile(data);

    // Return user with empty posts array
    const userWithPosts = {
      ...newUser,
      posts: [],
      postsCount: 0,
    };

    res.status(201).json(userWithPosts);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// GET all posts (enriched with user data)
app.get("/api/posts", async (req, res) => {
  console.log("GET /api/posts - Fetching all posts");

  try {
    const data = await readDataFromFile();
    const enrichedPosts = enrichPostsWithUserData(
      data.PostData || [],
      data.UserData || []
    );

    // Simulate network delay (optional)
    setTimeout(() => {
      res.json({ posts: enrichedPosts });
    }, 500);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET single post by ID (enriched with user data)
app.get("/api/posts/:id", async (req, res) => {
  console.log(`GET /api/posts/${req.params.id} - Fetching single post`);

  try {
    const postId = parseInt(req.params.id);
    const data = await readDataFromFile();
    const post = (data.PostData || []).find((p) => p.id === postId);

    if (post) {
      const enrichedPost = enrichPostsWithUserData(
        [post],
        data.UserData || []
      )[0];
      res.json(enrichedPost);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// POST - Create new post
app.post("/api/posts", async (req, res) => {
  console.log("POST /api/posts - Creating new post");

  try {
    const { userId, title, body, hashtags, tags, images, videos } = req.body;

    // Validation
    if (!userId || !title || !body) {
      return res
        .status(400)
        .json({ error: "Missing required fields: userId, title, body" });
    }

    const data = await readDataFromFile();

    // Check if user exists
    const user = getUserById(data.UserData || [], userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newPost = {
      id: Date.now(),
      userId,
      title,
      body,
      hashtags: hashtags || [],
      reactions: { likes: 0, dislikes: 0 },
      tags: tags || [],
      views: 0,
      images: images || null,
      videos: videos || null,
      comments: [],
      timestamp: new Date().toISOString(),
    };

    if (!data.PostData) data.PostData = [];
    data.PostData.unshift(newPost);
    await writeDataToFile(data);

    // Return enriched post
    const enrichedPost = enrichPostsWithUserData([newPost], data.UserData)[0];
    res.status(201).json(enrichedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// PUT - Increment post views
app.put("/api/posts/:id/view", async (req, res) => {
  console.log(`PUT /api/posts/${req.params.id}/view - Incrementing views`);

  try {
    const postId = parseInt(req.params.id);
    const data = await readDataFromFile();
    const post = (data.PostData || []).find((p) => p.id === postId);

    if (post) {
      post.views += 1;
      await writeDataToFile(data);

      console.log(`Post ${postId} viewed. Total views: ${post.views}`);
      res.json({
        id: postId,
        views: post.views,
        message: "View count incremented",
      });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error updating view count:", error);
    res.status(500).json({ error: "Failed to update view count" });
  }
});

// PUT - Update post reactions (like/dislike)
app.put("/api/posts/:id/reactions", async (req, res) => {
  console.log(`PUT /api/posts/${req.params.id}/reactions - Updating reactions`);

  try {
    const postId = parseInt(req.params.id);
    const { type } = req.body; // 'like' or 'dislike'

    if (type !== "like" && type !== "dislike") {
      return res
        .status(400)
        .json({ error: 'Invalid reaction type. Use "like" or "dislike"' });
    }

    const data = await readDataFromFile();
    const post = (data.PostData || []).find((p) => p.id === postId);

    if (post) {
      if (type === "like") {
        post.reactions.likes += 1;
      } else if (type === "dislike") {
        post.reactions.dislikes += 1;
      }

      await writeDataToFile(data);
      res.json(post.reactions);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error updating post reactions:", error);
    res.status(500).json({ error: "Failed to update post reactions" });
  }
});

// POST - Add comment to post
app.post("/api/posts/:id/comments", async (req, res) => {
  console.log(`POST /api/posts/${req.params.id}/comments - Adding comment`);

  try {
    const postId = parseInt(req.params.id);
    const { userId, body } = req.body;

    // Validation
    if (!userId || !body) {
      return res
        .status(400)
        .json({ error: "Missing required fields: userId, body" });
    }

    const data = await readDataFromFile();
    const post = (data.PostData || []).find((p) => p.id === postId);

    if (post) {
      // Check if user exists
      const user = getUserById(data.UserData || [], userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const newComment = {
        id: Date.now(),
        userId,
        body,
        timestamp: new Date().toISOString(),
        reactions: { likes: 0, dislikes: 0 },
      };

      post.comments.push(newComment);
      await writeDataToFile(data);

      // Return enriched comment
      const enrichedComment = {
        ...newComment,
        username: user.username,
        UsersProfilePic: user.UsersProfilePic,
      };

      res.status(201).json(enrichedComment);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

// DELETE comment from post
app.delete("/api/posts/:postId/comments/:commentId", async (req, res) => {
  console.log(
    `DELETE /api/posts/${req.params.postId}/comments/${req.params.commentId} - Deleting comment`
  );

  try {
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.commentId);

    const data = await readDataFromFile();
    const post = (data.PostData || []).find((p) => p.id === postId);

    if (post) {
      const commentIndex = post.comments.findIndex((c) => c.id === commentId);

      if (commentIndex !== -1) {
        const deletedComment = post.comments.splice(commentIndex, 1)[0];
        await writeDataToFile(data);

        console.log(`Deleted comment ${commentId} from post ${postId}`);
        res.json(deletedComment);
      } else {
        res.status(404).json({ error: "Comment not found" });
      }
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

// PUT - Update comment reactions
app.put(
  "/api/posts/:postId/comments/:commentId/reactions",
  async (req, res) => {
    console.log(
      `PUT /api/posts/${req.params.postId}/comments/${req.params.commentId}/reactions - Updating comment reactions`
    );

    try {
      const postId = parseInt(req.params.postId);
      const commentId = parseInt(req.params.commentId);
      const { type } = req.body; // 'like' or 'dislike'

      if (type !== "like" && type !== "dislike") {
        return res
          .status(400)
          .json({ error: 'Invalid reaction type. Use "like" or "dislike"' });
      }

      const data = await readDataFromFile();
      const post = (data.PostData || []).find((p) => p.id === postId);

      if (post) {
        const comment = post.comments.find((c) => c.id === commentId);

        if (comment) {
          if (type === "like") {
            comment.reactions.likes += 1;
          } else if (type === "dislike") {
            comment.reactions.dislikes += 1;
          }

          await writeDataToFile(data);
          res.json(comment.reactions);
        } else {
          res.status(404).json({ error: "Comment not found" });
        }
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    } catch (error) {
      console.error("Error updating comment reactions:", error);
      res.status(500).json({ error: "Failed to update comment reactions" });
    }
  }
);

// DELETE post by ID
app.delete("/api/posts/:id", async (req, res) => {
  console.log(`DELETE /api/posts/${req.params.id} - Deleting post`);

  try {
    const postId = parseInt(req.params.id);
    const data = await readDataFromFile();
    const index = (data.PostData || []).findIndex((p) => p.id === postId);

    if (index !== -1) {
      const deletedPost = data.PostData.splice(index, 1)[0];
      await writeDataToFile(data);

      console.log(`Deleted post with ID: ${postId}`);
      res.json(deletedPost);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

// ✅ ADD THIS: Serve React app for all non-API routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    message: "Server is running",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Posts API available at /api/posts`);
  console.log(`👥 Users API available at /api/users`);
  console.log(`📝 User Posts API available at /api/users/:userId/posts`);
  console.log(`💾 Data stored in: ${DATA_FILE}`);
  console.log(`🔍 Health check: /health`);
  console.log(`🌐 Serving static files from: ${path.join(__dirname, 'dist')}`);
});