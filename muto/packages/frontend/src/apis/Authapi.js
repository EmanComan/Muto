class AuthApi {
    async login({ email, password }) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          if (data && data.status === 200) {
            localStorage.setItem('accessToken', data.token);
            resolve(data);
            window.location.reload(false);
          } else {
            reject(new Error('Please check your email or password'))
          }
        } catch (error) {
          reject(new Error('Internal server error'));
        }
      })
    }
  
    me(accessToken) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login/${accessToken}`, {
            headers: {
              'Content-Type': 'Application/json'
            }
          });
          const data = await response.json();
          if (data && data.status === 200) {
            resolve(data.data);
          } else {
            reject(new Error('Invalid authorization token'));
          }
        } catch (error) {
          reject(new Error('Internal server error'));
        }
      });
    }
  };
  
  export const authApi = new AuthApi();
  