import { test, expect, request } from '@playwright/test';
import { UserAPI } from '../tests/pom/object/userAPI.js';
import { saveResponseToFile } from '../tests/utils/logAPI.js';

test.describe('Reqres API Tests', () => {
  let apiContext;
  let userAPI;

  test.beforeAll(async () => {
    apiContext = await request.newContext({});
    userAPI = new UserAPI(apiContext);
  });

  test('TC-001-API GET user by ID should return 200', async ({}, testInfo) => {
    const response = await userAPI.getUserById(2);
    const body = await response.json();
    console.log('TC-001 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(body.data.id).toBe(2);
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-002-API GET list users should return 200', async ({}, testInfo) => {
    const response = await userAPI.getUsersList(2);
    const body = await response.json();
    console.log('TC-002 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(body.page).toBe(2);
      expect(Array.isArray(body.data)).toBeTruthy();
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-003-API POST create user should return 201', async ({}, testInfo) => {
    const response = await userAPI.createUser('Fakhri Aria F', 'QA Engineer');
    const body = await response.json();
    console.log('TC-003 Response:', body);

    try {
      expect(response.status()).toBe(201);
      expect(body.name).toBe('Fakhri Aria F');
      expect(body.job).toBe('QA Engineer');
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-004-API PUT update user should return 200', async ({}, testInfo) => {
    const response = await userAPI.updateUserPut(2, 'Fakhri A', 'Qa Enggineer 2');
    const body = await response.json();
    console.log('TC-004 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(body.name).toBe('Fakhri A');
      expect(body.job).toBe('Qa Enggineer 2');
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-005-API PATCH update user should return 200', async ({}, testInfo) => {
    const response = await userAPI.updateUserPatch(2, 'Fakhri', 'QA QA');
    const body = await response.json();
    console.log('TC-005 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(body.name).toBe('Fakhri');
      expect(body.job).toBe('QA QA');
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-006-API DELETE user should return 204', async ({}, testInfo) => {
    const response = await userAPI.deleteUser(2);
    console.log('TC-006 Response Status:', response.status());

    try {
      expect(response.status()).toBe(204);
      await saveResponseToFile(testInfo.title, { status: 204 }, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, { status: response.status() }, 'failed');
      throw err;
    }
  });

  test('TC-007-API POST register user successfully should return 200', async ({}, testInfo) => {
    const response = await userAPI.registerUser('eve.holt@reqres.in', 'eve.holt@reqres.in"');
    const body = await response.json();
    console.log('TC-007 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(body).toHaveProperty('id');
      expect(body).toHaveProperty('token');
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-008-API POST register user unsuccessfully should return 400', async ({}, testInfo) => {
    const response = await userAPI.registerUser('fakhri@ahay', '');
    const body = await response.json();
    console.log('TC-008 Response:', body);

    try {
      expect(response.status()).toBe(400);
      expect(body).toHaveProperty('error');
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-009-API POST login user successfully should return 200', async ({}, testInfo) => {
    const response = await userAPI.loginUser('eve.holt@reqres.in', 'cityslicka');
    const body = await response.json();
    console.log('TC-009 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(body).toHaveProperty('token');
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-010-API POST login user unsuccessfully should return 400', async ({}, testInfo) => {
    const response = await userAPI.loginUser('fakhriaf16@gmail.com', '');
    const body = await response.json();
    console.log('TC-010 Response:', body);

    try {
      expect(response.status()).toBe(400);
      expect(body).toHaveProperty('error');
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-011-API GET list resource should return 200', async ({}, testInfo) => {
    const response = await userAPI.getResourceList();
    const body = await response.json();
    console.log('TC-011 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(Array.isArray(body.data)).toBeTruthy();
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });

  test('TC-012-API GET single resource by ID should return 200', async ({}, testInfo) => {
    const response = await userAPI.getResourceById(2);
    const body = await response.json();
    console.log('TC-012 Response:', body);

    try {
      expect(response.status()).toBe(200);
      expect(body.data.id).toBe(2);
      await saveResponseToFile(testInfo.title, body, 'passed');
    } catch (err) {
      await saveResponseToFile(testInfo.title, body, 'failed');
      throw err;
    }
  });
});
