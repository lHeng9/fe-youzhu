import * as React from 'react';
import { Form, Input, Checkbox, Alert } from 'antd';
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};
const Regester = (props: any) => {
  const { form, isError } = props
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="regester">
      {
        isError ?
          <Alert message="请输入符合规定的用户名密码,保证信息的完整" type="error" style={{marginBottom:'30px'}}/>
          : null
      }

      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          label="用户名"
          name="username"
          hasFeedback
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          hasFeedback
          rules={[{ required: true, message: '请输入密码,6-12位字母数字下划线组合' }, ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || value.match(/^[\w]{6,12}$/)) {
                return Promise.resolve()
              }
              return Promise.reject('密码是6-12位字母数字下划线组合')
            }
          })]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请再次输入密码',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次输入的密码不匹配');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Regester