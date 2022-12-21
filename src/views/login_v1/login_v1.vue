<template>
	<div class="login-container">
		<div class="login-form">
			<div class="login-title">
				<div class="title">欢迎登陆</div>
			</div>

			<el-form :model="form" :rules="rules" ref="formRef">
				<el-form-item prop="username">
					<el-input v-model="form.username">
						<template #prefix>
							<el-icon>
								<User />
							</el-icon>
						</template>
					</el-input>
				</el-form-item>

				<el-form-item prop="password">
					<el-input :type="[form.flag ? 'text' : 'password']" v-model="form.password">
						<template #prefix>
							<el-icon>
								<Lock />
							</el-icon>
						</template>
						<template #suffix>
							<el-icon @click="form.flag = !form.flag" v-if="form.flag">
								<View />
							</el-icon>
							<el-icon @click="form.flag = !form.flag" v-if="!form.flag">
								<Hide />
							</el-icon>
						</template>
					</el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="success" @click="login">登陆</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="copyright">
			<div class="copyright-link">
				<a target="new" href="https://beian.miit.gov.cn/">赣ICP备2022002676号-1</a>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock, Hide, View } from '@element-plus/icons-vue'

const form = ref({
	username: '',
	password: '',
	flag: false
})

const rules = ref({
	username: [
		{
			required: true,
			message: '请输入账户名',
			trigger: 'blur'
		},
		{
			min: 4,
			max: 10,
			message: '长度为 4-10 之间',
			trigger: 'blur'
		}
	],
	password: [
		{
			required: true,
			message: '请输入密码',
			trigger: 'blur'
		},
		{
			min: 6,
			max: 12,
			message: '长度为 6-12',
			trigger: 'blur'
		}
	]
})

const formRef = ref(null)

const login = () => {
	formRef.value.validate((valid) => {
		if (valid) {
			console.log('submit!')
		} else {
			console.log('error submit!')
			return false
		}
	})
}

</script>

<style lang="scss" scoped>
$vh: 100vh;

$bgColor: #2d3a4b;
$darkGray: #889aa4;
$lightGray: #eee;
$white: #fff;
$lightBlue: #66b1ff;
$lightGreen: #85ce61;

.login-container {
	width: 100%;
	height: $vh;
	display: grid;
	place-content: center;
	background: $bgColor;

	.login-form {
		display: flex;
		flex-flow: column;
		justify-content: center;
		width: 300px;

		.login-title {
			.title {
				font-size: 17px;
				color: $white;
				padding: 20px 0;
			}
		}

		::v-deep {
			.el-form {
				display: flex;
				flex-flow: column;
				justify-content: center;

				.el-form-item {
					box-shadow: initial;
					background: transparent;
					border: 1px solid rgba(255, 255, 255, 0.1);
					border-radius: 5px;
					display: flex;
					flex-flow: row;
					align-items: center;
					height: 40px;
					margin-bottom: 20px;

					> [class^='el-form-item'] {
						flex-flow: row;
						height: 100%;
					}

					.el-icon {
						cursor: pointer;
						display: flex;
						flex-flow: row;
						align-items: center;
						justify-content: center;
						height: 100%;
						width: 40px;

						svg {
							height: 60%;
							width: 60%;
							color: $white;
						}
					}

					.el-input {
						width: calc(100% / 2);
						flex-grow: 1;
						height: 100%;

						> [class^='el-input'] {
							background: transparent;
							box-shadow: initial;
						}

						[class$='inner'] {
							.el-icon {
								margin: initial;
							}
						}

						input {
							color: $white;
							font-size: 17px;
							caret-color: $white;
							padding: 0 40px;
						}
					}

					.el-button {
						width: 100%;

						span {
							font-size: 14px;
						}
					}

					.el-form-item__error {
						padding-top: 4px;
					}
				}

				.el-form-item:last-of-type {
					border: initial;
				}

				.el-form-item:focus-within {
					border-color: $lightGreen;

					.el-icon {
						svg {
							color: $lightGreen;
						}
					}

					.el-input {
						input {
							caret-color: $lightGreen;
							color: $lightGreen;
						}

						input::selection {
							background: $lightGreen;
						}
					}
				}
			}
		}
	}

	.copyright {
		color: white;
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: center;

		.copyright-link {
			a {
				color: $darkGray;
			}
		}
	}
}
</style>
