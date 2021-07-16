import React from 'react';

import { Grid } from './styles';
import PageList from '../../components/PageList';
import HeaderEmpty from '../../components/HeaderEmpty';
import HeaderAuto from '../../components/HeaderAuto';
import PageInfo from '../../components/PageInfo';
import PageHeader from '../../components/PageHeader';
import ListInfo from '../../components/ListInfo';
import SourcePage from '../../components/SourcePage';

const UserLayout: React.FC = () => {
  return (
    <Grid>
      <PageList />
      <HeaderEmpty />
      <HeaderAuto />

      <PageInfo />
      <PageHeader />
      <ListInfo />
      <SourcePage />
    </Grid>
  );
}

export default UserLayout;