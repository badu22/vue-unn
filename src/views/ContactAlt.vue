<template>
 

	<div class="contact mt-5">
		<h1>Contact server validation</h1>
		<div class="container">
			<div class="row">
				<section class="col-sm-12 col-md-8 offset-md-2">
					<form @submit.prevent="handleSubmit">
						<section class="form">
							<div class="form-group">
								<label for="email">Email</label>
								<input 
									v-model="form.email" 
									v-bind:class="{'is-danger': formValidate.emailError}" 
									class="form-control" 
									type="text" 
									placeholder="Email"
									data-vv-name="email" />

								

								<p class="alert alert-danger mt-2" v-show="submitted && formValidate.emailError">
									Please enter valid email
								</p>
							</div>
							<div class="form-group">
								<label class="label">Message</label>
								<textarea class="form-control" placeholder="Message" v-model="form.message" data-vv-name="message"></textarea>
								<p class="alert alert-danger mt-2" v-show="submitted && formValidate.messageError">
									Message must be 30 characters long
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

			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ContactAlt',
	data() {
		return {
			form: {
				email: '',
				message: ''
			},
            formValidate: {
				emailError: false,
				messageError: false
			},
            submitted: false,
			success: false,
			formated: ''
		}
	},
	methods: {
		handleSubmit() {
            var self = this;
			this.submitted = true;
            this.formated = JSON.stringify(this.form);
            let url = 'http://localhost:3000/users';

            this.formValidate.emailError = false;
            this.formValidate.messageError = false;

            console.log('SUCCESS!! :-)' + JSON.stringify(this.form));
            
            this.$http.post(url, this.formated)
                .then(response => {
                    self.success = true;
                    self.form.email = '';
                    self.form.message = '';
                    console.log('response', response);
                }).catch((err) => {
                    // console.log(err.body.errors);
                    err.body.errors.forEach(function (item) {
                        if ( item.param == 'email' ) {
                            self.formValidate.emailError = true;
                        } else if ( item.param == 'message' ) {
                            self.formValidate.messageError = true;
                        }
                        // console.log(item.param);
                    });
                })

        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
