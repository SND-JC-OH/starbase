const templete = `
<div>
    <div class="container">
        <div class="row">
            <div class="col">
            <h3>{{title}}</h3>
            {{message}}<br>
            <button class="btn btn-primary" v-on:click="fetchCharactor()">Test fetch Charactor</button>
            <hr>
            <Charactor></Charactor>
            </div>
        </div>
    </div>
</div>
`
import Charactor from './components/Charactor.vue.js'
export default {
    name: 'app',
    template: templete,
    components: {
        Charactor
    },
    data() {
        return {
            title: "Generate Your Team",
            message: "Hello World-1"
        }
    },
    methods: {
        fetchCharactor() {
            fetch('http://swapi.dev/api/people', {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => console.log(json))
        }
    }
}