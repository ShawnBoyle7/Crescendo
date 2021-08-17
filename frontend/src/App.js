import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Artists from "./components/Artists";
import Artist from "./components/Artist";
import { getArtists } from "./store/artists";

// Re evaluate all the dispatching below

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // Artists Slice of state below

  const artistsSlice = useSelector(state => state.artists)

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch])

  const artists = Object.values(artistsSlice)
  
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          
          <Route exact path="/">
            hey
          </Route>
          
          <Route path="/login">
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>
           
          <Route exact path="/artists">
            <Artists artists={artists}/>
          </Route>

          <Route path="/artists/:artistId">
            <Artist artists={artists}/>
          </Route>

          <Route>
            404 not found
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;