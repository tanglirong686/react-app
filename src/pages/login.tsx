import React from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd-mobile';
import {useNavigate} from 'react-router-dom';
import cacheUtil from '../common/localCache';

const Login = () => {
  
    // 登录表单对象
    const [loginForm] = Form.useForm();
    const navigate = useNavigate();

    // 登录
    const loginFun = () =>{
        const formValues = loginForm.getFieldsValue();
        console.log(formValues)
        // // 设置登录成功
        cacheUtil.add('logging',true);
        // // 临时写死的用户token
        // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGx9.PG4QF2a2H0jv-tYkq5AZ4cvQu4QCaPXLlVt_45VIlsI';
        // cookieUtil.add('token' ,token);
        // // 重定向到首页
        navigate('/home');
        window.location.reload();
    };
  return (
    <div className='login'>
      <Form
        layout='horizontal'
        form={loginForm}
        footer={
          <Button block type='submit' color='primary' size='large' onClick={loginFun}>
            提交
          </Button>
        }
      >
        <Form.Item name='username' label='用户名'
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
        <Input clearable placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item name='password' label='密码'
          rules={[{ required: true, message: '密码不能为空' }]}
        >
        <Input clearable type='password' placeholder='请输入密码' />
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login;