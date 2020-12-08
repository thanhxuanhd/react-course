import React, { Component, MouseEvent } from "react";
import {
  GetTaskItemDetai,
  ITask,
  TaskItemDetailState,
  StatusType,
  FieldData,
  UpdateTaskItem,
} from "../core";
import { Button, Input, Form, Select } from "antd";

const intialState: TaskItemDetailState = {
  Task: {
    Id: 0,
    Title: "",
    Description: "",
    Status: 0,
  },
  fields: [],
};

const { TextArea } = Input;

export class TaskItemDetai extends Component<any, TaskItemDetailState> {
  state = {
    ...intialState,
  };

  componentDidMount() {
    const props: any = this.props;
    const id = props.match.params.id;
    GetTaskItemDetai(id)
      .then((data: ITask) => {
        let fields = [
          {
            name: ["id"],
            value: data.Id,
          },
          {
            name: ["title"],
            value: data.Title,
          },

          {
            name: ["description"],
            value: data.Description,
          },
          {
            name: ["status"],
            value: data.Status,
          },
        ] as FieldData[];
        this.setState({
          Task: {
            ...data,
          },
          fields: [...fields],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClickBack = (event: MouseEvent) => {
    event.preventDefault();
    const props: any = this.props;
    props.history.push("/");
  };

  onFinish = (values: any) => {
    this.setState({
      Task: {
        Id: values["id"],
        Title: values["title"],
        Description: values["description"],
        Status: values["status"],
      },
    });
    UpdateTaskItem(this.state.Task).then((response) => {
      const props: any = this.props;
      props.history.push("/");
    });
  };

  onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((pre) => {
      const task = pre.Task;
      return {
        Task: {
          ...task,
          Title: e.target.value,
        },
      };
    });
  };

  render() {
    return (
      <div className="task-item-detail mb-5 flex w-full bg-gray-200 text-gray-80">
        <div className="p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 ml-5 mr-5 mt-4 mb-5 w-full">
          <div className="flex">
            <h3 className="font-bold text-xl p-5">
              Task {this.state.Task.Title}
            </h3>
          </div>
          <Form
            layout={"vertical"}
            fields={this.state.fields}
            onFinish={this.onFinish}
          >
            <Form.Item name="id" hidden={true}>
              <Input />
            </Form.Item>
            <div className="mb-2">
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Please input your title!" },
                ]}
              >
                <Input onChange={this.onTitleChange} />
              </Form.Item>
            </div>
            <div className="mb-2">
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please input your description!" },
                ]}
              >
                <TextArea />
              </Form.Item>
            </div>
            <div className="mb-2">
              <Form.Item
                label="Status"
                name="status"
                rules={[
                  { required: true, message: "Please input your description!" },
                ]}
              >
                <Select className="text-left">
                  <Select.Option value="">Please select item</Select.Option>
                  <Select.Option value={StatusType.Todo}>To do</Select.Option>
                  <Select.Option value={StatusType.InProgess}>
                    In-progess
                  </Select.Option>
                  <Select.Option value={StatusType.Pending}>
                    Pending
                  </Select.Option>
                  <Select.Option value={StatusType.Completed}>
                    Completed
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className="mb-4">
              <Button
                className="bg-blue-600 text-white rounded"
                htmlType="submit"
              >
                Save
              </Button>
              <Button
                className="bg-white text-gray-400 rounded"
                type="default"
                onClick={this.onClickBack}
              >
                Back
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
