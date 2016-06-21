import React from 'react';
import RestaurantesList from '/imports/ui/components/RestaurantesList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Loading from '/imports/ui/components/Loading';

let styles = {
  fab: {
    position: 'fixed',
    right: 10,
    bottom: 10
  }
};

export default class RestaurantesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.history.push('/restaurantes/add');
  }

  render() {
    let { restaurantes, loading} = this.props;

    return (
      <div>

        {!loading ? <RestaurantesList restaurantes={restaurantes}/> : <Loading />}
        <FloatingActionButton onTouchTap={this.handleClick.bind(this)} style={styles.fab}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
};