// Check if user is authenticated
async function checkAuth() {
  try {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    
    if (clientPrincipal) {
      console.log('User is authenticated:', clientPrincipal.userDetails);
      // User is logged in
      return clientPrincipal;
    } else {
      console.log('User is not authenticated');
      // Redirect to B2C login
      window.location.href = 'https://zimaxai.b2clogin.com/zimaxai.onmicrosoft.com/oauth2/v2.0/authorize?p=signupsignin1&client_id=806c6f27-96c8-452e-875d-54489819b402&redirect_uri=https://ddbm.us&response_type=code&scope=openid';
      return null;
    }
  } catch (error) {
    console.error('Auth check failed:', error);
    return null;
  }
}

// Call on page load
checkAuth(); 