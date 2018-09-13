import React, { Component } from 'react'

import {THUNKDASISTEINEACTION} from './redux/action/Types';
import {THUNKDASISTEINEACTIONZWEI} from './redux/action/Types';


import {connect} from 'react-redux';

import { Button } from 'semantic-ui-react'


//Semantic Responsive
import { Responsive, Segment } from 'semantic-ui-react'

//Meine eigene Smartphone Media Queries
import './smartphone.css';


//chart DevExtrem
import Diagramm from './chart'


//TIPP: Semantic UI <img>  muß auf <img/> geändert werden
// Und class sollte zu className geändert werden

 class StartSeite extends Component {
  

  render()   
  {

    
    return (
      
  <div>
      <Segment.Group>
          <Responsive as={Segment}>
          THUNKDASISTEINEACTION
              <div style={{marginTop:5}}
                   className="ui three column grid">

                    <div
                    className="column">
                      <div className="ui segment" >
                        <img style={{maxWidth:"100%"}}
                        src="https://html.com/wp-content/uploads/flamingo.jpg" alt=""/>
                          <div style={{width:"100%"}}>
                             <Button 
                                  style={{color:this.props.einfaerben, marginLeft: "33.33%" }}
                                  onClick={this.props.nameOffTheAction}
                                  >
                                  Klick Mich
                              </Button>
                          </div>
                      </div>
                    </div>

                    <div 
                    className="column">
                      <div className="ui segment">
                      <img style={{maxWidth:"100%"}}
                      src="https://html.com/wp-content/uploads/flamingo.jpg" alt=""/>
                      <div style={{width:"100%"}}>
                             <Button 
                                  style={{color:this.props.einfaerben, marginLeft: "33.33%" }}
                                  onClick={this.props.nameOffTheAction}
                                  >
                                  Klick Mich
                              </Button>
                          </div>
                      </div>
                    </div>

                  <div className="column">
                    <div className="ui segment">
                    <img style={{maxWidth:"100%"}}
                    src="https://html.com/wp-content/uploads/flamingo.jpg" alt=""/>
                  
                    <div style={{width:"100%"}}>
                             <Button 
                                  style={{color:this.props.einfaerben, marginLeft:"33.33%"}}
                                  onClick={this.props.nameOffTheAction}
                                  >
                                  Klick Mich
                              </Button>
                          </div>
                        
                    </div>
                  </div>


                <div className="media" style={{width:100, height:200}}></div>

                <div style={{width:"100%"}} >
                <div style={{ marginLeft:"33.33%"}}
                className="ui grid">
                  <div className="four wide column">
                    <Diagramm/>
                  </div>
                </div>
                </div>

                <Button style={{width:100, height: 100}}
                onClick={() => this.props.THUNKDASISTEINEACTION()}
                >Dispatch Function</Button>

                <Button style={{width:100, height: 100, color: this.props.einfaerbenzwei}}
                onClick={() => this.props.THUNKDASISTEINEACTIONZWEI()}
                >Dispatch Function Zwei</Button>

            </div>
      </Responsive>
    </Segment.Group>

</div>

        
       
      

    );
  }
}

function mapStateToProps(state){
  return {
    einfaerben: state.einfaerben.einfaerben,
    einfaerbenzwei: state.einfaerbenzwei.einfaerbenzwei
  
  
  }
}

const mapDispatchToProps =  { 

  THUNKDASISTEINEACTION,
  THUNKDASISTEINEACTIONZWEI

}


export const StartConnect = connect(mapStateToProps, mapDispatchToProps)(StartSeite);



