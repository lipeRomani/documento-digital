import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Grid, Row, Col} from 'react-flexbox-grid';

const LoadingCentered = () => (
  <Grid style={{marginTop: "3em"}}>
    <Row center="md">
      <Col md={12}>
        <CircularProgress size={80} thickness={5} />
      </Col>
    </Row>
  </Grid>
);

export default LoadingCentered;