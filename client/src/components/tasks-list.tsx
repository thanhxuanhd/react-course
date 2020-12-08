import React, { Component } from "react";
import { Link } from "react-router-dom";

import { GetTaskList, ITask, StatusType, TaskListState } from "../core";

const intiTaskListState = {
  data: [],
};
export class TaskList extends Component<unknown, TaskListState> {
  state = {
    ...intiTaskListState,
  };

  componentDidMount() {
    GetTaskList()
      .then((data: Array<ITask>) => {
        this.setState({
          data: [...data],
        });
      })
      .catch((error) => console.log(error));
  }

  mappingStatus(status: StatusType) {
    let statusName = "";
    switch (status) {
      case StatusType.InProgess:
        statusName = "In-progess";
        break;
      case StatusType.Completed:
        statusName = "Completed";
        break;
      case StatusType.Pending:
        statusName = "Pending";
        break;
      case StatusType.Todo:
        statusName = "Todo";
        break;
      default:
        statusName = "";
        break;
    }
    return statusName;
  }

  render() {
    return (
      <div className="task-list mb-5">
        <div className="flex">
          <h3 className="font-bold text-xl p-5">Task</h3>
        </div>
        <div className="task-list-item flex w-full">
          <div className="bg-white pb-4 px-4 rounded-md w-full ml-5 mr-5 m-auto">
            <div className="flex justify-between w-full pt-6 "></div>
            <div className="w-full flex justify-end px-2 mt-2">
              <div className="w-full sm:w-64 inline-block relative ">
                <input
                  type=""
                  name=""
                  className="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-2 px-2 pl-8 rounded-lg"
                  placeholder="Search"
                />

                <div className="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">
                  <svg
                    className="fill-current h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.999 511.999"
                  >
                    <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto mt-6">
              <table className="table-auto border-collapse w-full text-left">
                <thead>
                  <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                    <th className="px-2 py-2 bg-gray-200 ">Title</th>
                    <th className="px-2 py-2 bg-gray-200">Description</th>
                    <th className="px-2 py-2 bg-gray-200">Status</th>
                    <th className="px-2 py-2 bg-gray-200 w-12">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-normal text-gray-700">
                  {this.state.data.map((item: ITask) => {
                    return (
                      <tr key={item.Id}>
                        <td className="px-2 py-2">{item.Title}</td>
                        <td className="px-2 py-2">{item.Description}</td>
                        <td className="px-2 py-2">
                          {this.mappingStatus(item.Status)}
                        </td>
                        <td className="px-2 py-2 w-12">
                          <Link to={`task/${item.Id}`} className="link text-blue-500">Edit</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TaskList;
