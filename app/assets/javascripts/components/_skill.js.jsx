var Skill = React.createClass({
  getInitialState(){
    return {editable: false}
  },

  handleEdit(){
    this.setState({ editable: !this.state.editable })
  },

  render(){
    var name = this.state.editable ? <input type='type' defaultValue={this.props.skill.name} />
                                    : <h3>{this.props.skill.name}</h3>
    var details = this.state.editable ? <textarea type='type' defaultValue={this.props.skill.details}></textarea>
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


