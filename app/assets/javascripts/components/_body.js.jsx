var Body = React.createClass({
	getInitialState() {
		return { items: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
	},

	handleSubmit(item) {
		var newState = [item].concat(this.state.items);
		this.setState({ items: newState })
	},

	handleDelete() {
		$.ajax({
			url: '/api/v1/items/${id}',
			type: 'DELETE',
			success:() => {
				this.removeItemClient(id);
			}
		});
	},

	removeItemClient(id) {
		var newItems = this.state.items.filter((item) => {
			return item.id != id;
		});
		this.setState({ items: newItems });
	},

	render() {
		return (
			<div>
				<NewItem handleSubmit={this.handleSubmit}/>
				<AllItems items={this.state.items} handleDelete={this.handleDelete}/>
			</div>
		)
	}
});