import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from 'db/user.json';
import data from 'db/data.json';

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
    </>
  );
};

export default App;
