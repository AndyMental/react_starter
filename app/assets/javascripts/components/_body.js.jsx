var Body = React.createClass({
  getInitialState() {
    return {
      skills: []
    }
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handelSubmit(skill){
    var newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },

  render(){
    return(
      <div>
        <NewSkill handelSubmit={this.handelSubmit} />
        <AllSkills skills={this.state.skills} />
      </div>
    )
  }
});
