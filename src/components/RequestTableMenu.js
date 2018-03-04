import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RequestForm from '../components/RequestForm';

const RequestTableMenu = (props) => {
  const { onOpenCreateRequestModal, onCloseCreateRequestModal, isOpenCreateRequestModal, onSubmitNewRequest } = props;

  const modalActions = [
    <FlatButton
      label="Sair"
      secondary
      onClick={onCloseCreateRequestModal}
    />,
  ];

  return (
    <div>
      <Toolbar>
        <ToolbarGroup firstChild>
          <RaisedButton label="Nova requisição" primary={true} onClick={onOpenCreateRequestModal} />
        </ToolbarGroup>
      </Toolbar>

      <Dialog
          title="Nova requisição de documentos"
          actions={modalActions}
          modal={true}
          open={isOpenCreateRequestModal}
          onRequestClose={onCloseCreateRequestModal}
        >
        <RequestForm onSubmit={onSubmitNewRequest} />
        </Dialog>
    </div>
  )
}

export default RequestTableMenu;
