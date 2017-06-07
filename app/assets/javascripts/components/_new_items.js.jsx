var NewItem= React.createClass({
	handleSubmit(event) {
		event.preventDefault()
		var name = $("#name").val();
		var description = $("#description").val();

		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: { item: { name: name, description: description } },
			success: (item) => {
				this.props.handleSubmit(item);
			}
		});
	},

	render() {
	return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<input id="name" placeholder='Enter the name of the item' />
				<input id="description" placeholder='Enter a description' />
				<input type='submit' ></input>
			</form>
		</div>
		)
	}
});