import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { openCreateRequestModal } from '../actions/modalAction';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const RequestTableMenu = (props) => {
  const { onOpenCreateRequestModal, onCloseCreateRequestModal, isOpenCreateRequestModal } = props;

  const modalActions = [
    <FlatButton
      label="Sair"
      primary={true}
      onClick={onCloseCreateRequestModal}
    />,
    <FlatButton
      label="Cadastrar"
      primary={true}
      keyboardFocused={true}
      onClick={() => console.log('Submeteuuuuuuuuuuuuuu')}
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
          title="Dialog With Actions"
          actions={modalActions}
          modal={true}
          open={isOpenCreateRequestModal}
          onRequestClose={onCloseCreateRequestModal}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
    </div>
  )
}

export default RequestTableMenu;
