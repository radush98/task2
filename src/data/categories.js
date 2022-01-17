const categories = [
    {
        name: 'Task',
        icon: 'list.png'
    },
    {
        name: 'Random_thought',
        icon: 'thought.png'
    },
    {
        name: 'Idea',
        icon: 'idea.png'
    }
];

function getCategoriesNames() {
    return categories.map(elem => elem.name);
}

export { categories, getCategoriesNames };
