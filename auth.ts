const authOptions = {
    async authorize(credentials: { email: string; }, req: any) {
          
          try {
            const res = await fetch("http://localhost:8000/auth/login", {
              method: "POST",
              body: JSON.stringify({
                email: credentials.email,
              }),
              headers: { "Content-Type": "application/json" },
            });
  
            if (!res.ok) {
              // credentials are invalid
              return null;
            }
  
            const parsedResponse = await res.json();
  
            // accessing the jwt returned by server
            const jwt = parsedResponse.access_token;
  
  // You can make more request to get other information about the user eg. Profile details
  
           // return user credentials together with jwt
            return {
              ...credentials,
              jwt,
            };
          } catch (e) {
            return null;
          }
        },
  }