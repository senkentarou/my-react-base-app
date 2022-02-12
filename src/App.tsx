import React from 'react';

import { AppBar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyAppBar = styled(AppBar)({
  width: '100%',
  height: '4rem',
  marginBottom: '1rem',
  justifyContent: 'center'
});

const AppTitle = styled(Typography)({
  marginLeft: '1rem'
});

export const App: React.VFC = () => {
  return (
    <>
      <MyAppBar position="static">
        <AppTitle variant="h4">my-react-base-app</AppTitle>
      </MyAppBar>
    </>
  );
};
