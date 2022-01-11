import { PostsApi } from '../apis';

import { Post } from '../models';

export default class PostsService {
  private get postsApi() {
    return new PostsApi();
  }

  public async getPosts() {
    const res = await this.postsApi.getPosts();

    // Error Handling

    return res.data?.map(v => new Post(v));
  }

  public async getPost(id: string) {
    const res = await this.postsApi.getPost(id);

    // Error Handling

    return new Post(res.data);
  }
}
