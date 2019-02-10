<template>
	<div class="races">
		<h1>Drivers</h1>
		
		<div class="container">
            <div class="row justify-content-md-center">
                <div class="col-sm-12">
					<b-form-group
						id="fieldset1"
						label="Search driver.."
						label-for="input1"
					>
						<b-form-input id="input1" v-model="filter"></b-form-input>
					</b-form-group>
                </div>
            </div>
			<transition-group name="list" tag="div" class="row justify-content-md-center" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
				<div class="col-sm-12 col-md-4 box" v-for="driver in getDrivers" :key="driver.driverId">
					<b-list-group>
						<b-list-group-item><strong>ID:</strong> {{ driver.driverId }} </b-list-group-item>
						<b-list-group-item><strong>Name:</strong> {{ driver.givenName }} </b-list-group-item>
						<b-list-group-item><strong>Surname:</strong> {{ driver.familyName }} </b-list-group-item>
						<b-list-group-item><strong>Date of birth:</strong> {{ driver.dateOfBirth }} </b-list-group-item>
						<b-list-group-item><strong>Nationality:</strong> {{ driver.nationality }} </b-list-group-item>
						<!-- <b-list-group-item><strong>Bio:</strong> <a href="{{ driver.url }}" target="_blank">Driver wiki</a></b-list-group-item> -->
						<!-- <b-list-group-item><strong>Details:</strong> <a (click)="goToDriver(driver.driverId)" target="_blank">Driver info</a></b -list-group-item>-->
					</b-list-group>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate';
	export default {
		name: 'drivers',
		data() {
			return {
				filter: '',
				drivers: []
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
            this.$http.get('http://ergast.com/api/f1/2016/drivers.json').then(result => {
				this.drivers = result.data.MRData.DriverTable.Drivers;
            }, error => {
                console.error(error);
            });
        },
		computed: {
			getDrivers() {
				var drivers = this.drivers.filter((driver) => {
					return driver.givenName.toLowerCase().includes(this.filter.toLowerCase()) || driver.familyName.toLowerCase().includes(this.filter.toLowerCase());
				});

				if (this.sort == 'views') {
					return drivers.sort(function(a, b) {
						return b.views - a.views
					});
				} else {
					return drivers;
				}
			}
		}	
	}
</script>

<style scoped>
	h1 { margin: 20px 0; }
	.box { margin-bottom: 20px;  }
</style>