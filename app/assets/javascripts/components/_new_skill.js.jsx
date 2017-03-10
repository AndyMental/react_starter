var NewSkill = React.createClass({

  getInitialState() {
    return{ name: '', details: '' }
  },

  handleClick(){
    var name = this.state.name;
    var details = this.state.details;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: {name: name, details: details } },
      success: (response) => {
        console.log('it worked!', response);
      }
    });
  },

  render(){
    return(
      <div>
        <input onChange={ (e) => this.setState({ name: e.target.value }) } placeholder='Enter name of skill' />
        <input onChange={ (e) => this.setState({ details: e.target.value }) } placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
