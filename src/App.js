import './App.css'
import {Component} from 'react'
import Firstfolder from './components/Firstfolder'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {initialHistoryList1: initialHistoryList, searchInput: ''}

  mani = id => {
    const {initialHistoryList1} = this.state
    const filtered = initialHistoryList1.filter(each => each.id !== id)
    this.setState({initialHistoryList1: filtered})
  }

  khushi = event => {
    this.setState({searchInput: event.target.value})
  }

  salon = () => {
    const {initialHistoryList1, searchInput} = this.state
    const rahu = initialHistoryList1.filter(aich =>
      aich.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return rahu
  }

  watches = mona => {
    if (mona.length === 0) {
      return <p>There is no history to show</p>
    }
    return mona.map(eachone => (
      <Firstfolder kanupriya={eachone} mani={this.mani} key={eachone.id} />
    ))
  }

  render() {
    const mona = this.salon()

    return (
      <div className="bg-container">
        <div className="titlebar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="photu"
            alt="app logo"
          />
          <div className="mixi">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searching"
            />
            <input type="search" onChange={this.khushi} className="input1" />
          </div>
        </div>

        <div className="bg-container2">
          <ul>{this.watches(mona)}</ul>
        </div>
      </div>
    )
  }
}

export default App
