import Card from './Card/Card';
import user from '../../src/user.json';

export const App = () => {
  console.log(user);
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template - modificat
        <Card user={user} />
      </div>
    </>
  );
};
