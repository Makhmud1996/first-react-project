import React, { Component } from 'react'

import { Container, Wrapper, } from './style'
import Button from '../Generic/Button'


export default class Navbar extends Component {
  render() {
    return (
      <Wrapper>
       <Container>
        <Container.Column>
            <nav>
                <Container.Column.Ul>
                    <Container.Column.Li>Movies</Container.Column.Li>
                    <Container.Column.Li>TV-Shows</Container.Column.Li>
                    <Container.Column.Li>Documentaries</Container.Column.Li>
                </Container.Column.Ul>
            </nav>

        </Container.Column>
        <Container.Column>
            <Container.Column.Logo/>
        </Container.Column>
        <Container.Column>
        <Container.Column.Search/>
        <Container.Column.Notification/>
        {/* <Button type='primary' icon={<Container.Column.PlayIcon/>} >Sign In</Button> */}
        {/* <Button type='secondary' mr='10px'>Sign In</Button> */}
        <Button>Sign In</Button>

        </Container.Column>
        </Container> 
        </Wrapper>
    )
  }
}
