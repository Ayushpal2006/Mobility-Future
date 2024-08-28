import { useEffect, useState } from "react";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use `null` for the initial state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}api/auth/protected`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { isAuthenticated, loading };
}

export default useAuth;
