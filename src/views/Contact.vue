<template>
 

	<div class="contact mt-5">
		<h1>Contact frontend validation</h1>
		<div class="container">
			<div class="row">
				<section class="col-sm-12 col-md-8 offset-md-2">
					<form @submit.prevent="handleSubmit">
						<section class="form">
							<div class="form-group">
								<label for="email">Email</label>
								<input 
									v-model="form.email" 
									v-validate="'required|email'" 
									v-bind:class="{'is-danger': errors.has('email')}" 
									class="form-control" 
									type="text" 
									placeholder="Full email"
									data-vv-name="email" />

								

								<p class="alert alert-danger mt-2" v-show="submitted && errors.has('email')">
									{{ errors.first('email') }}
								</p>
							</div>
							<div class="form-group">
								<label class="label">Message</label>
								<textarea class="form-control" v-validate="'required|min:30'" placeholder="Message" v-model="form.message" data-vv-name="message"></textarea>
								<p class="alert alert-danger mt-2" v-show="submitted && errors.has('message')">
									{{ errors.first('message') }}
								</p>
							</div>
							
						
							<div class="form-group"> 
							
								<button type="submit" class="btn btn-primary">Submit</button>
								<p class="alert alert-success mt-2" v-show="success">
									Contact form submited successfuly
								</p>
							</div>				
						</section>
					</form>

					
				</section>

				<section class="col-sm-12 col-md-8 offset-md-2" id="results" v-show="success">
					<ul class="list-group">          
						<li class="list-group-item" v-for="(item, k) in form" :key="k">
							<strong>{{ k }}:</strong> {{ item }}
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Contact',
	data() {
		return {
			form: {
				email: '',
				message: ''
			},
            submitted: false,
			success: false,
			formated: ''
		}
	},
	methods: {
		handleSubmit() {
			this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
					this.success = valid;
					console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.form));
                }
            });
			// this.form.email = '';
			// this.form.message = '';
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
