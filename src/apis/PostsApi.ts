import axios, { Method } from 'axios';

import BaseApi, { Configuration } from './BaseApi';

const getPostsParamsCreator = (configuration?: Configuration) => {
  return {
    // 100 posts
    getPosts() {
      const route = 'posts';

      const requestOptions = {
        method: 'GET' as Method
      };
      const headerParameters = {};

      if (configuration.accessToken) {
        headerParameters['Authorization'] = `Bearer ${configuration.accessToken}`;
      }

      const options = {
        ...requestOptions,
        headers: headerParameters
      };

      return {
        url: `${configuration.baseUrl}/${route}`,
        options
      };
    },
    // 1 post
    getPost(id: string) {
      const route = `posts/${id}`;

      const requestOptions = {
        method: 'GET' as Method
      };
      const headerParameters = {};

      if (configuration.accessToken) {
        headerParameters['Authorization'] = configuration.accessToken;
      }

      if (configuration.options) {
        // Do something...
      }

      const options = {
        ...requestOptions,
        headers: headerParameters
      };

      return {
        url: `${configuration.baseUrl}/${route}`,
        options
      };
    }
  };
};

const getPostsConcreteRequest = (configuration?: Configuration) => {
  return {
    async getPosts() {
      const {
        url,
        options
      } = getPostsParamsCreator(configuration).getPosts();

      return axios.request({
        url,
        ...options
      });
    },
    async getPost(id: string) {
      const {
        url,
        options
      } = getPostsParamsCreator(configuration).getPost(id);

      return axios.request({
        url,
        ...options
      });
    }
  };
};

export default class PostsApi extends BaseApi {
  constructor(configuration?: Configuration) {
    super(configuration);
  }

  public async getPosts() {
    return getPostsConcreteRequest(this.configuration)
      .getPosts();
  }

  public async getPost(id: string) {
    return getPostsConcreteRequest(this.configuration)
      .getPost(id);
  }
}
