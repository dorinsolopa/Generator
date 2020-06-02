import React from "react";

class TableContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const url = this.props.table.apiEndpoint;
    const response = await fetch(url);
    const data = await response.json();
    console.log("dataData-->", data);
    this.setState({ columns: data, loading: false });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body ">
          <table className="table ">
            <thead className="thead-dark">
              <tr>
                {this.props.table.columns.map((item) => {
                  return (
                    <th key={item.key} value={item.value}>
                      {item.title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.columns.map((item) => {
                return (
                  <tr>
                    {this.props.table.columns.map((column) => {
                      return <td>{item[column.key]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TableContent;
