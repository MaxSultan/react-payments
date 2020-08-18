import React, { Component, } from 'react';
import { Header, Segment, Input, Label, Divider, Image, } from 'semantic-ui-react';
import BriantreeDrop from './BraintreeDrop';

class Home extends Component {
  state = { amount: 0.00, };

  render() {
    const { amount, } = this.state;

    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>React Payments</Header>
        <Image centered size='small' src='https://supergirlfit.com/wp-content/uploads/2015/05/bag-of-groceries.jpg' />
        <Label color='green'>Payment Amount</Label>
        <Input value={amount} onChange={(e) => this.setState({amount: e.target.value})} style={{ fontSize: '18px', }} />
        <Divider />
        <BriantreeDrop amount={amount} />
      </Segment>
    );
  }
}

export default Home;
