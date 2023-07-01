export const signUp = (user) => {

    fetch("http://localhost:8080/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json()) 
      .then(data => {
        const token = data.token;
        localStorage.setItem("token", token); 
      })
      .catch(error => {
        console.error('Registration failed:', error);
      });
}

export const login = (user) => {
  fetch("http://localhost:8080/api/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json()) 
    .then(data => {
      const token = data.token;
      localStorage.setItem("token", token); 
    })
    .catch(error => {
      console.error('Login failed:', error);
    });
}