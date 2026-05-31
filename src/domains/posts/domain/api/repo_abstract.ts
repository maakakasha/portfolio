import type { Post } from "../entities/post";

export class PostsRepoAbstract {
  getPosts(): Post {
    return {} as Post;
  }
}
