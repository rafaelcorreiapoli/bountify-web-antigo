export const alphaNumericalSort = function(sortColumn, sortDirection){

  var comparer = function(a, b) {
    if(sortDirection === 'ASC'){
      return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
    }else if(sortDirection === 'DESC'){
      return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
    }
  }
  var rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
  this.setState({rows : rows});
}
