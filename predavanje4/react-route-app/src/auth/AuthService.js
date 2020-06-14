
class AuthService {
  isAuthenticated = false;
  getAuthStatus() { return this.isAuthenticated; }
  login() {
    this.isAuthenticated = true;
    alert("logged in")
  }
  logout() {
    this.isAuthenticated = false;
    window.location.href = "/"
    alert("Logged out")
  }
}
export const auth = new AuthService();
