const templete = `
<div>
    <div class="container">
        <div class="row">
            <div class="col">            
<pre style="color:#d1d1d1;background:#000000;">http://swapi<span style="color:#00a800; ">.</span>dev/api/
</pre>

<pre style="color:#d1d1d1;background:#000000;"><span style="color:#ff8906; ">&lt;</span><span style="color:#e66170; font-weight:bold; ">script</span> src<span style="color:#d2cd86; ">=</span><span style="color:#00c4c4; ">"./src/main.js"</span> type<span style="color:#d2cd86; ">=</span><span style="color:#00c4c4; ">"module"</span><span style="color:#ff8906; ">&gt;</span><span style="color:#ff8906; ">&lt;/</span><span style="color:#e66170; font-weight:bold; ">script</span><span style="color:#ff8906; ">&gt;</span>
</pre>


            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>{{title}}</h3>
                {{message}}<br>
                <button class="btn btn-primary" v-on:click="fetchCharactor()">Test fetch Charactor</button>
                <hr>
                <charactor v-bind:id="1"></charactor>
                <hr>
            </div>
        </div>
        <div class="row">
            <charactor 
                v-for="(id, seq) in initial_ids"
                :key="seq"
                :id="id"
            />
        </div>
    </div>
</div>
`
import Charactor from './components/Charactor.vue.js'
export default {
    name: 'app',
    template: templete,
    components: {
        charactor: Charactor 
    },
    data() {
        return {
            title: "Generate Your Team",
            initial_ids: [1, 13, 14, 25],
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