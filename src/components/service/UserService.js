export const signUp = (user) => {
   
    fetch("http://localhost:8080/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
}

export const login = (user) => {
   
  fetch("http://localhost:8080/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
}