import {AiOutlineRight, AiOutlineDown} from 'react-icons/ai'
import './index.css'

const CareerBlock = props => {
  const {details, showList, onClickCareer} = props
  const {id, name, matter} = details
  console.log(details)
  console.log(id)
  const onChoose = () => {
    onClickCareer(id)
  }
  console.log(showList)
  const show = showList.includes(id)
  return (
    <li className="career-list-item">
      <button type="button" onClick={onChoose} className="career-item-btn">
        <div className="btn-div">
          {show ? (
            <AiOutlineDown className="arrow-icon" />
          ) : (
            <AiOutlineRight className="arrow-icon" />
          )}
          <h1 className="career-title ">{name}</h1>
        </div>
      </button>
      {show ? <p>{matter}</p> : null}
      <hr />
    </li>
  )
}

export default CareerBlock
