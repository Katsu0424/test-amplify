import React, { useEffect, useState } from "react";
import "./App.css";
import awsconfig from "./aws-exports";
import { API, Amplify } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

Amplify.configure(awsconfig);

function App() {
  const [response, setResponse] = useState(null);

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await API.get("pythonapi", "/hello");
        setResponse(result);
        const result1 = await API.get("api69f93de5", "/");
        console.log('#################');
        console.log(result1);
        console.log('#################');
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <h2>Hello, {user.username}</h2>
      {response && (
        <h2>{JSON.stringify(response.message, null, 2)}</h2>
      )}
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
        ]}
      />
      <h2>User Created!</h2>
      {response && (
        <h2>{JSON.stringify(response.message, null, 2)}</h2>
      )}
    </AmplifyAuthenticator>
  );
}

export default App;
