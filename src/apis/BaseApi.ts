/**
 * RESOURCES
 * /posts	100 posts
 * /comments	500 comments
 * /albums	100 albums
 * /photos	5000 photos
 * /todos	200 todos
 * /users	10 users
 */

export interface Configuration {
  baseUrl?: string;
  accessToken?: string;
  options?: any;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default class BaseApi {
  protected configuration?: Configuration;

  constructor(configuration = {} as Configuration) {
    if (configuration) {
      this.configuration = configuration;
    }

    this.configuration.baseUrl = configuration.baseUrl ?? BASE_URL;
  }
}
