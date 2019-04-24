import React,{Fragment,Component} from 'React';
require('../../src/mystyles.scss');
import Particle from "../components/particles";
import Logo from "../images/logo.svg";
import Collapse from "../images/collapse-button.svg";
import Arrow from '../images/arrow-right.svg'





export default class Main extends Component{
    render(){
        return <Fragment>
<section className="hero is-fullheight">
  <div className="hero-head">
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={Logo} alt="Logo" className="logo-gnar" />
          </a>
          
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
           
           
            <a className="navbar-item">
            <img src={Collapse} className="btn-toggle" />
            </a>
           
          </div>
        </div>
      </div>
    </header>
  </div>

  <div className="hero-body">
    <div className="container">
    <h1 class="title is-1">  <canvas  className="underline" />imagine  <canvas  className="dot" /></h1>
    <h1 class="title is-1">  <canvas  className="underline" />develop  <canvas  className="dot" /></h1>
    <h1 class="title is-1">  <canvas  className="underline" />launch  <canvas  className="dot" /></h1>


    </div>
  </div>

  <div className="hero-foot">
    <nav className=" is-fullwidth">
        <div className="columns">
        <div className="column is-3 is-offset-9">
        <a href="#/projects"><img src={Arrow} className="btn-footer" /> 
        <span className="see">SEE</span> 
        <span className="projects">PROJECTS</span>
        </a>
        </div>
      </div>
    </nav>
  </div>
</section>
<Particle/>
        </Fragment>
    }
}