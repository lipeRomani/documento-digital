import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import * as requestUtils from '../utils/request';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const RequestTable = (props) => {
  const { requests, onRowSelection, onCloseDetailCard, selectedRequestId } = props;
  const selectedRequest = requestUtils.selectRequestById(selectedRequestId, requests);

  return (
    <div>
   { !requests && 
      <Grid fluid>
        <Row center="md">
          <Col md={12}>
            <p>Não existem requisições</p>
          </Col>
        </Row>
      </Grid>
    }

    {requests &&
      <Grid fluid>
        <Row>
          <Col md={selectedRequestId ? 8 : 12}>
            <Table onRowSelection={onRowSelection}>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Solicitante</TableHeaderColumn>
                  <TableHeaderColumn>Empresa solicitada</TableHeaderColumn>
                  <TableHeaderColumn>Solicitado em</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody deselectOnClickaway={false}>
              {requests.map(request => (
                <TableRow key={request.id} selected={selectedRequestId === request.id}>
                  <TableRowColumn>{request.id}</TableRowColumn>
                  <TableRowColumn>{request.requester}</TableRowColumn>
                  <TableRowColumn>{request.companyRequested}</TableRowColumn>
                  <TableRowColumn>{request.requestDate}</TableRowColumn>
                </TableRow>
              ))}
              </TableBody>
            </Table>
          </Col>
          {selectedRequestId && 
            <Col md={4}>
              <Card style={{ marginTop: '2em'}}>
                <CardHeader
                  title={`Requisição ${selectedRequest.id}`}
                  subtitle={`Solicitante: ${selectedRequest.requester}`}
                />
                <CardText>
                  <h4>Documentos solicitados</h4>
                  <p>{selectedRequest.documents.join(', ')}</p>
                  <p><small>Solicitado em: {selectedRequest.requestDate}</small></p>
                </CardText>
                <CardActions>
                  <FlatButton secondary label="Fechar" onClick={onCloseDetailCard} />
                </CardActions>
              </Card>
            </Col>
          }
        </Row>
      </Grid>
    }
    </div>
  )
}

export default RequestTable;