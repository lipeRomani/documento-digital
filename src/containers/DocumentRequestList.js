import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import RequestTable from '../components/RequestTable';
import RequestTableMenu from '../components/RequestTableMenu';
import LoadingCentered from '../components/LoadingCentered';
import { 
  fetchAddAllRequests,
  selectRequest,
  createNewRequest,
} from '../actions/requestsAction';
import {
  openCreateRequestModal,
  closeCreateRequestModal,
} from '../actions/modalAction';

class DocumentRequestList extends Component {
  
  componentDidMount() {
    this.props.addAllRequests();
  }

  onRowSelection = (tableSelect) => {    
    if (tableSelect && tableSelect.length > 0) {
      const index = tableSelect[0];
      const {id} = this.props.requests.list[index];
      this.props.selectRequest(id);
    } else {
      this.props.selectRequest(null);
    }
  }

  onCloseDetailCard = () => {
    this.props.selectRequest(null);
  }

  onSubmitNewRequest = (values) => {
    this.props.closeCreateRequestModal();
    this.props.createNewRequest(values);
  }

  render() {
    const { requests } = this.props;
    return (
      <div>
        <Header />
        <RequestTableMenu
          onSubmitNewRequest={this.onSubmitNewRequest}
          onOpenCreateRequestModal={this.props.openCreateRequestModal}
          onCloseCreateRequestModal={this.props.closeCreateRequestModal}
          isOpenCreateRequestModal={this.props.modal.isOpenCreateRequest}
          />
        {this.props.loading.isLoadingRequestList 
          ? <LoadingCentered />
          : <RequestTable 
              requests={requests.list} 
              onRowSelection={this.onRowSelection} 
              selectedRequestId={requests.selectedId}
              onCloseDetailCard={this.onCloseDetailCard} />
        }
        
      </div>
    )
  }
} 


const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    addAllRequests: () => dispatch(fetchAddAllRequests()),
    selectRequest: (index) => dispatch(selectRequest(index)),
    openCreateRequestModal: () => dispatch(openCreateRequestModal()),
    closeCreateRequestModal: () => dispatch(closeCreateRequestModal()),
    createNewRequest: (request) => dispatch(createNewRequest(request)),
  };
}

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(DocumentRequestList);