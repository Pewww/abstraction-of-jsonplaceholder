// Explicit Type Declaration
interface PostDtoFromServer {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default class Post {
  private readonly postDto: PostDtoFromServer;

  constructor(postDto: PostDtoFromServer) {
    this.postDto = postDto;
  }

  public get id() {
    return this.postDto.id;
  }

  public get userId() {
    return this.postDto.userId;
  }

  public get title() {
    const MAX_SHOW_LENGTH = 10;

    return this.postDto.title.slice(0, MAX_SHOW_LENGTH);
  }

  public get contents() {
    return this.postDto.body;
  }
}
