import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import AuthorsList from './features/authors/AuthorsList';
import AuthorPage from './features/authors/AuthorPage';
import BookList from './features/books/BookList';
import BookPage from './features/books/BookPage';
import PublishersList from './features/publishers/PublishersList';
import PublisherPage from './features/publishers/PublisherPage';
import UserInfo from './features/users/UserInfo';
import Login from './features/users/Login';
import SignUp from './features/users/SignUp';
import { userAdded } from './features/users/usersSlice';
import { fetchBooks } from './features/books/booksSlice';
import { fetchPublishers } from './features/publishers/publishersSlice';
import { fetchAuthors } from './features/authors/authorsSlice';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  const loggedIn = useSelector(state => state.users.loggedIn);

  useEffect(() => {
    fetch("/me").then((res) => {
        if (res.ok) {
          res.json().then((user) => 
            {
              dispatch(userAdded(user))
            })
            .then(() => {
              dispatch(fetchBooks());
              dispatch(fetchPublishers());
              dispatch(fetchAuthors());
            })
        };
    });
  }, [loggedIn]);

  console.log(user)

  if (user) { 

  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
          <BookList />
      </Route>
      <Route path="/books/:book_id">
          <BookPage />
      </Route>
      <Route exact path="/publishers/">
          <PublishersList />
      </Route>
      <Route path="/publishers/:publisher_id">
          <PublisherPage />
      </Route>
      <Route  exact path="/authors">
          <AuthorsList />
      </Route>
      <Route  path="/authors/:author_id">
          <AuthorPage />
      </Route>
      <Route path="/user">
          <UserInfo />
      </Route>
    </Switch>
  </div>
  );
  }

  return (
    <div>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
