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
    console.log(skill);
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
