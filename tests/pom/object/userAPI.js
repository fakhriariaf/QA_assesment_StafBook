export class UserAPI {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://reqres.in/api';
    this.headers = {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json',
    };
  }

  async getUserById(userId) {
    return await this.request.get(`${this.baseUrl}/users/${userId}`, {
      headers: this.headers,
    });
  }

  async getUsersList(page = 1) {
    return await this.request.get(`${this.baseUrl}/users?page=${page}`, {
      headers: this.headers,
    });
  }

  async createUser(name, job) {
    return await this.request.post(`${this.baseUrl}/users`, {
      headers: this.headers,
      data: { name, job },
    });
  }

  async updateUserPut(userId, name, job) {
    return await this.request.put(`${this.baseUrl}/users/${userId}`, {
      headers: this.headers,
      data: { name, job },
    });
  }

  async updateUserPatch(userId, name, job) {
    return await this.request.patch(`${this.baseUrl}/users/${userId}`, {
      headers: this.headers,
      data: { name, job },
    });
  }

  async deleteUser(userId) {
    return await this.request.delete(`${this.baseUrl}/users/${userId}`, {
      headers: this.headers,
    });
  }

  async registerUser(email, password) {
    return await this.request.post(`${this.baseUrl}/register`, {
      headers: this.headers,
      data: { email, password },
    });
  }

  async loginUser(email, password) {
    return await this.request.post(`${this.baseUrl}/login`, {
      headers: this.headers,
      data: { email, password },
    });
  }

  async getResourceList() {
    return await this.request.get(`${this.baseUrl}/unknown`, {
      headers: this.headers,
    });
  }

  async getResourceById(id) {
    return await this.request.get(`${this.baseUrl}/unknown/${id}`, {
      headers: this.headers,
    });
  }
}
