const template = `
<div class="col-4 m-1">
    <div class="card character-card ">
        <div class="card-header"><h4 class="card-title">{{charactor.name}}</h4></div>
        <div class="card-body">
            
            <p class="card-text">Hieght: {{charactor.height}}cm</p>
            <p class="card-text">Mass: {{charactor.mass}}kb</p>
            <p class="card-text">Hair Color: {{charactor.hair_color}}</p>
            <p class="card-text">Eye Color: {{charactor.eye_color}}kb</p>
        </div>
        <div class="card-footer">
            <button class="btn btn-info" @click="switchCharactor">Switch Charactor</button>
        </div>
    </div>
<!--{{charactor}}-->
</div>
`
export default {
    name: 'charactor',
    template: template,
    props: ['id'],
    data() {
        return {
            charactor: {}
        }
    },
    created() {
        this.fetchCharactor(this.id)
    },
    methods: {
        fetchCharactor(id) {
            fetch(`http://swapi.dev/api/people/${id}`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => this.charactor = json)
        },
        switchCharactor() {
            let random_id = Math.floor(Math.random() * 83) + 1
            this.fetchCharactor(random_id)
        }
    }
}