import {Component} from 'react'
import './index.css'

class Firstfolder extends Component {
  delete = () => {
    const {kanupriya, mani} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = kanupriya
    mani(id)
  }

  render() {
    const {kanupriya} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = kanupriya
    return (
      <li className="list1">
        <div className="brar">
          <div>
            <p className="titli">{timeAccessed}</p>
          </div>

          <div className="mala">
            <img src={logoUrl} className="magar" alt="domain logo" />
            <p className="titli">{domainUrl}</p>
            <p className="titli">{title}</p>
          </div>
        </div>

        <div>
          <button testId="delete" type="button" onClick={this.delete}>
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="bin"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default Firstfolder
