var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit(){
    console.log('you are in edit');
  },

  render(){
    var skills = this.props.skills.map((skill) => {
      return(
      <div key={skill.id}>
        <Skill skill={skill}
          handleDelete={this.handleDelete.bind(this, skill.id)}
          handleEdit={this.handleEdit} />
      </div>
      )
  });

  return(
    <div>
      {skills}
    </div>
  )
  }
});
