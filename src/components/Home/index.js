import Header from '../Header'
import Form from '../Form'
import Footer from '../Footer'
import {
  ResponsiveContainer,
  HomePageImage,
  IntroImage,
  Icon,
  SectionContainer,
  CardContainer,
  TextContainer,
  ContainerWrap,
  IntroContainer,
  IntroCardContainer,
  CardsContainer,
  TitlePara,
  CardOne,
  CardTwo,
} from './styledComponents'
import './index.css'

const Home = () => (
  <>
    <Header />
    <ResponsiveContainer>
      <HomePageImage
        src="https://res.cloudinary.com/dieyyopcy/image/upload/v1675925609/rubixeHomeImage_hgf9os.jpg"
        alt="homeImage"
      />
      <SectionContainer>
        <CardContainer>
          <div>
            <h1>WHO WE ARE</h1>
            <p>
              Rubixe™ is a global technology company specializing in disruptive
              technologies - Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain, and Internet of
              Things (IoT).
              <br />
              Rubixe mission is to enable businesses to leverage the full
              potential of disruptive technologies and stay competitive in the
              market, turning complex challenges into solutions, providing a
              strategic competitive advantage that are more efficient,
              effective and predictable
            </p>
          </div>
          <IntroImage
            src="https://rubixe.com/img/incubationwht.jpg"
            alt="pic"
          />
        </CardContainer>
      </SectionContainer>
      <IntroContainer>
        <ContainerWrap>
          <TextContainer>
            <h1>WHERE WE STARTED</h1>
            <p>
              We started in 2015, With a passionate team who want to bring
              game-changing solutions through disrupting technologies. We
              expertise in delivering enterprise-level solutions in the field of
              Artificial Intelligence (AI), Cyber Security, Robotic Process
              Automation (RPA), Internet of Things (loT), and
              BlockChain technology.
            </p>
          </TextContainer>
        </ContainerWrap>
        <IntroCardContainer>
          <h1>TECH FOR TEENS - A RUBIXE INITIATIV</h1>
          <CardsContainer>
            <CardOne>
              <div className="heading-container">
                <h1 className="heading heading-blue">01</h1>
              </div>
              <div className="blue"> </div>
              <div>
                <Icon
                  src="https://cdn-icons-png.flaticon.com/512/1766/1766430.png"
                  alt="ai"
                />
                <TitlePara>
                  Introducing Al to children in an age appropriate manner.
                </TitlePara>
              </div>
            </CardOne>
            <CardTwo>
              <div>
                <Icon
                  src="https://cdn-icons-png.flaticon.com/512/8616/8616547.png"
                  alt="cloud-ai"
                />
                <TitlePara>
                  Introducing Al to children in an age appropriate manner.
                </TitlePara>
              </div>
              <div className="pink">
                <h1 className="heading heading-blue">02</h1>
              </div>
              <div className="heading-container"> </div>
            </CardTwo>
            <CardOne>
              <div className="heading-container">
                <h1 className="heading heading-blue">03</h1>
              </div>
              <div className="blue"> </div>
              <div>
                <Icon
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZH4rfmkwfo0AK_BXeUC324kjZZJuCzwbRcA&usqp=CAU"
                  alt="ai-brain"
                />
                <TitlePara>
                  Introducing Al to children in an age appropriate manner.
                </TitlePara>
              </div>
            </CardOne>
            <CardTwo>
              <div>
                <Icon
                  src="https://st2.depositphotos.com/6935094/11638/v/950/depositphotos_116386948-stock-illustration-icon-set-engineer.jpg"
                  alt="ai-project"
                />
                <TitlePara>
                  Introducing Al to children in an age appropriate manner.
                </TitlePara>
              </div>
              <div className="pink">
                <h1 className="heading heading-blue">04</h1>
              </div>
              <div className="heading-container"> </div>
            </CardTwo>
            <CardOne>
              <div className="heading-container">
                <h1 className="heading heading-blue">05</h1>
              </div>
              <div className="blue"> </div>
              <div>
                <Icon
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzN9L9bBWVUywugnQpW5ZI3nSDeX9JDbw0uQ&usqp=CAU"
                  alt="classroom"
                />
                <TitlePara>
                  Introducing Al to children in an age appropriate manner.
                </TitlePara>
              </div>
            </CardOne>
          </CardsContainer>
        </IntroCardContainer>
      </IntroContainer>
      <div className="form-container">
        <Form />
      </div>
      <Footer />
    </ResponsiveContainer>
  </>
)

export default Home
