import { PostsService } from './services';

const postsService = new PostsService();

const getPostsBtn = document.getElementById('get-posts-btn');
const getPostBtn = document.getElementById('get-post-btn');

getPostsBtn.addEventListener('click', async () => {
  try {
    const res = await postsService.getPosts();

    console.log("posts", res);
  } catch(e) {
    // Handling Error
  }
});

getPostBtn.addEventListener('click', async () => {
  try {
    const res = await postsService.getPost('1');

    console.log("post (1)", res);
  } catch(e) {
    // Handling Error
  }
});
