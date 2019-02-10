<template>
	<div class="races">
		<h1>Races</h1>

		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-sm-12">
					<b-form-group
						id="fieldset1"
						label="Search race.."
						label-for="input1"
					>
						<b-form-input id="input1" v-model="filter"></b-form-input>
					</b-form-group>

				</div>
			</div>
			<transition-group name="list" tag="div" class="row justify-content-md-center" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
				<div class="col-sm-12 col-md-4 box" v-for="race in getRaces" :key="race.round">
					<b-list-group>
						<b-list-group-item><strong>Round:</strong> {{ race.round }}</b-list-group-item>
						<b-list-group-item><strong>Race Name:</strong> {{ race.raceName }} </b-list-group-item>
						<b-list-group-item><strong>Circut name:</strong> {{ race.Circuit.circuitName }} </b-list-group-item>
						<b-list-group-item><strong>Locality:</strong> {{ race.Circuit.Location.locality }}</b-list-group-item>
						<b-list-group-item><strong>Country:</strong> {{ race.Circuit.Location.country }}</b-list-group-item>
					</b-list-group>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate';
	export default {
		name: 'home',
		data() {
			return {
				filter: '',
				races: []
			}
		},
		methods: {
			beforeEnter: function (el) {
				el.style.opacity = 0
				// el.style.height = 0
			},
			enter: function (el, done) {
				// console.log(el)
				var delay = el.dataset.index * 150
				setTimeout(function () {
					Velocity(
						el,
						{ opacity: 1 },
						{ complete: done }
					)
				}, delay)
			},
			leave: function (el, done) {
				var delay = el.dataset.index * 150
				setTimeout(function () {
					Velocity(
						el,
						{ opacity: 0 },
						{ complete: done }
					)
				}, delay)
			}
		},
		mounted() {
            this.$http.get('http://ergast.com/api/f1/2016.json').then(result => {
                // console.log(result.data.MRData.RaceTable.Races);
				this.races = result.data.MRData.RaceTable.Races;
            }, error => {
                console.error(error);
            });
        },
		computed: {
			getRaces() {
				var races = this.races.filter((race) => {
					return race.Circuit.circuitName.toLowerCase().includes(this.filter.toLowerCase()) || race.raceName.toLowerCase().includes(this.filter.toLowerCase());
				});

				if (this.sort == 'views') {
					return races.sort(function(a, b) {
						return b.views - a.views
					});
				} else {
					return races;
				}
			}
		}

	}
</script>

<style scoped>
	h1 { margin: 20px 0; }
	.box { margin-bottom: 20px;  }
</style>
