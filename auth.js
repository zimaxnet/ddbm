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
      // Redirect to login
      window.location.href = '/.auth/login/aad';
      return null;
    }
  } catch (error) {
    console.error('Auth check failed:', error);
    return null;
  }
}

// Call on page load
checkAuth(); 