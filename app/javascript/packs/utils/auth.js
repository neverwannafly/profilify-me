function AuthManager() {
  this.id;
  this.username;
  this.token;
  this.email;
  this.name;

  this.setUser = (payload) => {
    this.id = payload.id;
    this.username = payload.username;
    this.token = payload.token;
    this.email = payload.email;
    this.name = payload.name;
  }

  this.attachUser = (payload) => {
    return {
      ...payload,
      id: this.id,
      token: this.token,
    };
  }

  this.clearUser = () => {
    this.id = null;
    this.username = null;
    this.token = null;
    this.email = null;
    this.name =  null;
  }
};

const authManager = new AuthManager();

export default authManager;