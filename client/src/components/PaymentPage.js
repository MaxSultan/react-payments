import React, { Component, } from 'react';
import { Segment, Input, Label, } from 'semantic-ui-react';
import BriantreeDrop from './BraintreeDrop';
import mmhs_wrestling from '../image/IMG_3456.jpg'

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  state = { amount: null };
  

  render() {
    const { amount, } = this.state;

    return (
      <div ref="payment" style={{backgroundImage:`url(${mmhs_wrestling}`, backgroundSize:'cover', height:'100vh' }}>
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)', height:'100vh', display:'flex', justifyContent:'space-around', alignItems:'flex-end'}}>
        <Segment basic textAlign='center'>
          <Input 
          labelPosition='right' 
          type='text' 
          placeholder='Donation Amount' 
          value={amount} 
          onChange={(e) => this.setState({amount: e.target.value})} 
          style={{ fontSize: '18px', }}
          >
            <Label basic>$</Label>
            <input />
            <Label color='black'>.00</Label>
          </Input>
          <BriantreeDrop amount={amount} style={{zIndex:'2', fleGrow:'10'}}/>
        </Segment>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
