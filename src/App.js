import Card from './components/Card';

import logo from './logo.svg';

function App() {
  const contactInfo = [
    {
      name: 'Emmanuelle',
      email: 'emmanuelle@email.com',
      phone: '552312354',
      profesion: 'Architect',
      picture: require('./assets/1.png')
    },
    {
      name: 'Lucas',
      email: 'lucas@email.com',
      phone: '234983499',
      profesion: 'Dentist',
      picture: require('./assets/2.png')
    },
    {
      name: 'Johana',
      email: 'Johana@email.com',
      phone: '92034902',
      profesion: 'Scientist',
      picture: require('./assets/3.png')
    },
    {
      name: 'Pedro',
      email: 'Pedro@email.com',
      phone: '934584875',
      profesion: 'Writer',
      picture: require('./assets/4.png')
    },
    {
      name: 'Marie',
      email: 'Marie@email.com',
      phone: '238942384',
      profesion: 'Model',
      picture: require('./assets/5.png')
    },
    {
      name: 'Wally',
      email: 'Wally@email.com',
      phone: '65985941259',
      profesion: 'Développeur',
      picture: require('./assets/6.png')
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Titre</h1>
      {contactInfo.map((contact) => (
        <Card 
        picture={contact.picture}
        name={contact.name}
        profesion={contact.profesion}
        email={contact.email}
        phone={contact.phone}
        />
      ))}
    </div>
  );
}

export default App;
