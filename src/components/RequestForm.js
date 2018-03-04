import React, { Component }  from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import {
  SelectField,
  TextField,
} from 'redux-form-material-ui'
import MenuItem from 'material-ui/MenuItem';
import {
  getAllCompanys,
  getAllDocuments,
} from '../utils/api';
import CircularProgress from 'material-ui/CircularProgress';
import { greenGrey } from '../utils/colors';
import { 
  required,
  email,
  minLength
 } from '../utils/formValidate';

class RequestForm extends Component {
  
  state = {
    isLoading: false,
    companys: [],
    documentsType: [],
  }

  componentDidMount() {
    this.setState({isLoading: true});

    getAllCompanys()
      .then(companys => {    
        if (this.state.documentsType.length !== 0) {
          this.setState({companys, isLoading: false});
        } else {
          this.setState({companys});
        }
      })

    getAllDocuments()
      .then(documentsType => {
        if (this.state.companys.length !== 0) {
          this.setState({documentsType, isLoading: false});
        } else {
          this.setState({documentsType});
        }
      })
  }

  render() {
    const { handleSubmit, pristine, invalid, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid fluid>
          <Row>
            <Col md={12}>
              {this.state.isLoading && 
                <Grid>
                  <Row center="md">
                    <Col md={12}>
                      <CircularProgress color={greenGrey} size={80} thickness={5}/>
                    </Col>
                  </Row>
                </Grid>    
              }

              {!this.state.isLoading && 
                <div>
                  <Field 
                    name='requester' 
                    component={TextField} 
                    floatingLabelText='Solicitante*' 
                    hintText="Nome completo" 
                    fullWidth 
                    validate={[required, minLength(5)]}/>

                  <Field 
                    name='requesterEmail' 
                    component={TextField} 
                    floatingLabelText='E-mail*' 
                    hintText="Seu e-mail" 
                    fullWidth 
                    validate={[required, email]}/>

                  <Field name="companyRequested" component={SelectField} hintText="Empresa solicitada*" fullWidth style={{marginTop: '1em'}} validate={required}>
                    {this.state.companys.map(company => (
                      <MenuItem key={company} value={company} primaryText={company} />
                    ))}
                  </Field>

                  <Field name="documents" component={SelectField} hintText="Selecione os documentos desejados*" fullWidth multiple style={{marginTop: '1em'}} validate={required}>
                    {this.state.documentsType.map(documentType => (
                      <MenuItem key={documentType} value={documentType} primaryText={documentType} />
                    ))}
                    
                  </Field>

                  <RaisedButton primary disabled={pristine || invalid || submitting} type="submit" label="Solicitar" />
                </div>
              }
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newRequestForm',
})(RequestForm);