import React, { Component } from "react";
import { FieldData, FormProps, FormStates, GetUser, IPersonal } from "../core";
import { Input, Form } from "antd";

const intialState: FormStates = {
  data: {
    Username: "",
    FullName: "",
    Avartar: "",
  } as IPersonal,
  fields: [],
};

class PersonForm extends Component<FormProps, FormStates> {
  state = {
    ...intialState,
  };

  componentDidMount() {
    GetUser("1")
      .then((data: IPersonal) => {
        console.log(data);
        let fields = [
          {
            name: ["id"],
            value: data.Id,
          },
          {
            name: ["username"],
            value: data.Username,
          },

          {
            name: ["fullname"],
            value: data.FullName,
          },
        ] as FieldData[];

        this.setState({
          data: {
            ...data,
          },
          fields: [...fields],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 ml-5 mr-5 mt-4 mb-5">
        <div className="image-avartar w-full">
          <img
            src={`${this.state.data.Avartar}`}
            alt="avarta"
            className="w-32 rounded-full ring-2  m-auto"
          />
        </div>
        <Form
          layout={"vertical"}
          className="text-left"
          fields={this.state.fields}
        >
          <div className="mb-2">
            <Form.Item label="User Name" name="username">
              <Input readOnly={true} />
            </Form.Item>
          </div>
          <div className="mb-2">
            <Form.Item label="Full Name" name="fullname">
              <Input readOnly={true} />
            </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
}

export default PersonForm;
