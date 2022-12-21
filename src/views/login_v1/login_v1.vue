<template>
  <div class="login-container">
    <div class="login-form">
      <div class="login-title">
        <div class="title">欢迎登陆</div>
      </div>

      <el-form :model="form" ref="formRef">
        <el-form-item>
          <el-input v-model="form.username" maxlength="30">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            :type="[form.flag ? 'text' : 'password']"
            v-model="form.password"
            maxlength="30"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
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
          <el-button type="success">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="copyright">
      <div class="copyright-link">
        <a target="new" href="https://beian.miit.gov.cn/"
          >赣ICP备2022002676号-1</a
        >
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
            padding-right: 8px;

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

            [class$='suffix'] {
              .el-icon {
                padding-right: initial;
                padding-left: 8px;
              }
            }

            input {
              color: $white;
              font-size: 17px;
              caret-color: $white;
            }
          }

          .el-button {
            width: 100%;

            span {
              font-size: 14px;
            }
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
