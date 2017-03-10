var Body = React.createClass({
  getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handelSubmit(skill){
    var newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeSkillFromDOM(id);
      }
    });
  },

  removeSkillFromDOM(id) {
    let newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

    this.setState({ skills: newSkills });
  },

  render(){
    return(
      <div>
        <NewSkill handelSubmit={this.handelSubmit} />
        <AllSkills skills={this.state.skills}
                   handleDelete={this.handleDelete} />
      </div>
    )
  }
});
