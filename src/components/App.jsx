import Profile from './Profile/Profile';
import DataTable from './Statistics/DataTable';
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

      <DataTable stats={data} />
    </>
  );
};

export default App;
