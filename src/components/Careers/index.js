import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import Footer from '../Footer'
import CareerBlock from '../CareerBlock'
import './index.css'

const myCareerList = [
  {
    name: 'Business Analyst',
    id: uuidv4(),
    matter:
      'Years of Experience: 1 Year The ideal candidate for this position should be able to Analyze the requirements from the business perspective, how it uses technology and what its goals are Do market research and formulate strategies to improve the product proposition Persuade internal and external stakeholders in product development Able to formulate and execute marketing strategies Own to product development Good understanding of how a market place work. Passionate about building products to market needs. A good team player, communicator, collaborator and negotiator Good conflict resolution skills.',
  },
  {
    name: 'Digital Marketing Manager',
    id: uuidv4(),
    matter:
      'Years of Experience: 1 Year The ideal candidate for this position should be able to Analyze the requirements from the business perspective, how it uses technology and what its goals are Do market research and formulate strategies to improve the product proposition Persuade internal and external stakeholders in product development Able to formulate and execute marketing strategies Own to product development Good understanding of how a market place work. Passionate about building products to market needs. A good team player, communicator, collaborator and negotiator Good conflict resolution skills.',
  },
  {
    name: 'Robotic Process Automation (RPA)',
    id: uuidv4(),
    matter:
      'Years of Experience: 1 Year The ideal candidate for this position should be able to Analyze the requirements from the business perspective, how it uses technology and what its goals are Do market research and formulate strategies to improve the product proposition Persuade internal and external stakeholders in product development Able to formulate and execute marketing strategies Own to product development Good understanding of how a market place work. Passionate about building products to market needs. A good team player, communicator, collaborator and negotiator Good conflict resolution skills.',
  },
  {
    name: 'Robotic Process Automation Lead (RPA)',
    id: uuidv4(),
    matter:
      'Years of Experience: 1 Year The ideal candidate for this position should be able to Analyze the requirements from the business perspective, how it uses technology and what its goals are Do market research and formulate strategies to improve the product proposition Persuade internal and external stakeholders in product development Able to formulate and execute marketing strategies Own to product development Good understanding of how a market place work. Passionate about building products to market needs. A good team player, communicator, collaborator and negotiator Good conflict resolution skills.',
  },
  {
    name: 'Robotic Process Automation Lead (RPA)',
    id: uuidv4(),
    matter:
      'Years of Experience: 1 Year The ideal candidate for this position should be able to Analyze the requirements from the business perspective, how it uses technology and what its goals are Do market research and formulate strategies to improve the product proposition Persuade internal and external stakeholders in product development Able to formulate and execute marketing strategies Own to product development Good understanding of how a market place work. Passionate about building products to market needs. A good team player, communicator, collaborator and negotiator Good conflict resolution skills.',
  },
  {
    name: 'Robotic Process Automation Lead (RPA Developers)',
    id: uuidv4(),
    matter:
      'Years of Experience: 1 Year The ideal candidate for this position should be able to Analyze the requirements from the business perspective, how it uses technology and what its goals are Do market research and formulate strategies to improve the product proposition Persuade internal and external stakeholders in product development Able to formulate and execute marketing strategies Own to product development Good understanding of how a market place work. Passionate about building products to market needs. A good team player, communicator, collaborator and negotiator Good conflict resolution skills.',
  },
]

class Careers extends Component {
  state = {
    careerList: myCareerList,
    showList: [],
  }

  onClickJoin = () => {
    const {history} = this.props
    history.push('/apply-online')
  }

  onClickCareer = id => {
    const {showList} = this.state
    const element = showList.filter(each => each === id)
    if (element.length === 0) {
      return this.setState(prevState => ({
        showList: [...prevState.showList, id],
      }))
    }
    const newList = showList.filter(each => each !== id)
    return this.setState({showList: newList})
  }

  render() {
    const {careerList, showList} = this.state
    return (
      <>
        <div className="absolute">
          <Header />
        </div>
        <div className="careers-main-container">
          <div className="careers-top-container"> </div>
          <ul className="middle-container">
            {careerList.map(each => (
              <CareerBlock
                key={each.id}
                details={each}
                onClickCareer={this.onClickCareer}
                showList={showList}
              />
            ))}
          </ul>
          <div className="careers-bottom-container">
            <h1>We Are Hiring</h1>
            <button
              type="button"
              className="let-join-button"
              onClick={this.onClickJoin}
            >
              LET{`'`}S JOIN WITH US
            </button>
          </div>

          <Footer />
        </div>
      </>
    )
  }
}

export default Careers
