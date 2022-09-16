const template = `
<div>
{{charactor}}
</div>
`
export default {
    name: 'charactor',
    template: template,
    data() {
        return {
            charactor: {}
        }
    },
    created() {
        this.fetchCharactor()
    },
    methods: {
        fetchCharactor() {
            fetch('http://swapi.dev/api/people/1', {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => this.charactor = json)
        }
    }
}