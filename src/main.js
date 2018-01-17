import TodoMVC from './TodoMVC.html';

const app = new TodoMVC({
	target: document.body,
	data: {
		items: [
      {
        id: 1,
        description: 'item 1',
      },
      {
        id: 2,
        description: 'item 2',
      },
    ]
	}
});

export default app;