var Skill = React.createClass({
  getInitialState(){
    return {name: '', details: ''}
  },

  handleEdit(){
  if (this.state.editable){
    var name = this.state.name;
    var details = this.state.details;
    console.log('in handleedit', this.state.editable, name, details);
    this.onUpdate();
  }
    this.setState({ editable: !this.state.editable })
  },

  onUpdate(){
    if (this.state.editable) {
      var id = this.props.skill.id;
      var name = this.state.name;
      var details = this.state.details;
      var level = this.props.skill.level;
      var skill = { id: id, name: name, details: details, level: level }

      this.props.handleUpdate(skill);
    }
    this.setState({ editable: !this.state.editable })
  },

  render(){
    var name = this.state.editable ? <input type='type' onChange={ (e) => this.setState({ name: e.target.value })}
                                                        defaultValue={this.props.skill.name} />
                                                      : <h3>{this.props.skill.name}</h3>
    var details = this.state.editable ? <textarea type='type' onChange={ (e) => this.setState({ details: e.target.value })}
                                                        defaultValue={this.props.skill.details}></textarea>
                                                      : <p>{this.props.skill.details}</p>
    return(
      <div>
        {name}
        <p><strong>Level:</strong> {this.props.skill.level}</p>
        {details}
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
      </div>
    )
  }
});


