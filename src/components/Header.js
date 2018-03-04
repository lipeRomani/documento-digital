import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { greenGrey, white } from '../utils/colors';

const Header = (props) => (
  <Grid fluid style={{backgroundColor: greenGrey}}>
      <Row start='md'>
        <Col md={2}>
          <h3 style={{color: white }}>Documento <small>digital</small></h3>
        </Col>
      </Row>
  </Grid>
);

export default Header;